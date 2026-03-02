
import sys
import re

def extract_content():
    try:
        with open("About.pdf", 'rb') as f:
            content = f.read().decode('latin-1')

        headers = [
            "THE MOMENT THAT STARTED EVERYTHING",
            "WHY OTHER AI COMPANION FAILED US",
            "WHAT MAKES KIRA COMPLETELY DIFFERENT",
            "WHO KIRA IS FOR",
            "FOUNDERS OPPORTUNITY"
        ]
        
        # Normalize content newlines
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Find start indices
        indices = []
        for h in headers:
            # Try exact match first
            idx = content.find(h)
            if idx == -1:
                # Try case insensitive
                idx = content.upper().find(h)
            indices.append((h, idx))
            
        # Sort by index
        indices.sort(key=lambda x: x[1])
        
        # Extract sections
        results = {}
        for i in range(len(indices)):
            header, start_idx = indices[i]
            if start_idx == -1:
                continue
                
            start_content = start_idx + len(header)
            
            if i < len(indices) - 1:
                end_idx = indices[i+1][1]
                section_text = content[start_content:end_idx]
            else:
                section_text = content[start_content:]
            
            # Clean up the text
            # PDF text often has weird spacing/newlines. 
            # We'll try to join lines that shouldn't be broken.
            lines = section_text.split('\n')
            clean_lines = []
            for line in lines:
                line = line.strip()
                if line and not line.isdigit(): # Remove page numbers often found in footers
                    clean_lines.append(line)
            
            results[header] = "\n".join(clean_lines)

        # Print formatted for easy copy-paste
        for h, text in results.items():
            print(f"--- SECTION: {h} ---")
            print(text[:1000] + "..." if len(text) > 1000 else text)
            print("\n")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_content()
