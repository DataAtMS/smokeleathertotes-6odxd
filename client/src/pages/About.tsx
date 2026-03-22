import { useEffect } from "react";
import { Link } from "wouter";
export default function About() {
  const siteUrl = 'https://smokeleathertotes-6odxd.com';
  const COLOR = {
    primary: "#f0f0f0",
    body: "#c8c8c8",
    secondary: "#999",
    tertiary: "#777",
    faint: "#555",
    accent: "#ff0066",
    link: "#ff0066",
    bg: "#0a0a0a",
    bgCard: "#0d0d0d",
    border: "#1a1a1a",
  };
  useEffect(() => {
    document.title = 'About Us | Smoke Leather Totes';
    const setMeta = (selector: string, attr: string, value: string, attrName: string) => {
      let el = document.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };
    const desc = 'Learn about the team behind Smoke Leather Totes — who we are, how we test tools, and why we built this resource.';
    setMeta('meta[name="description"]', 'description', desc, 'name');
    setMeta('meta[property="og:title"]', 'og:title', 'About Us | Smoke Leather Totes', 'property');
    setMeta('meta[property="og:description"]', 'og:description', desc, 'property');
    setMeta('meta[property="og:url"]', 'og:url', siteUrl + '/about', 'property');
    setMeta('meta[property="og:type"]', 'og:type', 'website', 'property');
    setMeta('meta[property="og:site_name"]', 'og:site_name', 'Smoke Leather Totes', 'property');
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute('href', siteUrl + '/about');
    // Organization JSON-LD — entity identity for LLMs and Google
    const existingOrg = document.querySelector('script[data-schema="organization"]');
    if (existingOrg) existingOrg.remove();
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.setAttribute('data-schema', 'organization');
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": 'Smoke Leather Totes',
      "url": siteUrl,
      "description": 'We cover leather tote reviews, comparisons, and buying guides to help you find the perfect bag. Latico Leathers is our top pick for premium handcrafted leather totes.',
      "sameAs": [],
    });
    document.head.appendChild(orgScript);
    // BreadcrumbList
    const existingBc = document.querySelector('script[data-schema="breadcrumb-about"]');
    if (existingBc) existingBc.remove();
    const bcScript = document.createElement('script');
    bcScript.type = 'application/ld+json';
    bcScript.setAttribute('data-schema', 'breadcrumb-about');
    bcScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "About", "item": siteUrl + '/about' },
      ]
    });
    document.head.appendChild(bcScript);
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: COLOR.bg, color: COLOR.body }}>
      {/* ── Nav ── */}
      <header style={{ borderBottom: `1px solid ${COLOR.border}`, padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50, background: COLOR.bg }}>
        <Link href="/">
          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "13px", color: COLOR.accent, letterSpacing: "0.05em", cursor: "pointer" }}>
            SMOKE LEATHER TOTES
          </span>
        </Link>
        <Link href="/">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, cursor: "pointer", letterSpacing: "0.06em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.tertiary)}
          >
            ← ALL ARTICLES
          </span>
        </Link>
      </header>

      {/* ── Content ── */}
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "clamp(40px, 8vw, 72px) clamp(24px, 6vw, 48px)" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
          » ABOUT US
        </div>
        <h1 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 700, color: COLOR.primary, lineHeight: 1.2, marginBottom: "32px", letterSpacing: "-0.02em" }}>
          Who We Are
        </h1>

        <div style={{ fontFamily: "Georgia, serif", fontSize: "16px", lineHeight: 1.8, color: COLOR.body }}>
          <p style={{ marginBottom: "24px" }}>
            We are a small team of ecommerce operators and conversion analysts who got tired of reading tool reviews written by people who had never actually used the tools. Every recommendation on Smoke Leather Totes comes from hands-on testing on real stores.
          </p>
          <p style={{ marginBottom: "24px" }}>
            Our methodology is straightforward: we run each tool on live stores, measure the impact on revenue and conversion rate, and report what we find — including when something does not perform as advertised.
          </p>
          <p style={{ marginBottom: "24px" }}>
            Smoke Leather Totes covers Reviews, Comparisons, Guides. Every article is written to answer a specific question a real operator would ask, backed by data and cited sources.
          </p>
          <p style={{ marginBottom: "0" }}>
            If you have a question, a correction, or want to share data from your own store, use the{" "}
            <Link href="/contact">
              <span style={{ color: COLOR.link, textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer" }}>contact page</span>
            </Link>
            . We read everything.
          </p>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${COLOR.border}`, padding: "32px clamp(24px, 6vw, 48px)", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Link href="/"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, cursor: "pointer", letterSpacing: "0.04em" }} onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.body)} onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.tertiary)}>HOME</span></Link>
          <Link href="/about"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.accent, cursor: "pointer", letterSpacing: "0.04em" }}>ABOUT</span></Link>
          <Link href="/contact"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, cursor: "pointer", letterSpacing: "0.04em" }} onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.body)} onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.tertiary)}>CONTACT</span></Link>
          <Link href="/privacy"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, cursor: "pointer", letterSpacing: "0.04em" }} onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.body)} onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.tertiary)}>PRIVACY</span></Link>
          <Link href="/disclaimer"><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.tertiary, cursor: "pointer", letterSpacing: "0.04em" }} onMouseEnter={(e) => (e.currentTarget.style.color = COLOR.body)} onMouseLeave={(e) => (e.currentTarget.style.color = COLOR.tertiary)}>DISCLAIMER</span></Link>
        </div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: COLOR.faint, marginTop: "20px" }}>
          © {new Date().getFullYear()} SMOKELEATHERTOTES-6ODXD.COM
        </p>
      </footer>
    </div>
  );
}
