<!-- CUSTOMIZATION SNIPPETS -->

<!-- This file contains copy-paste snippets for common customizations -->

<!-- ============================================
     1. ADD A NEW PRESS ITEM
     ============================================ -->

<!-- In the "Press Archive" section, copy this template: -->

<!-- <article class="press-item">
    <time>2025</time>
    <h3>Your Press Title Here</h3>
    <p>Brief description of the press mention</p>
</article> -->


<!-- ============================================
     2. ADD A NEW SESSION
     ============================================ -->

<!-- In the "Session Index" section, copy this template: -->

<!-- <div class="session-card">
    <div class="session-header">
        <span class="session-date">2025</span>
        <span class="session-format">your format</span>
    </div>
    <h3>Session Title</h3>
    <p>Description of the session or mix.</p>
    <a href="#" class="session-link">Link Text →</a>
</div> -->


<!-- ============================================
     3. ADD SOCIAL MEDIA LINKS
     ============================================ -->

<!-- In the "Direct Channels" section, copy this template: -->

<!-- <div class="contact-channel">
    <h3>Your Channel Name</h3>
    <a href="https://platform.com/your-username" class="contact-link">
        Platform Name
    </a>
    <a href="https://another-platform.com/your-username" class="contact-link">
        Another Platform
    </a>
</div> -->


<!-- ============================================
     4. USEFUL SOCIAL/MUSIC PLATFORM URLS
     ============================================ -->

<!-- Update these with your actual profile URLs: -->

<!--
MUSIC PLATFORMS:
- Bandcamp: https://[yourname].bandcamp.com
- SoundCloud: https://soundcloud.com/[yourname]
- Spotify: https://open.spotify.com/artist/[artist-id]
- Apple Music: https://music.apple.com/artist/[artist-name]/[id]

SOCIAL MEDIA:
- Instagram: https://instagram.com/[username]
- Twitter/X: https://twitter.com/[username]
- TikTok: https://tiktok.com/@[username]

MUSIC COMMUNITY:
- Resident Advisor: https://www.resident-advisor.com/dj/[djname]
- Discogs: https://www.discogs.com/artist/[artist-name]
- Beatport: https://www.beatport.com/artist/[artist-name]/[id]

BOOKING:
- Songkick: https://www.songkick.com/artists/[artist-name]
- Bandsintown: https://www.bandsintown.com/[artist-name]
-->


<!-- ============================================
     5. CUSTOMIZE COLOR SCHEME (CSS)
     ============================================ -->

/*
In styles.css, find the :root section and customize:

Default Colors:
--bg: #0a0a0a;           ← Black background
--fg: #f5f1eb;           ← Cream text
--accent: #d32f2f;       ← Red accent

Alternative Accent Colors:

Purple Underground:
--accent: #b800e6;

Cyan Archive:
--accent: #00d4ff;

Gold Boutique:
--accent: #d4af37;

Dark Red (more subtle):
--accent: #8b0000;

High Contrast Red:
--accent: #ff0000;

Keep --bg and --fg fixed for the underground aesthetic!
*/


<!-- ============================================
     6. ADJUST TYPOGRAPHY SIZES
     ============================================ -->

/*
In styles.css, find these sections and adjust:

Hero Title Size:
h1 {
    font-size: 4.5rem;  ← Change this value
}

Section Label Size:
h2 {
    font-size: 1.5rem;  ← Change this value
}

Body Text Size:
p {
    font-size: 1rem;    ← Change this value
}
*/


<!-- ============================================
     7. CHANGE SPACING / PADDING
     ============================================ -->

/*
In styles.css, find the :root section:

:root {
    --spacing-xs: 0.5rem;  ← Small spaces
    --spacing-sm: 1rem;    ← Regular spaces
    --spacing-md: 2rem;    ← Medium spaces
    --spacing-lg: 4rem;    ← Large spaces
    --spacing-xl: 6rem;    ← Extra large spaces
}

Increase these values for more breathing room.
Decrease for a more compact layout.
*/


<!-- ============================================
     8. ADD A CONTACT FORM
     ============================================ -->

/*
To add a simple contact form, replace the Contact section with:

<section id="contact" class="contact">
    <h2><span class="label">Direct Channels</span></h2>
    <div class="contact-form">
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <input type="email" name="email" placeholder="Your email" required>
            <textarea name="message" placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</section>

Get a free form endpoint at: formspree.io
No backend needed!

CSS for the form:
.contact-form {
    max-width: 600px;
    margin: var(--spacing-lg) 0;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    background: var(--gray-dark);
    border: 1px solid var(--gray-mid);
    color: var(--fg);
    font-family: var(--font-mono);
    font-size: 1rem;
}

.contact-form button {
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--accent);
    color: var(--bg);
    border: none;
    font-family: var(--font-mono);
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);
}

.contact-form button:hover {
    opacity: 0.8;
}
*/


