import urllib.request
import re

url = "https://play.google.com/store/apps/details?id=com.werilapps.eortologio&hl=el"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find img tags with alt="Icon image"
matches = re.finditer(r'<img[^>]*src="([^"]*play-lh.googleusercontent.com[^"]*)"[^>]*alt="([^"]*)"[^>]*>', html)
for m in matches:
    print(f"Alt: {m.group(2)} - URL: {m.group(1)}")
