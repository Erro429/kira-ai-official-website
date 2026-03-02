
import sys
import os

try:
    from pypdf import PdfReader
    reader = PdfReader("Blog post.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except ImportError:
    print("pypdf not installed. Trying raw extraction...")
    try:
        with open("Blog post.pdf", "rb") as f:
            content = f.read()
            # Very basic extraction of text strings
            text = ""
            current_text = []
            for b in content:
                if 32 <= b <= 126: # Printable ASCII
                    current_text.append(chr(b)) 
                else:
                    if len(current_text) > 4:
                        text += "".join(current_text) + "\n"
                    current_text = []
            print(text)
    except Exception as e:
        print(f"Error: {e}")
