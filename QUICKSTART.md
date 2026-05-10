# Quick Start Guide

## 1. Local Testing

Open the site locally in your browser:
```bash
# Navigate to the site directory
cd augustuswilliamsmusic-site

# Python 3
python -m http.server 8000

# Or use Python 2
python -m SimpleHTTPServer 8000

# Or use Node.js (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

## 2. Content Updates (No Code Required)

Everything is in **index.html**. You can edit directly:

### Update Email
Find: `booking@augustuswilliamsmusic.com`
Replace with: Your actual email

### Update Social Links
Find: These lines in the Contact section:
```html
<a href="#" class="contact-link">Bandcamp</a>
<a href="#" class="contact-link">SoundCloud</a>
<a href="#" class="contact-link">Instagram</a>
<a href="#" class="contact-link">Twitter / X</a>
<a href="#" class="contact-link download">Download EPK (PDF)</a>
```

Replace `href="#"` with actual URLs:
```html
<a href="https://bandcamp.com/augustuswilliams" class="contact-link">Bandcamp</a>
```

### Update Sessions
Find the "Session Index" section. Update these examples with real sessions:
```html
<h3>Untitled Sessions #1</h3>
<p>120 minutes. Mixed equipment setup with live instrumentation.</p>
<a href="#" class="session-link">Documentation →</a>
```

### Update Press Items
Find the "Press Archive" section. Update these examples:
```html
<time>2025</time>
<h3>Featured in Electronic Musician Magazine</h3>
<p>Profile on Detroit's contemporary techno scene</p>
```

## 3. Add Hero Image

1. Export a portrait image from the EPK (3:4 aspect ratio recommended)
2. Optimize it (use TinyPNG.com or ImageOptim)
3. Save to: `assets/hero.jpg`
4. If filename differs, update the img src in HTML:
```html
<img src="assets/your-image-name.jpg" alt="Augustus Williams performing">
```

## 4. Deploy to Web

### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Add custom domain: `augustuswilliamsmusic.com`
5. Set DNS at your domain registrar

### Option B: Netlify
1. Push code to GitHub
2. Go to netlify.com → "New site from Git"
3. Select your repo
4. Deploy settings: just use defaults
5. Add custom domain in Site settings

### Option C: GitHub Pages
1. Push code to GitHub
2. Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Add custom domain in GitHub Pages settings

## 5. DNS Setup

Once deployed:
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add a CNAME or A record pointing to your hosting
4. Wait 24-48 hours for DNS to propagate

Each hosting service provides specific DNS instructions.

## File Sizes & Performance

Current setup (no images):
- index.html: ~8 KB
- styles.css: ~20 KB
- script.js: ~5 KB
- Total: ~33 KB

With optimized hero image: ~200 KB total

This is well under typical web budgets.

## Editing Without Code Knowledge

All content is in plain text in `index.html`:
- No code skills needed to update text
- No database to manage
- No backend server required
- Just edit the HTML file in any text editor

## Common Customizations

### Change Red Accent Color
In `styles.css`, find:
```css
--accent: #d32f2f;
```
Replace with your hex color.

### Change Background Color
In `styles.css`, find:
```css
--bg: #0a0a0a;
```
Replace with your hex color. (Keep it dark!)

### Add More Spacing
In `styles.css`, find spacing variables:
```css
--spacing-lg: 4rem;
```
Increase the value for more space.

## Troubleshooting

**Image not showing?**
- Check file path in HTML
- Make sure image exists in `assets/` folder
- Try adding to browser cache: Shift+Refresh (Cmd+Shift+R on Mac)

**Layout broken on mobile?**
- Test with DevTools (F12 → toggle device toolbar)
- Check viewport meta tag is in HTML head
- Verify CSS media queries exist

**Links not working?**
- Check href values start with # for anchors
- Make sure section IDs match href values

**Animations not smooth?**
- Check browser DevTools Performance tab
- Consider reducing animation-delay values
- Test on actual mobile device

## Next Steps

1. ✅ Test locally with `python -m http.server 8000`
2. ✅ Update content in index.html
3. ✅ Add hero.jpg to assets/
4. ✅ Deploy to Vercel/Netlify/GitHub Pages
5. ✅ Point domain DNS to your host
6. ✅ Monitor with Google PageSpeed Insights

---

**Questions?** Check the main README.md for detailed documentation.
