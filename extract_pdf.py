
import sys
import os

try:
    from pypdf import PdfReader
    reader = PdfReader("About.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)
except ImportError:
    print("pypdf not installed. Trying raw extraction...")
    try:
        with open("About.pdf", "rb") as f:
            content = f.read()
            # Very basic extraction of text strings
            text = ""
            in_text = False
            current_text = []
            for b in content:
                if 32 <= b <= 126: # Printabl ASCII
                    current_text.append(chr(b))
                else:
                    if len(current_text) > 4:
                        text += "".join(current_text) + "\n"
                    current_text = []
            print(text)
    except Exception as e:
        print(f"Error: {e}")
