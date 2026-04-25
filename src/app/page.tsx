export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Comic Neue', cursive;
          background-color: #fff9f0;
          background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.05) 39px, rgba(0,0,0,0.05) 40px),
                            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.05) 39px, rgba(0,0,0,0.05) 40px);
          min-height: 100vh;
        }
        .generate-btn:hover { box-shadow: 2px 2px 0 #111 !important; transform: translate(3px, 3px) !important; }
        .feature-card:hover { transform: translate(-2px, -2px) !important; box-shadow: 6px 6px 0 #111 !important; }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>

        {/* HEADER */}
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "60px" }}>
          <div style={{ fontFamily: "'Bangers', cursive", fontSize: "42px", letterSpacing: "2px", color: "#111", textShadow: "3px 3px 0 #FFD700, 5px 5px 0 #111" }}>
            Comic<span style={{ color: "#FF3A3A", textShadow: "3px 3px 0 #111" }}>Me</span>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ background: "#FF3A3A", color: "white", fontFamily: "'Bangers', cursive", fontSize: "14px", letterSpacing: "1px", padding: "6px 14px", border: "3px solid #111", borderRadius: "4px", boxShadow: "3px 3px 0 #111", transform: "rotate(-2deg)" }}>FREE BETA</div>
            <button className="generate-btn" style={{ background: "#FFD700", border: "4px solid #111", borderRadius: "6px", padding: "10px 20px", fontFamily: "'Bangers', cursive", fontSize: "15px", letterSpacing: "2px", color: "#111", cursor: "pointer", boxShadow: "5px 5px 0 #111", transition: "all 0.1s" }}>Sign In</button>
          </div>
        </header>

        {/* HERO */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", marginBottom: "70px" }}>
          <div>
            <div style={{ position: "relative", background: "white", border: "3px solid #111", borderRadius: "16px", padding: "24px", marginBottom: "24px", boxShadow: "5px 5px 0 #111" }}>
              <h1 style={{ fontFamily: "'Bangers', cursive", fontSize: "32px", letterSpacing: "1px", color: "#111", lineHeight: "1.2", marginBottom: "10px" }}>
                Turn your life into a comic strip in 10 seconds!
              </h1>
              <p style={{ fontSize: "15px", color: "#555", fontWeight: "700", lineHeight: "1.6" }}>
                Describe your moment — funny, touching or catastrophic — and AI draws it as manga, comics or stick figure.
              </p>
            </div>
            <div style={{ display: "inline-block", background: "#FFD700", border: "3px solid #111", padding: "8px 16px", fontFamily: "'Bangers', cursive", fontSize: "16px", letterSpacing: "1px", color: "#111", boxShadow: "3px 3px 0 #111", transform: "rotate(1deg)", marginBottom: "16px" }}>
              ⚡ No skills required
            </div>
            <div>
              <button className="generate-btn" style={{ width: "100%", background: "#FFD700", border: "4px solid #111", borderRadius: "6px", padding: "16px 24px", fontFamily: "'Bangers', cursive", fontSize: "22px", letterSpacing: "2px", color: "#111", cursor: "pointer", boxShadow: "5px 5px 0 #111", transition: "all 0.1s" }}>
                TRY FOR FREE →
              </button>
            </div>
            <div style={{ marginTop: "10px", fontSize: "13px", fontWeight: "700", color: "#888", textAlign: "center" }}>
              3 free generations · No credit card needed
            </div>
          </div>

          {/* REAL AI PANELS */}
          <div>
            <div style={{ border: "4px solid #111", padding: "8px", background: "#111", boxShadow: "8px 8px 0 #FFD700" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                <div style={{ position: "relative" }}>
  <img src="/panel-before.png" alt="Before" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", border: "2px solid #111" }} />
  <div style={{ position: "absolute", top: "8px", left: "8px", background: "white", border: "2px solid #111", borderRadius: "10px", padding: "4px 8px", fontFamily: "'Bangers', cursive", fontSize: "11px", letterSpacing: "1px", boxShadow: "2px 2px 0 #111" }}>
    Zzz...
  </div>
  <div style={{ position: "absolute", bottom: "6px", left: "6px", background: "#FFD700", border: "2px solid #111", fontFamily: "'Bangers', cursive", fontSize: "12px", padding: "2px 8px", letterSpacing: "1px" }}>BEFORE</div>
</div>
<div style={{ position: "relative" }}>
  <img src="/panel-during.png" alt="During" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", border: "2px solid #111" }} />
  <div style={{ position: "absolute", top: "8px", right: "8px", background: "white", border: "2px solid #111", borderRadius: "10px", padding: "4px 8px", fontFamily: "'Bangers', cursive", fontSize: "11px", letterSpacing: "1px", boxShadow: "2px 2px 0 #111" }}>
    I'm late!!
  </div>
  <div style={{ position: "absolute", bottom: "6px", left: "6px", background: "#FF3A3A", border: "2px solid #111", fontFamily: "'Bangers', cursive", fontSize: "12px", padding: "2px 8px", letterSpacing: "1px", color: "white" }}>DURING</div>
</div>
   <div style={{ position: "relative", gridColumn: "1 / -1" }}>
  <img src="/panel-after.png" alt="After" style={{ width: "100%", height: "160px", objectFit: "cover", objectPosition: "center top", display: "block", border: "2px solid #111" }} />
  {/* Bulle dialogue */}
  <div style={{ position: "absolute", top: "10px", right: "10px", background: "white", border: "2px solid #111", borderRadius: "12px", padding: "6px 10px", fontFamily: "'Bangers', cursive", fontSize: "13px", letterSpacing: "1px", maxWidth: "120px", textAlign: "center", boxShadow: "2px 2px 0 #111" }}>
    NOOO!! Not again...
  </div>
  <div style={{ position: "absolute", bottom: "6px", left: "6px", background: "white", border: "2px solid #111", fontFamily: "'Bangers', cursive", fontSize: "12px", padding: "2px 8px", letterSpacing: "1px" }}>AFTER...</div>
</div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px", fontFamily: "'Bangers', cursive", fontSize: "13px", letterSpacing: "1px", color: "#888" }}>
              AI GENERATED · "I missed my bus this morning"
            </div>
          </div>
        </section>

        {/* FORM */}
        <section style={{ background: "white", border: "4px solid #111", borderRadius: "8px", padding: "32px", boxShadow: "8px 8px 0 #111", marginBottom: "56px", position: "relative" }}>
          <div style={{ position: "absolute", top: "-16px", left: "24px", background: "#FF3A3A", color: "white", fontFamily: "'Bangers', cursive", fontSize: "16px", letterSpacing: "1px", padding: "4px 14px", border: "3px solid #111" }}>
            NEW STORY!
          </div>
          <label style={{ fontFamily: "'Bangers', cursive", fontSize: "20px", letterSpacing: "1px", color: "#111", display: "block", marginBottom: "12px" }}>
            Describe your moment ✍️
          </label>
          <textarea
            style={{ width: "100%", border: "3px solid #111", borderRadius: "6px", padding: "16px", fontFamily: "'Comic Neue', cursive", fontSize: "15px", fontWeight: "700", color: "#111", resize: "none", height: "120px", background: "#fffdf5", outline: "none" }}
            placeholder="E.g: This morning I mixed up salt and sugar in my coffee, right in front of all my coworkers..."
          />
          <div style={{ display: "flex", gap: "12px", marginTop: "16px", alignItems: "center" }}>
            <select style={{ border: "3px solid #111", borderRadius: "6px", padding: "12px 16px", fontFamily: "'Bangers', cursive", fontSize: "16px", background: "white", color: "#111", outline: "none", boxShadow: "3px 3px 0 #111" }}>
              <option>🇯🇵 Manga</option>
              <option>🦸 US Comics</option>
              <option>🕴️ Stick Figure</option>
            </select>
            <select style={{ border: "3px solid #111", borderRadius: "6px", padding: "12px 16px", fontFamily: "'Bangers', cursive", fontSize: "16px", background: "white", color: "#111", outline: "none", boxShadow: "3px 3px 0 #111" }}>
              <option>😂 Funny</option>
              <option>😢 Dramatic</option>
              <option>⚡ Epic</option>
            </select>
            <button className="generate-btn" style={{ flex: 1, background: "#FFD700", border: "4px solid #111", borderRadius: "6px", padding: "14px 24px", fontFamily: "'Bangers', cursive", fontSize: "22px", letterSpacing: "2px", color: "#111", cursor: "pointer", boxShadow: "5px 5px 0 #111", transition: "all 0.1s" }}>
              GENERATE ✨
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "'Bangers', cursive", fontSize: "14px", letterSpacing: "1px", color: "#888" }}>CREDITS LEFT</span>
              <div style={{ display: "flex", gap: "6px" }}>
                {[1,2,3].map(i => <div key={i} style={{ width: "14px", height: "14px", borderRadius: "50%", border: "2px solid #111", background: "#FFD700" }} />)}
              </div>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "#888" }}>3/3 available today</span>
          </div>
        </section>

        {/* FEATURES */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span style={{ fontFamily: "'Bangers', cursive", fontSize: "32px", letterSpacing: "2px", color: "#111", borderBottom: "4px solid #FFD700", paddingBottom: "4px" }}>WHY COMICME?</span>
        </div>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "56px" }}>
          {[
            { icon: "🎨", title: "3 Unique Styles", desc: "Japanese Manga, US Comics or minimalist Stick Figure." },
            { icon: "📖", title: "3-Panel Format", desc: "Before / During / After — a real narrative mini-story." },
            { icon: "🚀", title: "10 Seconds Flat", desc: "Describe, generate, share. That's it." },
          ].map((f, i) => (
            <div key={i} className="feature-card" style={{ border: "3px solid #111", borderRadius: "6px", padding: "20px 16px", background: "white", boxShadow: "4px 4px 0 #111", textAlign: "center", transition: "all 0.15s" }}>
              <span style={{ fontSize: "28px", marginBottom: "10px", display: "block" }}>{f.icon}</span>
              <div style={{ fontFamily: "'Bangers', cursive", fontSize: "17px", letterSpacing: "1px", color: "#111", marginBottom: "6px" }}>{f.title}</div>
              <p style={{ fontSize: "13px", color: "#666", fontWeight: "700", lineHeight: "1.4" }}>{f.desc}</p>
            </div>
          ))}
        </section>

        {/* PRICING */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span style={{ fontFamily: "'Bangers', cursive", fontSize: "32px", letterSpacing: "2px", color: "#111", borderBottom: "4px solid #FFD700", paddingBottom: "4px" }}>CHOOSE YOUR POWER</span>
        </div>
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "56px" }}>
          {[
            { name: "SIDEKICK", price: "$0", period: "forever", features: ["3 creations / day", "1 style (Manga)", "ComicMe watermark"], featured: false },
            { name: "HERO", price: "$9", period: "per month", features: ["30 creations / month", "All 3 styles", "No watermark", "HD download"], featured: true },
            { name: "LEGEND", price: "$19", period: "per month", features: ["Unlimited", "All styles", "API access", "Custom styles"], featured: false },
          ].map((p, i) => (
            <div key={i} style={{ border: "3px solid #111", borderRadius: "6px", padding: "24px 16px", background: p.featured ? "#FFD700" : "white", boxShadow: p.featured ? "6px 6px 0 #111" : "4px 4px 0 #111", textAlign: "center", position: "relative", transform: p.featured ? "rotate(-1deg) scale(1.03)" : "none" }}>
              {p.featured && <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#FF3A3A", color: "white", fontFamily: "'Bangers', cursive", fontSize: "13px", letterSpacing: "1px", padding: "3px 12px", border: "2px solid #111", whiteSpace: "nowrap" }}>MOST POPULAR!</div>}
              <div style={{ fontFamily: "'Bangers', cursive", fontSize: "20px", letterSpacing: "1px", color: "#111", marginBottom: "8px" }}>{p.name}</div>
              <div style={{ fontFamily: "'Bangers', cursive", fontSize: "40px", color: "#111", lineHeight: "1" }}>{p.price}</div>
              <div style={{ fontSize: "13px", color: "#666", fontWeight: "700", marginBottom: "16px" }}>{p.period}</div>
              <ul style={{ listStyle: "none", textAlign: "left", fontSize: "13px", fontWeight: "700", color: "#444", lineHeight: "2" }}>
                {p.features.map((f, j) => <li key={j}>✓ {f}</li>)}
              </ul>
              <button className="generate-btn" style={{ width: "100%", marginTop: "16px", background: p.featured ? "#111" : "#FFD700", color: p.featured ? "#FFD700" : "#111", border: "3px solid #111", borderRadius: "6px", padding: "10px", fontFamily: "'Bangers', cursive", fontSize: "16px", letterSpacing: "1px", cursor: "pointer", boxShadow: "3px 3px 0 #111", transition: "all 0.1s" }}>
                GET STARTED →
              </button>
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", fontFamily: "'Bangers', cursive", fontSize: "14px", letterSpacing: "1px", color: "#aaa", padding: "24px 0", borderTop: "3px solid #111" }}>
          COMICME © 2026 · MADE WITH ❤️ AND TOO MUCH COFFEE ·{" "}
          <a href="#" style={{ color: "#FF3A3A", textDecoration: "none" }}>TERMS</a> ·{" "}
          <a href="#" style={{ color: "#FF3A3A", textDecoration: "none" }}>CONTACT</a>
        </footer>

      </div>
    </>
  );
}