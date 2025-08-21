#!/usr/bin/env python3
import os
import re
import shutil
from pathlib import Path
import urllib.parse

# === CONFIG ===
OBSIDIAN_BLOG_DIR = Path("/Users/nmd2k/Documents/Obsidian Vault/Personal Home/Blog")
WEBSITE_BLOG_DIR = Path("./content/blog")

# Regex: match ![[image.png]] or ![[image name.jpg|200]]
obsidian_image_pattern = re.compile(r'!\[\[(.*?)(?:\|.*)?\]\]')

def convert_obsidian_images(text: str) -> str:
    """Convert Obsidian image embeds to standard markdown with URL-safe filenames."""
    def repl(match):
        filename = match.group(1).strip()
        safe_filename = urllib.parse.quote(filename)  # Encode spaces and special chars
        return f"![{filename}]({safe_filename})"
    return obsidian_image_pattern.sub(repl, text)


def copy_file(src: Path, dest: Path):
    """Copy file from src to dest with conversion for markdown."""
    if dest.exists():
        print(f"⚠️ Conflict: {dest} already exists, skipped.")
        return False
    
    if src.suffix.lower() == ".md":
        text = src.read_text(encoding="utf-8")
        text = convert_obsidian_images(text)
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(text, encoding="utf-8")
    else:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
    return True

def sync_blog():
    if not OBSIDIAN_BLOG_DIR.exists():
        print(f"❌ Obsidian blog folder not found: {OBSIDIAN_BLOG_DIR}")
        sys.exit(1)

    WEBSITE_BLOG_DIR.mkdir(parents=True, exist_ok=True)

    conflicts = []

    for file in OBSIDIAN_BLOG_DIR.rglob("*"):
        if file.is_file():
            rel_path = file.relative_to(OBSIDIAN_BLOG_DIR)
            dest = WEBSITE_BLOG_DIR / rel_path

            success = copy_file(file, dest)
            if not success:
                conflicts.append(dest)

    print("\n✅ Sync finished.")
    if conflicts:
        print("⚠️ The following files already exist and were skipped:")
        for c in conflicts:
            print(f"   - {c}")
        print("\n👉 Resolve conflicts manually if needed.")

if __name__ == "__main__":
    sync_blog()