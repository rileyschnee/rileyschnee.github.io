# Assets Tips

## Favicon
The `favicon.ico` and base SVG files can be generated locally on macOS using Python and the built-in `sips` engine, given a png.
To regenerate the .ico file:
```bash
# First make sure icon-master.png is 32x32px
sips -s format ico <icon-master.png> --out favicon.ico
```
To regenerate the .svg file: 
```bash
python3 -c "import base64; img=open('<path/to/image.png>', 'rb').read(); enc=base64.b64encode(img).decode('utf-8'); open('favicon.svg', 'w').write(f'<svg xmlns=\"http://w3.org\" viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\"><image href=\"data:image/png;base64,{enc}\" width=\"32\" height=\"32\"/></svg>')"
```