<!-- ============================================
     9. ADD FOOTER SOCIAL LINKS
     ============================================ -->

<!-- Replace the footer with social icons: -->

<!--
<footer class="footer">
    <div class="footer-content">
        <div class="footer-social">
            <a href="https://instagram.com/augustuswilliams" title="Instagram">ig</a>
            <a href="https://twitter.com/augustuswilliams" title="Twitter">x</a>
            <a href="https://soundcloud.com/augustuswilliams" title="SoundCloud">sc</a>
        </div>
        <p class="footer-text">Augustus Williams <span class="accent">Detroit, MI</span></p>
        <p class="footer-text">© 2026. All rights reserved.</p>
    </div>
</footer>

CSS:
.footer-social {
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.footer-social a {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    text-transform: uppercase;
    color: var(--accent);
    transition: var(--transition);
}

.footer-social a:hover {
    color: var(--fg);
    border: none;
}
-->


<!-- ============================================
     10. ENABLE IMAGE HOVER ZOOM
     ============================================ -->

/* Already implemented in styles.css:

.hero-image img {
    transition: var(--transition);
}

.hero-image:hover img {
    opacity: 1;
    transform: scale(1.02);  ← Adjust scale for more/less zoom
}

To increase zoom amount, change 1.02 to 1.05 or 1.1
To decrease, use 1.01
*/


<!-- ============================================
     11. ADD DARK MODE TOGGLE
     ============================================ -->

/*
Advanced: Add a light/dark theme toggle in script.js:

// Toggle theme
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Check user preference
if (localStorage.getItem('theme')) {
    setTheme(localStorage.getItem('theme'));
} else if (prefersDark.matches) {
    setTheme('dark');
}

// Listen for theme changes
prefersDark.addEventListener('change', (e) => {
    setTheme(e.matches ? 'dark' : 'light');
});

Then add CSS variables for light mode in styles.css:

@media (prefers-color-scheme: light) {
    :root {
        --bg: #ffffff;
        --fg: #1a1a1a;
        --accent: #d32f2f;
    }
}
*/


<!-- ============================================
     12. REMOVE/HIDE SECTIONS
     ============================================ -->

/*
To hide a section without deleting it, add this to styles.css:

Hide Archive:
#archive {
    display: none;
}

Hide Sessions:
#sessions {
    display: none;
}

Hide About:
#about {
    display: none;
}

This keeps the HTML intact if you want to restore later.
*/


<!-- ============================================
     ADVANCED: OPTIMIZE IMAGES WITH SRCSET
     ============================================ -->

<!--
Replace the hero image with responsive versions:

<img 
    src="assets/hero-large.jpg" 
    srcset="
        assets/hero-small.jpg 640w,
        assets/hero-medium.jpg 1024w,
        assets/hero-large.jpg 1400w
    "
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
    alt="Augustus Williams performing">

Steps:
1. Create 3 versions of your hero image (640px, 1024px, 1400px wide)
2. Optimize each to <100KB
3. Use the srcset code above
4. Save all versions in assets/ folder

This ensures fast loading on mobile while maintaining quality on desktop.
-->


<!-- ============================================
     QUICK COLORS & FONTS REFERENCE
     ============================================ -->

/* COLOR PALETTE */
:root {
    /* Primary Colors */
    --bg: #0a0a0a;          /* Almost pure black */
    --fg: #f5f1eb;          /* Warm cream/off-white */
    --accent: #d32f2f;      /* Material Design Red */
    
    /* Secondary Colors */
    --cyan: #00d4ff;        /* Bright cyan for accents */
    --gray-dark: #1a1a1a;   /* Deep dark gray */
    --gray-mid: #333333;    /* Medium gray for borders */
    --gray-light: #666666;  /* Light gray for secondary text */
}

/* TYPOGRAPHY STACK */
--font-mono: 'Courier New', 'IBM Plex Mono', monospace;
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* SUGGESTED WEB FONTS (if you want custom fonts) */
/* Add to <head> in index.html: */

<!--
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

Then update in styles.css:
--font-mono: 'IBM Plex Mono', monospace;
--font-sans: 'Inter', sans-serif;
-->


---

These snippets should handle 90% of customizations you'll need.
For anything else, check README.md or QUICKSTART.md!
