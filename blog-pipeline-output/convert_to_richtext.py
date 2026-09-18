#!/usr/bin/env python3
"""Convert markdown blog content to Contentful RichText JSON format."""
import json
import re

def convert_markdown_to_richtext(md_content):
    """Convert markdown to Contentful RichText document structure."""
    lines = md_content.split('\n')
    content = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Handle headings
        heading_match = re.match(r'^(#{1,6})\s+(.+)$', line)
        if heading_match:
            level = len(heading_match.group(1))
            text = heading_match.group(2).strip()
            content.append({
                "nodeType": f"heading-{level}",
                "data": {},
                "content": [{"nodeType": "text", "value": text, "marks": [], "data": {}}]
            })
            i += 1
            continue
        
        # Handle horizontal rules
        if re.match(r'^---+$', line.strip()):
            content.append({
                "nodeType": "hr",
                "data": {}
            })
            i += 1
            continue
        
        # Handle unordered lists
        if re.match(r'^[-*]\s+', line):
            list_items = []
            while i < len(lines) and re.match(r'^[-*]\s+', lines[i]):
                list_text = re.sub(r'^[-*]\s+', '', lines[i])
                list_items.append({
                    "nodeType": "list-item",
                    "data": {},
                    "content": [{
                        "nodeType": "paragraph",
                        "data": {},
                        "content": parse_inline_text(list_text)
                    }]
                })
                i += 1
            
            content.append({
                "nodeType": "unordered-list",
                "data": {},
                "content": list_items
            })
            continue
        
        # Handle empty lines (skip)
        if not line.strip():
            i += 1
            continue
        
        # Handle paragraphs
        paragraph_lines = []
        while i < len(lines) and lines[i].strip() and not re.match(r'^(#{1,6})\s+', lines[i]) and not re.match(r'^---+$', lines[i].strip()) and not re.match(r'^[-*]\s+', lines[i]):
            paragraph_lines.append(lines[i])
            i += 1
        
        if paragraph_lines:
            paragraph_text = ' '.join(l.strip() for l in paragraph_lines)
            content.append({
                "nodeType": "paragraph",
                "data": {},
                "content": parse_inline_text(paragraph_text)
            })
    
    return {
        "nodeType": "document",
        "data": {},
        "content": content
    }

def parse_inline_text(text):
    """Parse inline markdown (bold, italic) into RichText nodes."""
    nodes = []
    
    # Split by bold/italic markers
    # Pattern to match **bold** or *italic*
    pattern = r'(\*\*(.+?)\*\*)|(\*(.+?)\*)'
    parts = re.split(pattern, text)
    
    # Filter out None and empty strings from split groups
    filtered_parts = [p for p in parts if p is not None]
    
    for part in filtered_parts:
        if not part.strip() and not part:
            continue
            
        # Check if it's bold
        bold_match = re.match(r'^\*\*(.+?)\*\*$', part)
        if bold_match:
            nodes.append({
                "nodeType": "text",
                "value": bold_match.group(1),
                "marks": [{"type": "bold"}],
                "data": {}
            })
            continue
        
        # Check if it's italic
        italic_match = re.match(r'^\*(.+?)\*$', part)
        if italic_match:
            nodes.append({
                "nodeType": "text",
                "value": italic_match.group(1),
                "marks": [{"type": "italic"}],
                "data": {}
            })
            continue
        
        # Regular text
        if part.strip():
            nodes.append({
                "nodeType": "text",
                "value": part,
                "marks": [],
                "data": {}
            })
    
    if not nodes:
        nodes.append({
            "nodeType": "text",
            "value": text,
            "marks": [],
            "data": {}
        })
    
    return nodes

if __name__ == "__main__":
    with open("blog_final.md", "r", encoding="utf-8") as f:
        md_content = f.read()
    
    richtext = convert_markdown_to_richtext(md_content)
    
    with open("richtext_output.json", "w", encoding="utf-8") as f:
        json.dump(richtext, f, indent=2, ensure_ascii=False)
    
    print("Converted successfully!")
    print(f"Total nodes: {len(richtext['content'])}")
