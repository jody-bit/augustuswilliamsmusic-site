# Augustus Williams — Detroit Techno Microsite

A cinematic, underground-aesthetic single-page website for Detroit-based techno artist Augustus Williams. Built with a boutique performance archive aesthetic rather than typical DJ promo design.

## Design Philosophy

**Aesthetic**
- Black background (`#0a0a0a`) with cream typography (`#f5f1eb`)
- Red accent system (`#d32f2f`) for hierarchy and calls-to-action
- Atmospheric cyan photography with selective use
- Monospaced editorial typography (Courier New / IBM Plex Mono)
- Minimalist Berlin gallery aesthetic
- Underground techno archive energy

**UX Principles**
- Asymmetrical editorial design with intentional negative space
- Mobile-first responsive approach
- Subtle, performant transitions (0.35s cubic-bezier)
- Image-forward but restrained (no decorative images)
- No template feeling — custom, artist-specific layout

**Visual Hierarchy**
- H1: 4.5rem sans-serif for hero
- H2: 1.5rem monospace uppercase for section labels
- Body: 1rem sans-serif with 1.7 line-height
- Meta text: Small monospace uppercase

## File Structure

```
augustuswilliamsmusic-site/
├── index.html           # Main HTML structure
├── styles.css          # All typography, layout, and animations
├── script.js           # Smooth scroll, parallax, interactions
├── assets/             # Image directory
│   ├── hero.jpg        # Portrait image (3:4 aspect)
│   └── README.md       # Image guidelines
└── README.md           # This file
```

## Sections

### Navigation Bar
- Fixed top navigation with smooth blur backdrop
- Artist alias "GUSTO" as logo
- Links to: About, Archive, Sessions, Contact
- Active state highlights in red

### Hero Section
- Full viewport experience (min-height: 100vh)
- Split layout: Text left, image right (1-column on mobile)
- Large typography with artist name and alias
- Subtle hover effects on image

### About / Biography
- Dark background section with border
- Two-column layout: Bio text + metadata
- Format and energy information
- Responsive collapse to single column

### Press Archive
- Grid of 4 press items (2x2, single-column on mobile)
- Hover effects with red accent glow
- Minimal card design with date, title, description
- Staggered load animation

### Session Index
- 4 session cards with hybrid information architecture
- Session date, format badges, description
- Links to documentation/tracklists
- Cyan-tinged hover effects
- Dark background section

### Direct Channels / Contact
- 4-block contact grid (2x2, responsive)
- Booking email
- Streaming platforms
- Social documentation links
- EPK PDF download

### Footer
- Minimal text footer
- Artist name, location, copyright
- Monospace typography

## Customization Guide

### Colors
Edit the CSS custom properties in `:root`:

```css
--bg: #0a0a0a;           /* Black background */
--fg: #f5f1eb;           /* Cream text */
--accent: #d32f2f;       /* Red accents */
--cyan: #00d4ff;         /* Cyan photography overlay (optional) */
--gray-dark: #1a1a1a;    /* Dark gray sections */
--gray-mid: #333333;     /* Borders */
--gray-light: #666666;   /* Secondary text */
```

### Typography
- `--font-mono`: Monospaced font (editorial, nav, labels)
- `--font-sans`: System font stack (body, headings)

Current setup uses system fonts for performance (no web fonts).

### Content Updates

**Email Addresses**
- Update `booking@augustuswilliamsmusic.com` in Contact section

**Social Links**
- Add actual URLs for Bandcamp, SoundCloud, Instagram, Twitter

**Press Items**
- Add 4 actual press mentions with dates and descriptions
- Add href links to full articles

**Sessions**
- Update with actual session names, dates, and formats
- Add links to SoundCloud, Bandcamp, or documentation

**Images**
- Replace `assets/hero.jpg` with a 3:4 portrait image
- Recommended: Use photos from the EPK
- Optimize to ~150-200KB for web

### Spacing & Breakpoints

Mobile breakpoints:
- `768px`: Tablet/medium devices
- `1024px`: Large devices
- `640px`: Small phones

Adjust padding/gap values if needed:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

## Performance Optimization

### Image Optimization
Use tools like ImageOptim, TinyPNG, or Squoosh:
1. Compress hero image to <200KB
2. Consider WebP format for modern browsers
3. Add srcset for responsive images if needed

### Font Loading
Current setup uses system fonts (no external font files):
- Faster page load
- No flash of unstyled text
- Works offline

### CSS & JavaScript
- CSS is inline (one request)
- JavaScript is minimal and async-friendly
- No dependencies or frameworks

## Browser Support

- Modern browsers: Chrome, Safari, Firefox, Edge
- Mobile: iOS 12+, Android 8+
- No IE11 support

## Hosting Recommendations

### Static Hosting Options
1. **Vercel** - Free tier, automatic deploys from Git
2. **Netlify** - Free tier, easy custom domain setup
3. **GitHub Pages** - Free, requires pushing to gh-pages branch
4. **AWS S3 + CloudFront** - Scalable, low cost

### Domain Setup
Update DNS to point `augustuswilliamsmusic.com` to your host.

### Performance Monitoring
- Test with Google PageSpeed Insights
- Monitor Core Web Vitals
- Use GTmetrix for optimization suggestions

## Accessibility

✓ Semantic HTML structure
✓ ARIA-friendly nav links
✓ Sufficient color contrast (WCAG AA)
✓ Keyboard navigation support
✓ Respects prefers-reduced-motion setting
✓ Image alt text ready (add in assets)

## Future Enhancement Ideas

### Phase 2
- Music player for sessions
- Photo gallery with lightbox
- Event listing/calendar
- Newsletter signup
- Blog or journal posts

### Phase 3
- Merchandise shop integration
- Newsletter archive
- Mailing list signup
- Advanced session filtering
- Client-side music streaming player

### Technical Upgrades
- Add analytics (Plausible or Fathom)
- Sitemap and robots.txt
- Meta tags for social sharing
- RSS feed for updates
- Contact form with backend

## Deployment Checklist

- [ ] Update all placeholder content (email, links, sessions)
- [ ] Replace hero.jpg with actual image
- [ ] Test responsive design on mobile
- [ ] Check all links work
- [ ] Optimize all images
- [ ] Test on multiple browsers
- [ ] Add Google Analytics (optional)
- [ ] Set up domain DNS
- [ ] Deploy to hosting platform
- [ ] Monitor performance metrics
- [ ] Set up email forwarding for booking@

## Questions & Support

This is a static HTML/CSS/JS site with no server dependencies.
All content is editable directly in `index.html`.
Styling is fully customizable in `styles.css`.

---

Built with the underground aesthetic of Detroit techno in mind.
No frameworks. No bloat. Just pure, performant web design.
