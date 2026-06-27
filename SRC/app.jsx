import { useState } from "react";

const styles = {
  app: { fontFamily: "'Segoe UI', Arial, sans-serif", minHeight: "100vh", background: "#fff", margin: 0 },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", borderBottom: "1px solid #f0f0f0" },
  logo: { fontSize: "1.6rem", fontWeight: 900 },
  logoBlue: { color: "#22D3EE" },
  logoPink: { color: "#EC4899" },
  signInBtn: { background: "#6366F1", color: "white", border: "none", borderRadius: "10px", padding: "0.55rem 1.3rem", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" },
  hero: { position: "relative", textAlign: "center", padding: "3.5rem 1.5rem 2.5rem", overflow: "hidden" },
  heroTitle: { fontSize: "2.8rem", fontWeight: 900, lineHeight: 1.1, margin: "0 0 1rem" },
  titleBlack: { color: "#111" },
  titleCyan: { color: "#22D3EE" },
  titleGradient: { background: "linear-gradient(90deg, #7C3AED, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  heroDesc: { color: "#6B7280", fontSize: "1rem", maxWidth: "320px", margin: "0 auto 2rem", lineHeight: 1.6 },
  inputBox: { background: "#f9f9f9", borderRadius: "18px", padding: "1.2rem", maxWidth: "380px", margin: "0 auto", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" },
  input: { width: "100%", border: "1.5px solid #e5e7eb", borderRadius: "10px", padding: "0.85rem 1rem", fontSize: "0.9rem", marginBottom: "0.8rem", boxSizing: "border-box", outline: "none", background: "white" },
  generateBtn: { width: "100%", background: "linear-gradient(90deg, #22D3EE, #6366F1, #EC4899)", color: "white", border: "none", borderRadius: "12px", padding: "0.9rem", fontSize: "1rem", fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em" },
  howSection: { padding: "3rem 1.5rem", textAlign: "center", background: "#fafafa" },
  howTitle: { fontSize: "2.2rem", fontWeight: 900, marginBottom: "2.5rem", color: "#111" },
  stepCard: { marginBottom: "2.5rem" },
  stepEmoji: { fontSize: "2.8rem", marginBottom: "0.4rem" },
  stepNum: { fontSize: "2.2rem", fontWeight: 900, color: "#22D3EE", lineHeight: 1 },
  stepTitle: { fontSize: "1.2rem", fontWeight: 800, color: "#111", margin: "0.2rem 0" },
  stepDesc: { color: "#6B7280", fontSize: "0.95rem" },
  cta: { margin: "2rem 1.2rem", borderRadius: "22px", background: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)", padding: "3rem 1.5rem", textAlign: "center", color: "white" },
  ctaTitle: { fontSize: "2.2rem", fontWeight: 900, margin: "0 0 1rem" },
  ctaDesc: { opacity: 0.9, marginBottom: "2rem", lineHeight: 1.6, fontSize: "1rem" },
  ctaBtn: { background: "white", color: "#7C3AED", border: "none", borderRadius: "14px", padding: "1rem 2.2rem", fontSize: "1rem", fontWeight: 800, cursor: "pointer" },
  footer: { textAlign: "center", padding: "2rem", color: "#9CA3AF", fontSize: "0.9rem" },
};

const floatingEmojis = [
  { emoji: "🎨", style: { position: "absolute", top: "12%", left: "6%", fontSize: "2.4rem", opacity: 0.3 } },
  { emoji: "🚀", style: { position: "absolute", top: "38%", left: "4%", fontSize: "2rem", opacity: 0.28 } },
  { emoji: "🎸", style: { position: "absolute", top: "18%", right: "6%", fontSize: "2.4rem", opacity: 0.3 } },
  { emoji: "✨", style: { position: "absolute", top: "6%", left: "44%", fontSize: "1.8rem", opacity: 0.38 } },
  { emoji: "🎭", style: { position: "absolute", top: "42%", right: "5%", fontSize: "2rem", opacity: 0.28 } },
  { emoji: "⭐", style: { position: "absolute", top: "8%", right: "22%", fontSize: "1.7rem", opacity: 0.32 } },
  { emoji: "🎬", style: { position: "absolute", top: "25%", right: "16%", fontSize: "1.6rem", opacity: 0.22 } },
];

const steps = [
  { emoji: "✍️", num: "1", title: "Describe", desc: "Tell us about your brand and vision" },
  { emoji: "✨", num: "2", title: "Generate", desc: "AI creates unique logo concepts" },
  { emoji: "🎨", num: "3", title: "Customize", desc: "Tweak colors, fonts and styles" },
  { emoji: "⬇️", num: "4", title: "Download", desc: "Get high-quality files ready to use" },
];

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (prompt.trim()) setGenerated(true);
  };

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <span style={styles.logoBlue}>Logo</span>
          <span style={styles.logoPink}>AI</span>
        </div>
        <button style={styles.signInBtn}>Sign In</button>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        {floatingEmojis.map((e, i) => (
          <span key={i} style={e.style}>{e.emoji}</span>
        ))}

        <h1 style={styles.heroTitle}>
          <span style={styles.titleBlack}>Fast and Easy<br /></span>
          <span style={styles.titleCyan}>Logo </span>
          <span style={styles.titleGradient}>Creation</span>
        </h1>

        <p style={styles.heroDesc}>
          Create stunning logos for your brand in seconds with AI. No design experience needed.
        </p>

        <div style={styles.inputBox}>
          <input
            style={styles.input}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Describe your logo (e.g., 'Modern tech startup')"
          />
          <button style={styles.generateBtn} onClick={handleGenerate}>
            ✦ Generate
          </button>
          {generated && (
            <p style={{ color: "#22D3EE", marginTop: "0.8rem", fontWeight: 600, fontSize: "0.9rem" }}>
              ✅ Generating your logo...
            </p>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.howSection}>
        <h2 style={styles.howTitle}>How It Works</h2>
        {steps.map((step, i) => (
          <div key={i} style={styles.stepCard}>
            <div style={styles.stepEmoji}>{step.emoji}</div>
            <div style={styles.stepNum}>{step.num}</div>
            <div style={styles.stepTitle}>{step.title}</div>
            <div style={styles.stepDesc}>{step.desc}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to Create?</h2>
        <p style={styles.ctaDesc}>
          Join thousands of creators and businesses using LogoAI to design stunning logos
        </p>
        <button style={styles.ctaBtn}>Get Started Free</button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>made by roman</footer>
    </div>
  );
   }
   
