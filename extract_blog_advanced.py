
import re
import zlib

def extract_text_from_pdf(pdf_path):
    try:
        with open(pdf_path, 'rb') as f:
            content = f.read()

        text_content = []

        # 1. Try to extract text between parentheses (literal strings)
        # This is a very rough heuristic
        literals = re.findall(b'\((.*?)\)', content)
        for literal in literals:
            try:
                # Filter out short or garbage strings
                s = literal.decode('utf-8', errors='ignore')
                if len(s) > 5: 
                    text_content.append(s)
            except:
                pass

        # 2. Try to extract text from streams (compressed content)
        streams = re.findall(b'stream[\r\n]+(.*?)[\r\n]+endstream', content, re.DOTALL)
        for stream in streams:
            try:
                decompressed = zlib.decompress(stream)
                # Look for text inside TJ or Tj operators in the decompressed stream
                # Text is usually in ( ) or [ ] in PostScript/PDF
                # Simple extraction of text between ()
                stream_literals = re.findall(b'\((.*?)\)', decompressed)
                for literal in stream_literals:
                     try:
                        s = literal.decode('utf-8', errors='ignore')
                        if len(s) > 3:
                            text_content.append(s)
                     except:
                        pass
            except Exception:
                # Stream might not be zlib compressed or other error
                pass

        return "\n".join(text_content)

    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    print(extract_text_from_pdf("Blog post.pdf"))
