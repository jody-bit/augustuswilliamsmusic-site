// /script.js

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getHashFromHref(href) {
    if (!href) return "";
    const hashIndex = href.indexOf("#");
    return hashIndex >= 0 ? href.slice(hashIndex + 1) : "";
}

function isSamePageHashLink(link) {
    const href = link.getAttribute("href");
    if (!href || href === "#") return false;
    return href.startsWith("#");
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        if (!isSamePageHashLink(anchor)) return;

        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            const offset = 60;
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? "auto" : "smooth",
            });
        });
    });
}

function initSectionAnimations() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        document.querySelectorAll("section").forEach((section) => {
            section.style.opacity = "1";
            section.style.transform = "none";
            section.style.transition = "none";
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        observer.observe(section);
    });
}

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const pagePath = window.location.pathname.split("/").pop() || "index.html";
    let currentSectionId = "";

    document.querySelectorAll("section[id]").forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            currentSectionId = section.getAttribute("id") || "";
        }
    });

    navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const linkUrl = new URL(href, window.location.href);
        const linkPath = linkUrl.pathname.split("/").pop() || "index.html";
        const linkHash = linkUrl.hash.replace("#", "");

        link.style.color = "var(--gray-light)";

        const isCurrentStandalonePage =
            !linkHash &&
            pagePath === "releases.html" &&
            linkPath === "releases.html";

        const isCurrentSectionOnHome =
            currentSectionId &&
            linkPath === "index.html" &&
            linkHash === currentSectionId &&
            (pagePath === "" || pagePath === "index.html");

        if (isCurrentStandalonePage || isCurrentSectionOnHome) {
            link.style.color = "var(--accent)";
        }
    });
}

function initNavActiveState() {
    updateActiveNavLink();
    window.addEventListener("scroll", updateActiveNavLink, { passive: true });
}

function initParallaxHeroImage() {
    if (prefersReducedMotion) return;

    const heroImage = document.querySelector(".hero-image img");
    const heroSection = document.querySelector(".hero");

    if (!heroImage || !heroSection) return;

    window.addEventListener(
        "scroll",
        () => {
            const scrolled = window.pageYOffset;
            const heroPosition = heroSection.offsetTop;

            if (scrolled < heroPosition + window.innerHeight) {
                const parallax = Math.max((scrolled - heroPosition) * 0.15, 0);
                heroImage.style.transform = `translateY(${parallax}px)`;
            }
        },
        { passive: true }
    );
}

function initHoverEffects() {
    document.querySelectorAll(".press-item").forEach((item) => {
        item.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0 0 20px rgba(211, 47, 47, 0.2)";
        });

        item.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });

    document.querySelectorAll(".session-card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.boxShadow = "inset 0 0 30px rgba(0, 212, 255, 0.1)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });
}

function initPageLoadAnimation() {
    window.addEventListener("load", () => {
        document.body.style.animation = "none";

        const nav = document.querySelector(".nav");
        if (nav && !prefersReducedMotion) {
            nav.style.opacity = "0";
            nav.style.animation = "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
        }

        const heroElements = [
            document.querySelector(".hero-name"),
            document.querySelector(".hero-alias"),
            document.querySelector(".hero-subtitle"),
            document.querySelector(".hero-location"),
            document.querySelector(".hero-copy"),
        ].filter(Boolean);

        heroElements.forEach((el, index) => {
            if (prefersReducedMotion) {
                el.style.opacity = "1";
                el.style.animation = "none";
                return;
            }

            el.style.opacity = "0";
            el.style.animation = `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.1 + index * 0.1}s forwards`;
        });
    });
}

function initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            return;
        }
    });
}

function applyReducedMotion() {
    if (!prefersReducedMotion) return;

    document.documentElement.style.scrollBehavior = "auto";

    document.querySelectorAll("*").forEach((el) => {
        el.style.animation = "none";
        el.style.transition = "none";
    });
}

function init() {
    applyReducedMotion();
    initSmoothScroll();
    initSectionAnimations();
    initNavActiveState();
    initParallaxHeroImage();
    initHoverEffects();
    initPageLoadAnimation();
    initKeyboardNavigation();
}

document.addEventListener("DOMContentLoaded", init);