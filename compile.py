import glob
import re
import sys

PREFIX = 'javascript:'
RE_WHITESPACE = re.compile(r'\s+')

def despace(text):
    return PREFIX + RE_WHITESPACE.sub(' ', text).strip()

def process_all(filelist):
    for filename in filelist:
        with open(filename) as f:
            lines = [l for l in [line.strip() for line in f.readlines()]
                     if not l.startswith('//')]
            print(filename)
            compiled = despace(' '.join(lines))
            print(compiled)
            print('')

def main():
    if len(sys.argv) == 1:
        process_all(glob.glob('*.js'))
    else:
        process_all(sys.argv[1:])

if __name__ == '__main__':
    main()
