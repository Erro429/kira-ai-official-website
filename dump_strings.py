
import string

def strings(filename, min=4):
    with open(filename, "rb") as f:
        result = ""
        for b in f.read():
            if chr(b) in string.printable:
                result += chr(b)
                continue
            if len(result) >= min:
                yield result
            result = ""
        if len(result) >= min:  # catch result at EOF
            yield result

for s in strings("Blog post.pdf", min=10):
    print(s)
