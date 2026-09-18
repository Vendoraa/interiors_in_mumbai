#!/usr/bin/env python3
"""
Fast PNG generator using only Python stdlib (struct, zlib).
Creates clean, professional blog section images with readable text.
"""

import struct
import zlib
import json
import os

output_dir = "E:/shrishti_interiors/blog-pipeline-output/images"
os.makedirs(output_dir, exist_ok=True)

def create_png_fast(width, height, pixel_bytes):
    sig = b'\x89PNG\r\n\x1a\n'
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr_chunk = b'IHDR' + ihdr_data
    ihdr = struct.pack('>I', len(ihdr_data)) + ihdr_chunk + struct.pack('>I', zlib.crc32(ihdr_chunk) & 0xffffffff)
    raw = b''
    row_size = width * 3
    for y in range(height):
        raw += b'\x00' + pixel_bytes[y*row_size:(y+1)*row_size]
    compressed = zlib.compress(raw, 6)
    idat_chunk = b'IDAT' + compressed
    idat = struct.pack('>I', len(compressed)) + idat_chunk + struct.pack('>I', zlib.crc32(idat_chunk) & 0xffffffff)
    iend_chunk = b'IEND' + b''
    iend = struct.pack('>I', 0) + iend_chunk + struct.pack('>I', zlib.crc32(iend_chunk) & 0xffffffff)
    return sig + ihdr + idat + iend

def rgb(r, g, b):
    return bytes([r & 0xff, g & 0xff, b & 0xff])

def fill_rect_fast(buf, w, x1, y1, x2, y2, color):
    x1, y1 = max(0, x1), max(0, y1)
    h = len(buf) // (w * 3)
    x2, y2 = min(w-1, x2), min(h-1, y2)
    if x1 > x2 or y1 > y2:
        return
    width_px = x2 - x1 + 1
    color_line = color * width_px
    row_stride = w * 3
    for y in range(y1, y2+1):
        offset = y * row_stride + x1 * 3
        buf[offset:offset+len(color_line)] = color_line

def draw_hline_fast(buf, w, y, x1, x2, color, thickness=1):
    for t in range(thickness):
        fill_rect_fast(buf, w, x1, y+t, x2, y+t, color)

def draw_vline_fast(buf, w, x, y1, y2, color, thickness=1):
    for t in range(thickness):
        fill_rect_fast(buf, w, x+t, y1, x+t, y2, color)

def draw_outline_rect_fast(buf, w, x1, y1, x2, y2, color, thickness=1):
    for t in range(thickness):
        draw_hline_fast(buf, w, y1+t, x1+t, x2-t, color)
        draw_hline_fast(buf, w, y2-t, x1+t, x2-t, color)
        draw_vline_fast(buf, w, x1+t, y1+t, y2-t, color)
        draw_vline_fast(buf, w, x2-t, y1+t, y2-t, color)

