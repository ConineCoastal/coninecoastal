"""Draw the Cards icons: a stylised QR finder pattern, white on near-black.
Run from the repo root: python scripts/cards-make-icons.py"""
from PIL import Image, ImageDraw

BG, FG = (17, 20, 24), (255, 255, 255)

def icon(size, pad_frac):
    im = Image.new("RGB", (size, size), BG)
    d = ImageDraw.Draw(im)
    pad = size * pad_frac
    u = (size - 2 * pad) / 7  # a 7x7 finder pattern
    def sq(x, y, w, fill):
        d.rectangle([pad + x * u, pad + y * u, pad + (x + w) * u - 1, pad + (y + w) * u - 1], fill=fill)
    sq(0, 0, 7, FG); sq(1, 1, 5, BG); sq(2, 2, 3, FG)
    return im

icon(192, 0.2).save("public/cards/icons/icon-192.png")
icon(512, 0.2).save("public/cards/icons/icon-512.png")
icon(512, 0.3).save("public/cards/icons/icon-maskable-512.png")
icon(180, 0.2).save("public/cards/apple-touch-icon.png")
