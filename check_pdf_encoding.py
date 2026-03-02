
import sys
import re

def extract_text_from_pdf(pdf_path):
    try:
        with open(pdf_path, 'rb') as f:
            content = f.read()

        # Extract text streams between 'stream' and 'endstream'
        # This is a very rough heuristic for uncompressed or simply compressed PDFs if filters aren't complex
        # But most PDFs are compressed with FlateDecode. 
        # Without pypdf, we can only extract plain text if it's not compressed.
        # If it IS compressed, we need a library.
        
        # Let's try to just find strings that look like our headers.
        # "THE MOMENT THAT STARTED EVERYTHING"
        # "WHY OTHER AI COMPANION FAILED US"
        
        # We can try to decode the whole binary as latin-1 and Regex search
        text = content.decode('latin-1')
        
        # Look for the headers the user mentioned to verify if we can see them.
        headers = [
            "THE MOMENT THAT STARTED EVERYTHING",
            "WHY OTHER AI COMPANION FAILED US",
            "WHAT MAKES KIRA COMPLETELY DIFFERENT",
            "WHO KIRA IS FOR",
            "FOUNDERS OPPORTUNITY"
        ]
        
        print("Searching for specific headers in raw PDF content:")
        for h in headers:
            if h in text:
                print(f"[FOUND] {h}")
            else:
                # Try partial match or case insensitive
                if h.upper() in text.upper(): 
                     print(f"[FOUND-CASE] {h}")
                else:
                     print(f"[MISSING] {h}")

        # If we can't find them, we can't extract them.
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text_from_pdf("About.pdf")