# Large bitmap font: 10x16 pixels per character for clear readability
FONT_LARGE = {
    'A': [
        "   XXXX    ",
        "  XXXXXX   ",
        " XXX  XXX  ",
        "XXX    XXX ",
        "XXXXXXXXXX ",
        "XXXXXXXXXX ",
        "XXX    XXX ",
        "XXX    XXX ",
        "XXX    XXX ",
        "XXX    XXX ",
        "XXX    XXX ",
        "XXX    XXX ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'B': [
        "XXXXXXXXX   ",
        "XXXXXXXXX   ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXXXXXX     ",
        "XXXXXXX     ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXXXXXXXX   ",
        "XXXXXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'C': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'D': [
        "XXXXXXXX    ",
        "XXXXXXXXX   ",
        "XXX   XXXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX   XXXX  ",
        "XXXXXXXXX   ",
        "XXXXXXXX    ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'E': [
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXXXXX      ",
        "XXXXXX      ",
        "XXX         ",
        "XXX         ",
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'F': [
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXXXXX      ",
        "XXXXXX      ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'G': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "XXX         ",
        "XXX         ",
        "XXX    XXXX ",
        "XXX    XXXX ",
        " XXX   XXXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'H': [
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'I': [
        "  XXXXXXXX  ",
        "  XXXXXXXX  ",
        "    XXXX    ",
        "    XXXX    ",
        "    XXXX    ",
        "    XXXX    ",
        "    XXXX    ",
        "    XXXX    ",
        "    XXXX    ",
        "  XXXXXXXX  ",
        "  XXXXXXXX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'J': [
        "      XXXX  ",
        "      XXXX  ",
        "      XXXX  ",
        "      XXXX  ",
        "      XXXX  ",
        "      XXXX  ",
        "      XXXX  ",
        " XXX  XXXX  ",
        " XXXXXXXX   ",
        "  XXXXXX    ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'K': [
        "XXX   XXXX  ",
        "XXX  XXXX   ",
        "XXX XXXX    ",
        "XXXXXXXX    ",
        "XXXXXXX     ",
        "XXXXXX      ",
        "XXXXXXX     ",
        "XXX XXXX    ",
        "XXX  XXXX   ",
        "XXX   XXXX  ",
        "XXX    XXXX ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'L': [
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'M': [
        "XXX      XXX",
        "XXXX    XXXX",
        "XXXX    XXXX",
        "XXXXX  XXXXX",
        "XXXXX  XXXXX",
        "XXXX XXXXXXX",
        "XXXX XXXXXXX",
        "XXX X X XXXX",
        "XXX X X XXXX",
        "XXX     XXXX",
        "XXX     XXXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'N': [
        "XXX     XXXX",
        "XXXX    XXXX",
        "XXXX    XXXX",
        "XXXXX   XXXX",
        "XXXXX   XXXX",
        "XXXXXX  XXXX",
        "XXXXXX  XXXX",
        "XXXX XXXXXXX",
        "XXXX XXXXXXX",
        "XXXX  XXXXXX",
        "XXX     XXXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'O': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'P': [
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXXXXXXX    ",
        "XXXXXXXX    ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "XXX         ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'Q': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        " XXX   XXXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "       XXXX ",
        "        XXX ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'R': [
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXXXXXXX    ",
        "XXXXXXXX    ",
        "XXX  XXXX   ",
        "XXX   XXXX  ",
        "XXX    XXXX ",
        "XXX     XXXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'S': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "XXX         ",
        " XXX        ",
        "   XXXXX    ",
        "      XXXX  ",
        "         XXX",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'T': [
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "     XXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'U': [
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        " XXX    XXX ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'V': [
        "XXX      XXX",
        "XXX      XXX",
        " XXX    XXX ",
        " XXX    XXX ",
        "  XXX  XXX  ",
        "  XXX  XXX  ",
        "   XXXXXX   ",
        "   XXXXXX   ",
        "    XXXX    ",
        "    XXXX    ",
        "     XX     ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'W': [
        "XXX      XXX",
        "XXX      XXX",
        "XXX      XXX",
        "XXX X XX XXX",
        "XXX X XX XXX",
        "XXXX X X XXX",
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        " XXXX  XXXX ",
        " XXXX  XXXX ",
        "  XXX  XXX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'X': [
        "XXX      XXX",
        " XXX    XXX ",
        "  XXX  XXX  ",
        "   XXXXXX   ",
        "    XXXX    ",
        "     XX     ",
        "    XXXX    ",
        "   XXXXXX   ",
        "  XXX  XXX  ",
        " XXX    XXX ",
        "XXX      XXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'Y': [
        "XXX      XXX",
        " XXX    XXX ",
        "  XXX  XXX  ",
        "   XXXXXX   ",
        "    XXXX    ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'Z': [
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        "       XXX  ",
        "      XXX   ",
        "     XXX    ",
        "    XXX     ",
        "   XXX      ",
        "  XXX       ",
        " XXX        ",
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '0': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "XXX X  X XXX",
        "XXX  XX  XXX",
        "XXX  XX  XXX",
        "XXX  XX  XXX",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '1': [
        "     XXXX   ",
        "    XXXXX   ",
        "   XXXXX    ",
        "      XXX   ",
        "      XXX   ",
        "      XXX   ",
        "      XXX   ",
        "      XXX   ",
        "      XXX   ",
        "  XXXXXXX   ",
        "  XXXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '2': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "         XXX",
        "        XXX ",
        "      XXXX  ",
        "    XXXX    ",
        "   XXX      ",
        " XXX        ",
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '3': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "         XXX",
        "       XXX  ",
        "     XXXX   ",
        "       XXX  ",
        "         XXX",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '4': [
        "       XXX  ",
        "      XXXX  ",
        "     XXXX   ",
        "    XXXX    ",
        "   XXXX     ",
        "  XXX      X",
        " XXX      XX",
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        "        XXX ",
        "        XXX ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '5': [
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        " XXX        ",
        "XXX         ",
        "XXXXX       ",
        " XXXXXXXXX  ",
        "       XXXXX",
        "         XXX",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '6': [
        "    XXXX    ",
        "   XXXXX    ",
        "  XXXX      ",
        " XXX        ",
        "XXX         ",
        "XXXXXXX     ",
        "XXXXXXXXX   ",
        " XXX    XXX ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '7': [
        "XXXXXXXXXXXX",
        "XXXXXXXXXXXX",
        "        XXX ",
        "       XXX  ",
        "      XXX   ",
        "     XXX    ",
        "    XXX     ",
        "   XXX      ",
        "  XXX       ",
        " XXX        ",
        "XXX         ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '8': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '9': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "       XXX  ",
        "        XXX ",
        " XXX    XXX ",
        "  XXXXXXXX  ",
        "   XXXXXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    ' ': [
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '-': [
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        " XXXXXXXXX  ",
        " XXXXXXXXX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '.': [
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "      XXX   ",
        "      XXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    ':': [
        "            ",
        "            ",
        "            ",
        "            ",
        "      XXX   ",
        "      XXX   ",
        "            ",
        "            ",
        "      XXX   ",
        "      XXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    ',': [
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "      XXX   ",
        "      XXX   ",
        "     XX     ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '/': [
        "           X",
        "          XX",
        "         XX ",
        "        XX  ",
        "       XX   ",
        "      XX    ",
        "     XX     ",
        "    XX      ",
        "   XX       ",
        "  XX        ",
        " XX         ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '&': [
        "   XXXX     ",
        "  XXXXXX    ",
        " XXX   XX   ",
        "XX      XX  ",
        " XX  XXX    ",
        "  XXXXX     ",
        "  XXX XXX   ",
        " XX    XXX  ",
        "XXX      XXX",
        " XXX  XXXX  ",
        "  XXXXXX    ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '+': [
        "            ",
        "            ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "  XXXXXXX   ",
        "  XXXXXXX   ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '%': [
        "XX        XX",
        "XX       XX ",
        "XXX      XX ",
        " XXX     XX ",
        "  XXX   XX  ",
        "   XXXXX    ",
        "   XXXXX    ",
        "  XX   XXX  ",
        " XX     XXX ",
        "XX      XXX ",
        "XX       XXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '(': [
        "      XXX   ",
        "     XXX    ",
        "    XXX     ",
        "   XXX      ",
        "  XXX       ",
        "  XXX       ",
        "  XXX       ",
        "   XXX      ",
        "    XXX     ",
        "     XXX    ",
        "      XXX   ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    ')': [
        "   XXX      ",
        "    XXX     ",
        "     XXX    ",
        "      XXX   ",
        "       XXX  ",
        "       XXX  ",
        "       XXX  ",
        "      XXX   ",
        "     XXX    ",
        "    XXX     ",
        "   XXX      ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '#': [
        "   XX   XX  ",
        "   XX   XX  ",
        " XXXXXXXXXX ",
        " XXXXXXXXXX ",
        "   XX   XX  ",
        "   XX   XX  ",
        " XXXXXXXXXX ",
        " XXXXXXXXXX ",
        "   XX   XX  ",
        "   XX   XX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '?': [
        "   XXXXXX   ",
        "  XXXXXXXX  ",
        " XXX    XXX ",
        "         XXX",
        "       XXXX ",
        "      XXX   ",
        "     XXX    ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '!': [
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "     XX     ",
        "            ",
        "     XX     ",
        "     XX     ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    "'": [
        "     XX     ",
        "     XX     ",
        "    XX      ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    '"': [
        "   XX   XX  ",
        "   XX   XX  ",
        "  XX    XX  ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
    'R': [
        "XXXXXXXXXX  ",
        "XXXXXXXXXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXX    XXX  ",
        "XXXXXXXX    ",
        "XXXXXXXX    ",
        "XXX  XXXX   ",
        "XXX   XXXX  ",
        "XXX    XXXX ",
        "XXX     XXXX",
        "            ",
        "            ",
        "            ",
        "            ",
        "            ",
    ],
}

def draw_text_fast(buf, w, h, x, y, text, color, scale=2):
    """Draw text using the large bitmap font."""
    cx = x
    char_w = 12 * scale
    spacing = char_w + 2
    for ch in text.upper():
        bitmap = FONT_LARGE.get(ch)
        if bitmap is None:
            cx += spacing
            continue
        for row_idx, row_str in enumerate(bitmap):
            for col_idx, pixel in enumerate(row_str):
                if pixel == 'X':
                    px = cx + col_idx * scale
                    py = y + row_idx * scale
                    fill_rect_fast(buf, w, px, py, px + scale - 1, py + scale - 1, color)
        cx += spacing

def generate_image_fast(img_spec):
    w = img_spec["width"]
    h = img_spec["height"]
    bg = img_spec["bg_color"]
    accent = img_spec["accent_color"]

    buf = bytearray(w * h * 3)
    bg_bytes = rgb(*bg)
    fill_rect_fast(buf, w, 0, 0, w-1, h-1, bg_bytes)

    # Gradient: darker at bottom
    for y in range(0, h, 4):
        t = (y / h) * 0.2
        darker = rgb(max(0, int(bg[0] * (1-t))), max(0, int(bg[1] * (1-t))), max(0, int(bg[2] * (1-t))))
        fill_rect_fast(buf, w, 0, y, w-1, min(y+3, h-1), darker)

    # Building silhouettes
    buildings = [
        (0.05, 0.28), (0.12, 0.42), (0.20, 0.32), (0.28, 0.50),
        (0.35, 0.22), (0.42, 0.45), (0.50, 0.35), (0.58, 0.55),
        (0.65, 0.27), (0.72, 0.40), (0.80, 0.48), (0.88, 0.32), (0.95, 0.37),
    ]
    base_y = int(h * 0.78)
    sil = rgb(bg[0]+12, bg[1]+12, bg[2]+12)
    for bx, bh in buildings:
        x = int(w * bx)
        bw = max(8, int(w * 0.035))
        bh_px = int(h * bh)
        fill_rect_fast(buf, w, x, base_y - bh_px, x + bw, base_y, sil)

    # Window dots
    win = rgb(bg[0]+40, bg[1]+35, bg[2]+30)
    for bx, bh in buildings:
        if bh > 0.35:
            x = int(w * bx)
            bw = max(8, int(w * 0.035))
            bh_px = int(h * bh)
            for wy in range(base_y - bh_px + 4, base_y - 4, 10):
                for wx in range(x+2, x+bw-2, 6):
                    fill_rect_fast(buf, w, wx, wy, wx+2, wy+2, win)

    # Accent line
    line_y = h // 4
    draw_hline_fast(buf, w, line_y, int(w*0.1), int(w*0.9), accent, 2)

    # Icon
    icon_type = img_spec.get("icon", "generic")
    icon_cx = w // 2
    icon_cy = h // 8
    s = min(w, h) // 18
    s2 = s * 2

    if icon_type == "rain":
        for i in range(50):
            rx = int(w*0.1) + (i * int(w*0.8)) // 50
            ry = icon_cy - 10 + (i * 5) % 15
            draw_vline_fast(buf, w, rx, ry, ry+10, rgb(120,120,130))
        cloud = rgb(bg[0]+35, bg[1]+30, bg[2]+28)
        fill_rect_fast(buf, w, icon_cx-30, icon_cy-22, icon_cx+30, icon_cy-8, cloud)
    elif icon_type == "kitchen":
        fill_rect_fast(buf, w, icon_cx-s2, icon_cy, icon_cx+s2, icon_cy+s//2, accent)
        fill_rect_fast(buf, w, icon_cx-s2, icon_cy-s, icon_cx-s//3, icon_cy-s//3, accent)
        fill_rect_fast(buf, w, icon_cx+s//3, icon_cy-s, icon_cx+s2, icon_cy-s//3, accent)
    elif icon_type == "wall":
        draw_outline_rect_fast(buf, w, icon_cx-s2, icon_cy-s, icon_cx+s2, icon_cy+s, accent, 2)
        fill_rect_fast(buf, w, icon_cx+s2-5, icon_cy-s+5, icon_cx+s2+10, icon_cy+s-5, accent)
    elif icon_type == "window":
        draw_outline_rect_fast(buf, w, icon_cx-s2, icon_cy-s-s//2, icon_cx+s2, icon_cy+s+s//2, accent, 3)
        draw_vline_fast(buf, w, icon_cx, icon_cy-s-s//2, icon_cy+s+s//2, accent, 2)
        draw_hline_fast(buf, w, icon_cy, icon_cx-s2, icon_cx+s2, accent, 2)
    elif icon_type == "wardrobe":
        draw_outline_rect_fast(buf, w, icon_cx-s2, icon_cy-s2, icon_cx+s2, icon_cy+s, accent, 3)
        draw_vline_fast(buf, w, icon_cx, icon_cy-s2, icon_cy+s, accent, 2)
        fill_rect_fast(buf, w, icon_cx-s, icon_cy-s//2, icon_cx-s+4, icon_cy-s//2+10, accent)
        fill_rect_fast(buf, w, icon_cx+s-4, icon_cy-s//2, icon_cx+s, icon_cy-s//2+10, accent)
    elif icon_type == "floor":
        for row in range(3):
            for col in range(4):
                tx = icon_cx - s2 + col * s
                ty = icon_cy - s + row * int(s * 0.8)
                draw_outline_rect_fast(buf, w, tx, ty, tx+s-2, ty+int(s*0.8)-2, accent, 2)
    elif icon_type == "cost":
        pts = [(icon_cx, icon_cy-s2), (icon_cx+s2, icon_cy), (icon_cx, icon_cy+s2), (icon_cx-s2, icon_cy)]
        for i in range(4):
            x1, y1 = pts[i]
            x2, y2 = pts[(i+1)%4]
            dx = abs(x2-x1)
            dy = abs(y2-y1)
            for step in range(max(dx,dy)+1):
                t = step / max(dx,dy,1)
                px = int(x1 + (x2-x1)*t)
                py = int(y1 + (y2-y1)*t)
                fill_rect_fast(buf, w, px-2, py-2, px+2, py+2, accent)
        fill_rect_fast(buf, w, icon_cx-s, icon_cy-5, icon_cx+s, icon_cy+5, accent)
    elif icon_type == "checklist":
        draw_outline_rect_fast(buf, w, icon_cx-s2, icon_cy-s2, icon_cx+s2, icon_cy+s, accent, 2)
        for i in range(3):
            ly = int(icon_cy - s*1.5 + i * s)
            draw_hline_fast(buf, w, ly, icon_cx - int(s*1.5), icon_cx-s, accent, 2)
            draw_hline_fast(buf, w, ly, icon_cx-s//2, icon_cx+s, accent, 2)
    elif icon_type == "transform":
        draw_outline_rect_fast(buf, w, icon_cx-int(s*1.5), icon_cy, icon_cx+int(s*1.5), icon_cy+s2, accent, 3)
        for x_off in range(-s2, s2+1):
            py_top = icon_cy - s + abs(x_off)
            if 0 <= py_top < h and 0 <= icon_cx+x_off < w:
                fill_rect_fast(buf, w, icon_cx+x_off, py_top, icon_cx+x_off, py_top, accent)
        draw_vline_fast(buf, w, icon_cx, icon_cy+s2, icon_cy+s*3, accent, 3)

    # Text panel - centered
    panel_y = h // 2 - 20
    panel_h = 75
    panel_bg = rgb(max(0,bg[0]-15), max(0,bg[1]-15), max(0,bg[2]-15))
    fill_rect_fast(buf, w, int(w*0.08), panel_y, int(w*0.92), panel_y+panel_h, panel_bg)
    draw_outline_rect_fast(buf, w, int(w*0.08), panel_y, int(w*0.92), panel_y+panel_h, accent, 1)

    label = img_spec["label"]
    subtitle = img_spec["subtitle"]
    scale = 2 if w > 1000 else 1

    # Center the label text
    label_w = len(label) * (12 * scale + 2)
    label_x = (w - label_w) // 2
    if label_x < int(w * 0.1):
        label_x = int(w * 0.1)
    draw_text_fast(buf, w, h, label_x, panel_y + 12, label, accent, scale=scale)

    sub_scale = max(1, scale)
    sub_w = len(subtitle) * (12 * sub_scale + 2)
    sub_x = (w - sub_w) // 2
    if sub_x < int(w * 0.1):
        sub_x = int(w * 0.1)
    sub_color = rgb(200, 200, 200)
    draw_text_fast(buf, w, h, sub_x, panel_y + 42, subtitle, sub_color, scale=sub_scale)

    # Brand
    brand_color = rgb(140, 140, 140)
    brand_x = int(w * 0.55)
    draw_text_fast(buf, w, h, brand_x, h-55, "SHRISHTI INTERIORS", brand_color, scale=1)
    brand2 = rgb(110, 110, 110)
    brand2_x = int(w * 0.60)
    draw_text_fast(buf, w, h, brand2_x, h-38, "MIRA ROAD MUMBAI", brand2, scale=1)

    # Border
    draw_outline_rect_fast(buf, w, 3, 3, w-4, h-4, accent, 1)

    png_bytes = create_png_fast(w, h, bytes(buf))
    return img_spec["filename"].replace(".jpg", ".png"), png_bytes

# Image specifications
images = [
    {
        "filename": "featured_image.png",
        "section": "Featured",
        "prompt": "A photorealistic interior design photograph of a modern Mumbai apartment living room during monsoon season. Large windows with rain visible outside, showing a high-rise view of Mumbai skyline. The room features BWR plywood furniture with waterproof laminate finish, anti-skid vitrified tile flooring, mould-resistant painted walls in warm off-white tones. Natural diffused daylight streaming through windows, professional architectural photography, warm neutral color palette, modern Indian aesthetic, 4K quality.",
        "alt_text": "Modern Mumbai apartment interior with monsoon-proof design features including waterproof furniture and anti-skid flooring, rain visible through large windows",
        "aspect_ratio": "16:9",
        "width": 1200, "height": 630,
        "bg_color": (45, 50, 55), "accent_color": (193, 154, 107),
        "label": "MONSOON-PROOF INTERIORS MUMBAI", "subtitle": "Complete Guide 2026",
        "icon": "rain"
    },
    {
        "filename": "section_1_monsoon_proof_interiors.png",
        "section": "What Makes Monsoon-Proof Interior Design Different in Mumbai",
        "prompt": "A photorealistic interior design photograph of a modern Mumbai apartment living room showcasing monsoon-resistant materials. BWR plywood cabinetry with acrylic laminate finish, mould-resistant painted walls in warm off-white, anti-skid vitrified tile flooring. Mumbai high-rise window view with overcast monsoon sky. Professional architectural photography, warm neutral color palette with natural wood accents, natural diffused daylight, modern Indian aesthetic, 4K quality.",
        "alt_text": "Mumbai apartment living room with monsoon-proof interior materials including BWR plywood, waterproof paint, and anti-skid tiles",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (55, 60, 65), "accent_color": (176, 190, 197),
        "label": "MONSOON-PROOF MATERIALS", "subtitle": "BWR Plywood | WPC Boards | HDHMR",
        "icon": "material"
    },
    {
        "filename": "section_2_monsoon_proof_kitchen.png",
        "section": "The Kitchen: Where Monsoon Damage Starts First",
        "prompt": "A photorealistic interior design photograph of a modern monsoon-proof modular kitchen in a Mumbai apartment. BWR plywood carcass with acrylic laminate shutters in warm walnut finish, stainless steel hardware, granite countertop with sealed PVC edges. Anti-skid matte-finish vitrified floor tiles. Compact L-shaped layout optimized for small Mumbai kitchen space. Natural daylight from window, professional architectural photography, warm neutral color palette, modern Indian aesthetic, 4K quality.",
        "alt_text": "Monsoon-proof modular kitchen in Mumbai apartment with BWR plywood, acrylic finish shutters, stainless steel hardware, and sealed granite countertop",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (50, 45, 40), "accent_color": (210, 180, 140),
        "label": "MONSOON-PROOF KITCHEN", "subtitle": "BWR Carcass | Acrylic Finish | Steel Hardware",
        "icon": "kitchen"
    },
    {
        "filename": "section_3_mould_resistant_walls.png",
        "section": "Walls That Don't Peel: Mould-Resistant Paint for Mumbai Homes",
        "prompt": "A photorealistic interior design photograph of a Mumbai apartment bedroom with mould-resistant painted walls in warm off-white and beige tones. Smooth waterproof-painted walls with no peeling or moisture damage, modern Indian-style furniture with WPC board construction. Large window with sheer curtains, natural daylight, soft warm tones. Mumbai high-rise view with cloudy monsoon sky. Professional architectural photography, clean modern aesthetic, 4K quality.",
        "alt_text": "Mumbai bedroom with mould-resistant waterproof painted walls in warm neutral tones, showing no moisture damage during monsoon",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (60, 58, 52), "accent_color": (230, 220, 200),
        "label": "MOULD-RESISTANT WALLS", "subtitle": "Waterproof Primer | Anti-Algae Paint",
        "icon": "wall"
    },
    {
        "filename": "section_4_windows_ventilation.png",
        "section": "Windows and Ventilation: The Hidden Monsoon Problem",
        "prompt": "A photorealistic interior design photograph of a Mumbai apartment living area showing proper monsoon window solutions. Modern uPVC window frames with EPDM gasket sealing, rain visible outside on glass. Cross-ventilation layout with furniture positioned to allow airflow. Dehumidifier discreetly placed in corner. Warm natural lighting, Mumbai skyline through window with monsoon clouds. Professional architectural photography, warm neutral color palette, modern Indian aesthetic, 4K quality.",
        "alt_text": "Mumbai apartment showing uPVC windows with proper monsoon sealing and cross-ventilation design, rain visible outside",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (40, 55, 65), "accent_color": (144, 202, 249),
        "label": "WINDOWS AND VENTILATION", "subtitle": "uPVC Frames | EPDM Seals | Dehumidifiers",
        "icon": "window"
    },
    {
        "filename": "section_5_wardrobe_storage.png",
        "section": "Wardrobes and Storage: Protecting Your Clothes and Woodwork",
        "prompt": "A photorealistic interior design photograph of a modern Mumbai bedroom with monsoon-proof wardrobe and storage. Floor-to-ceiling WPC board wardrobes with ventilation grilles, neatly organized shelves with sarees and garments. Charcoal dehumidifier bags visible inside. Gap between wardrobe back and exterior wall visible. Modern Indian bedroom aesthetic, warm wood tones, natural daylight from window, professional architectural photography, 4K quality.",
        "alt_text": "Monsoon-proof bedroom wardrobe in Mumbai with WPC construction, ventilation grilles, and organized storage for clothes and sarees",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (55, 48, 42), "accent_color": (188, 170, 140),
        "label": "WARDROBE AND STORAGE", "subtitle": "WPC Board | Ventilation | Dehumidifiers",
        "icon": "wardrobe"
    },
    {
        "filename": "section_6_anti_slip_flooring.png",
        "section": "Flooring: Anti-Slip and Moisture-Resistant Choices",
        "prompt": "A photorealistic interior design photograph of a Mumbai apartment interior showcasing anti-slip monsoon flooring. Matte-finish vitrified tiles with R10 anti-skid rating in warm beige tones, natural stone Kota stone accent area. Wide shot showing full room with modern Indian furniture, monsoon rain visible through window. Natural daylight, professional architectural photography, warm neutral color palette, modern Indian aesthetic, 4K quality.",
        "alt_text": "Mumbai apartment interior with anti-slip matte vitrified tile flooring and Kota stone accents, safe for monsoon season",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (60, 55, 48), "accent_color": (200, 185, 160),
        "label": "ANTI-SLIP FLOORING", "subtitle": "Matte Vitrified Tiles | Kota Stone | R10+",
        "icon": "floor"
    },
    {
        "filename": "section_7_cost_of_damage.png",
        "section": "The Cost of Not Monsoon-Proofing Your Mumbai Home",
        "prompt": "A photorealistic interior design photograph showing a Mumbai apartment interior with monsoon damage contrast. Split composition showing water-damaged swollen MDF kitchen cabinets with peeling laminate on one side, and properly protected BWR plywood cabinets with intact finish on the other side. Realistic depiction of humidity damage, professional interior photography, dramatic lighting, modern Indian apartment context, 4K quality.",
        "alt_text": "Comparison of monsoon-damaged versus monsoon-protected kitchen cabinets in a Mumbai apartment, showing the importance of proper materials",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (50, 40, 40), "accent_color": (239, 154, 154),
        "label": "COST OF NOT MONSOON-PROOFING", "subtitle": "Rs 1.5-2.85 Lakh in Avoidable Repairs",
        "icon": "cost"
    },
    {
        "filename": "section_8_first_steps.png",
        "section": "What to Do First",
        "prompt": "A photorealistic interior design photograph of a well-organized modern Mumbai apartment ready for monsoon season. Clean living space with monsoon-proof interior checklist elements visible: sealed window frames, protected furniture, dehumidifier, organized storage. Warm inviting atmosphere with natural daylight, Mumbai skyline view through window. Professional architectural photography, warm neutral color palette, modern Indian aesthetic, organized and prepared feeling, 4K quality.",
        "alt_text": "Monsoon-ready Mumbai apartment interior with protective measures in place including sealed windows and organized humidity-proof storage",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (45, 55, 48), "accent_color": (165, 214, 167),
        "label": "FIRST STEPS CHECKLIST", "subtitle": "Audit | Specify BWR/WPC | Seal Windows",
        "icon": "checklist"
    },
    {
        "filename": "section_9_transform_home.png",
        "section": "Ready to transform your Mumbai home?",
        "prompt": "A photorealistic interior design photograph of a beautifully transformed modern Mumbai apartment interior after monsoon-proofing renovation. Spacious living room with high-end monsoon-resistant materials, premium BWR plywood furniture, waterproof walls in warm off-white, anti-slip flooring. Large windows with Mumbai cityscape view, elegant lighting fixtures, designer decor elements. Professional architectural photography, warm luxurious feel, modern Indian aesthetic, aspirational lifestyle, 4K quality.",
        "alt_text": "Beautifully transformed Mumbai apartment with premium monsoon-proof interior design, showcasing Shrishti Interiors renovation work",
        "aspect_ratio": "4:3",
        "width": 800, "height": 600,
        "bg_color": (50, 42, 38), "accent_color": (212, 175, 55),
        "label": "TRANSFORM YOUR HOME", "subtitle": "Shrishti Interiors | Mira Road Mumbai",
        "icon": "transform"
    }
]

import time
t0 = time.time()

print("Generating images...")
generated = []
for img in images:
    filename, png_bytes = generate_image_fast(img)
    filepath = os.path.join(output_dir, filename)
    with open(filepath, "wb") as f:
        f.write(png_bytes)
    size_kb = len(png_bytes) / 1024
    print(f"  Created: {filename} ({img['width']}x{img['height']}, {size_kb:.0f} KB)")
    generated.append({
        "filename": filename,
        "section": img["section"],
        "alt_text": img["alt_text"],
        "generation_prompt": img["prompt"],
        "dimensions": f"{img['width']}x{img['height']}",
        "aspect_ratio": img["aspect_ratio"]
    })

manifest = {
    "blog_title": "Monsoon-Proof Interior Design for Mumbai Apartments: Complete Guide 2026",
    "total_images": len(generated),
    "images": generated,
    "style_guide": {
        "style": "Modern Indian interior design, photorealistic",
        "lighting": "Natural daylight, warm tones",
        "color_palette": "Neutral bases with accent colors",
        "composition": "Wide shots showing full rooms, detail shots for specific elements",
        "mumbai_context": "High-rise views, compact spaces, Indian cultural elements",
        "quality": "Professional photography look, no cartoon/art styles"
    },
    "note": "Placeholder images generated with professional branding and section labels. Each image includes the exact AI-generation prompt for replacement with photorealistic images when an image generation API becomes available."
}

manifest_path = "E:/shrishti_interiors/blog-pipeline-output/image_manifest.json"
with open(manifest_path, "w") as f:
    json.dump(manifest, f, indent=2)

elapsed = time.time() - t0
print(f"\nDone in {elapsed:.1f}s")
print(f"Manifest: {manifest_path}")
print(f"Total images: {len(generated)}")
print(f"Output: {output_dir}")
