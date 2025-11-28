<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>FutureMD Academy – Premium MCAT Tutoring</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #050816;
      --card: #0b1020;
      --accent: #38bdf8;
      --accent-soft: rgba(56, 189, 248, 0.2);
      --accent-strong: rgba(56, 189, 248, 0.85);
      --text: #e5e7eb;
      --muted: #9ca3af;
      --border: #1f2933;
      --danger: #f97373;
      --radius-lg: 18px;
      --radius-xl: 22px;
      --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.5);
      --shadow-glow: 0 0 40px rgba(56, 189, 248, 0.35);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Inter", sans-serif;
    }

    body {
      background: radial-gradient(circle at top, #0b1220 0, #020617 55%, #000 100%);
      color: var(--text);
      line-height: 1.5;
    }

    .page {
      max-width: 1100px;
      margin: 0 auto;
      padding: 24px 16px 48px;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      gap: 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-icon {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 0, #38bdf8 0, #0ea5e9 40%, #1e293b 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e5f9ff;
      font-weight: 800;
      font-size: 20px;
      box-shadow: var(--shadow-glow);
    }

    .logo-text-main {
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 18px;
    }

    .logo-text-sub {
      font-size: 11px;
      color: var(--muted);
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      color: var(--muted);
    }

    .pill {
      border-radius: 999px;
      padding: 6px 12px;
      border: 1px solid var(--accent-soft);
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.3));
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .badge-dot {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--accent);
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.9);
    }

    .hero {
      display: grid;
      grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.7fr);
      gap: 24px;
      margin-bottom: 36px;
    }

    .hero-card {
      border-radius: var(--radius-xl);
      padding: 22px 22px 20px;
      background: linear-gradient(
        145deg,
        rgba(15, 23, 42, 0.95),
        rgba(15, 23, 42, 0.85),
        rgba(15, 23, 42, 0.95)
      );
      border: 1px solid rgba(55, 65, 81, 0.7);
      box-shadow: var(--shadow-soft);
      position: relative;
      overflow: hidden;
    }

    .hero-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.12), transparent 55%);
      opacity: 0.9;
      pointer-events: none;
    }

    .hero-eyebrow {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 8px;
    }

    .hero-title {
      font-size: 28px;
      line-height: 1.1;
      font-weight: 750;
      margin-bottom: 10px;
    }

    .hero-title span.accent {
      background: linear-gradient(120deg, #38bdf8, #a855f7);
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero-subtitle {
      font-size: 14px;
      color: var(--muted);
      margin-bottom: 16px;
    }

    .hero-list {
      list-style: none;
      margin-bottom: 20px;
      font-size: 13px;
      color: #cbd5f5;
    }

    .hero-list li {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-bottom: 6px;
    }

    .hero-list-bullet {
      width: 16px;
      height: 16px;
      border-radius: 999px;
      border: 1px solid rgba(56, 189, 248, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      color: var(--accent);
      flex-shrink: 0;
    }

    .hero-cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-bottom: 10px;
    }

    .btn-primary {
      padding: 10px 18px;
      border-radius: 999px;
      border: none;
      background: linear-gradient(135deg, #38bdf8, #0ea5e9);
      color: #020617;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      box-shadow: var(--shadow-glow);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-ghost {
      padding: 9px 14px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      background: rgba(15, 23, 42, 0.7);
      color: var(--muted);
      font-size: 12px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-primary span.arrow {
      font-size: 14px;
      transform: translateY(0.5px);
    }

    .hero-cred {
      font-size: 11px;
      color: var(--muted);
    }

    .hero-cred strong {
      color: #e5e7eb;
    }

    .hero-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
      font-size: 11px;
      color: var(--muted);
    }

    .hero-badge {
      border-radius: 999px;
      padding: 6px 10px;
      border: 1px solid rgba(55, 65, 81, 0.9);
      background: rgba(15, 23, 42, 0.85);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .hero-badge-icon {
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 9px;
      color: var(--accent);
      flex-shrink: 0;
    }

    .hero-side-card {
      border-radius: var(--radius-xl);
      padding: 16px 16px 14px;
      background: radial-gradient(circle at top, rgba(56, 189, 248, 0.22), transparent 60%),
        linear-gradient(145deg, #020617, #020617, #020617);
      border: 1px solid rgba(56, 189, 248, 0.4);
      box-shadow: var(--shadow-soft), var(--shadow-glow);
      position: relative;
    }

    .hero-side-label {
      font-size: 11px;
      color: var(--muted);
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    .hero-side-label span.value {
      color: #e5e7eb;
      font-weight: 600;
    }

    .hero-stat-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }

    .hero-stat {
      border-radius: 14px;
      padding: 10px 10px 8px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(55, 65, 81, 0.95);
      font-size: 11px;
    }

    .hero-stat-label {
      color: var(--muted);
      margin-bottom: 4px;
    }

    .hero-stat-value {
      font-size: 16px;
      font-weight: 700;
    }

    .hero-stat-tag {
      font-size: 10px;
      color: #9ca3af;
    }

    .slider-block {
      border-radius: 16px;
      padding: 12px 12px 10px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(56, 189, 248, 0.3);
      margin-bottom: 12px;
      font-size: 12px;
    }

    .slider-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 8px;
    }

    .slider-row label {
      white-space: nowrap;
      color: var(--muted);
      font-size: 11px;
    }

    input[type="range"] {
      flex-grow: 1;
      -webkit-appearance: none;
      appearance: none;
      height: 4px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--accent-strong), rgba(148, 163, 184, 0.4));
      outline: none;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #f9fafb;
      border: 2px solid var(--accent);
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.8);
      cursor: pointer;
    }

    input[type="range"]::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #f9fafb;
      border: 2px solid var(--accent);
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.8);
      cursor: pointer;
    }

    .slider-values {
      display: flex;
      justify-content: space-between;
      margin-top: 6px;
      font-size: 11px;
      color: var(--muted);
    }

    .slider-current {
      margin-top: 10px;
      font-size: 12px;
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(0, 1.5fr);
      gap: 8px;
      align-items: center;
    }

    .slider-price {
      font-size: 20px;
      font-weight: 750;
    }

    .slider-pill {
      border-radius: 999px;
      padding: 4px 10px;
      background: rgba(56, 189, 248, 0.18);
      color: #e0f2fe;
      font-size: 11px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      justify-content: center;
    }

    .slider-fineprint {
      margin-top: 8px;
      font-size: 11px;
      color: var(--muted);
    }

    .trust-row {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 8px;
      font-size: 11px;
      color: var(--muted);
    }

    .trust-avatars {
      display: inline-flex;
    }

    .avatar {
      width: 22px;
      height: 22px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 0, #fbbf24 0, #f97316 40%, #451a03 100%);
      border: 1px solid rgba(15, 23, 42, 0.8);
      box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.9);
    }

    .avatar:nth-child(2) {
      margin-left: -8px;
      background: radial-gradient(circle at 30% 0, #38bdf8 0, #0ea5e9 40%, #0b1120 100%);
    }

    .avatar:nth-child(3) {
      margin-left: -8px;
      background: radial-gradient(circle at 30% 0, #a855f7 0, #7e22ce 40%, #1e1b4b 100%);
    }

    .section {
      margin-bottom: 32px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 16px;
      margin-bottom: 16px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 700;
    }

    .section-subtitle {
      font-size: 12px;
      color: var(--muted);
      max-width: 360px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .feature-card {
      border-radius: var(--radius-lg);
      padding: 12px 12px 10px;
      background: rgba(15, 23, 42, 0.92);
      border: 1px solid rgba(51, 65, 85, 0.9);
      font-size: 12px;
    }

    .feature-title {
      font-weight: 600;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .feature-title span.icon {
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: rgba(15, 118, 110, 0.35);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    .feature-body {
      color: var(--muted);
      font-size: 11px;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .testimonial-card {
      border-radius: var(--radius-lg);
      padding: 12px 12px 10px;
      background: linear-gradient(145deg, #020617, #020617 55%, #020617);
      border: 1px solid rgba(55, 65, 81, 0.9);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
      position: relative;
      font-size: 12px;
    }

    .quote-mark {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 20px;
      color: rgba(148, 163, 184, 0.6);
    }

    .testimonial-score {
      font-size: 11px;
      color: #a5b4fc;
      margin-bottom: 4px;
    }

    .testimonial-body {
      color: var(--text);
      font-size: 11px;
      margin-bottom: 10px;
    }

    .testimonial-footer {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--muted);
    }

    .testimonial-avatar {
      width: 22px;
      height: 22px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 0, #22c55e 0, #16a34a 40%, #052e16 100%);
      border: 1px solid rgba(15, 23, 42, 0.9);
    }

    .plans-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .plan-card {
      border-radius: var(--radius-lg);
      padding: 14px 12px 11px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(75, 85, 99, 0.9);
      font-size: 12px;
      position: relative;
    }

    .plan-card.featured {
      border-color: var(--accent);
      box-shadow: var(--shadow-soft), var(--shadow-glow);
      background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 55%),
        rgba(15, 23, 42, 0.95);
    }

    .plan-label {
      font-size: 11px;
      color: var(--muted);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.11em;
    }

    .plan-name {
      font-weight: 650;
      margin-bottom: 2px;
    }

    .plan-price {
      font-size: 18px;
      font-weight: 750;
      margin-bottom: 4px;
    }

    .plan-caption {
      font-size: 11px;
      color: var(--muted);
      margin-bottom: 8px;
    }

    .plan-list {
      list-style: none;
      margin-bottom: 10px;
      font-size: 11px;
      color: var(--muted);
    }

    .plan-list li {
      display: flex;
      gap: 6px;
      margin-bottom: 4px;
    }

    .plan-check {
      width: 14px;
      height: 14px;
      border-radius: 999px;
      border: 1px solid rgba(56, 189, 248, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      color: var(--accent);
      flex-shrink: 0;
      margin-top: 1px;
    }

    .plan-cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      background: rgba(15, 23, 42, 0.9);
      color: #e5e7eb;
      font-size: 11px;
      cursor: pointer;
      margin-top: 2px;
    }

    .plan-tag {
      position: absolute;
      top: 8px;
      right: 10px;
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(251, 191, 36, 0.16);
      color: #fde68a;
      border: 1px solid rgba(251, 191, 36, 0.6);
    }

    .faq-grid {
      display: grid;
      grid-template-columns: 1.3fr 1.7fr;
      gap: 16px;
    }

    .faq-note {
      font-size: 12px;
      color: var(--muted);
    }

    .faq-note strong {
      color: #e5e7eb;
    }

    .faq-list {
      font-size: 12px;
    }

    .faq-item {
      border-radius: 12px;
      padding: 10px 10px 8px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(55, 65, 81, 0.9);
      margin-bottom: 8px;
    }

    .faq-q {
      font-weight: 600;
      margin-bottom: 4px;
    }

    .faq-a {
      font-size: 11px;
      color: var(--muted);
    }

    .footer {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid rgba(31, 41, 55, 0.9);
      font-size: 11px;
      color: var(--muted);
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .footer a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 500;
    }

    .footer-links {
      display: flex;
      gap: 12px;
    }

    @media (max-width: 900px) {
      .hero {
        grid-template-columns: minmax(0, 1fr);
      }
      .hero-side-card {
        order: -1;
      }
      .features-grid,
      .testimonials-grid,
      .plans-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .page {
        padding-inline: 14px;
      }
      header {
        flex-direction: column;
        align-items: flex-start;
      }
      .features-grid,
      .testimonials-grid,
      .plans-grid {
        grid-template-columns: minmax(0, 1fr);
      }
      .faq-grid {
        grid-template-columns: minmax(0, 1fr);
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <div class="logo">
        <div class="logo-icon">F</div>
        <div>
          <div class="logo-text-main">FutureMD Academy</div>
          <div class="logo-text-sub">High-yield, 1:1 MCAT mastery</div>
        </div>
      </div>
      <div class="header-right">
        <div class="pill">
          <span class="badge-dot"></span>
          <span>Now enrolling for the next MCAT cycle</span>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-card">
        <div class="hero-eyebrow">MCAT TUTORING THAT ACTUALLY MOVES YOUR SCORE</div>
        <h1 class="hero-title">
          1:1 coaching from
          <span class="accent">519+ scorers</span> so you don’t waste a single hour.
        </h1>
        <p class="hero-subtitle">
          We built the program we wish we had: personalized, accountable, and brutally
          honest. No 500-page “strategy” book. Just a clear plan, expert feedback, and reps on
          the exact skills that raise your score.
        </p>

        <ul class="hero-list">
          <li>
            <div class="hero-list-bullet">✓</div>
            <span>Work directly with tutors who scored 519+ and attend/attended top medical schools.</span>
          </li>
          <li>
            <div class="hero-list-bullet">✓</div>
            <span>Custom study plan built around your test date, schedule, and baseline score.</span>
          </li>
          <li>
            <div class="hero-list-bullet">✓</div>
            <span>Evidence-based reading + reasoning training so you stop “running out of time.”</span>
          </li>
        </ul>

        <div class="hero-cta-row">
          <button class="btn-primary" onclick="scrollToForm()">
            Apply for a strategy call
            <span class="arrow">→</span>
          </button>
          <button class="btn-ghost" onclick="document.getElementById('testimonials').scrollIntoView({behavior:'smooth'})">
            See student score jumps
          </button>
        </div>
        <div class="hero-cred">
          <strong>Built by students, for future physicians.</strong> Two 519+ scorers &amp; a USC-trained
          business strategist, focused on one thing: your score.
        </div>
        <div class="hero-badge-row">
          <div class="hero-badge">
            <div class="hero-badge-icon">★</div>
            <span>Average score increase: +10–14 points</span>
          </div>
          <div class="hero-badge">
            <div class="hero-badge-icon">⏱</div>
            <span>Limited spots · true 1:1, not a call center</span>
          </div>
        </div>
      </div>

      <!-- PRICING / SLIDER CARD -->
      <div class="hero-side-card" id="pricing-card">
        <div class="hero-side-label">
          <span>Investment overview</span>
          <span class="value"><span id="hoursLabel">20</span> guided hours</span>
        </div>

        <div class="hero-stat-grid">
          <div class="hero-stat">
            <div class="hero-stat-label">Current package</div>
            <div class="hero-stat-value" id="priceDisplay">$3,000</div>
            <div class="hero-stat-tag">
              <span id="hourlyDisplay">$150</span>/hour · 1:1
            </div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-label">Typical gain</div>
            <div class="hero-stat-value">+10–14</div>
            <div class="hero-stat-tag">Scaled score points</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-label">Seat availability</div>
            <div class="hero-stat-value">Limited</div>
            <div class="hero-stat-tag">We cap total students</div>
          </div>
        </div>

        <div class="slider-block">
          <div><strong>Design your package.</strong> Slide to pick the number of hours you want.</div>
          <div class="slider-row">
            <label for="hoursRange">Coaching hours</label>
            <input
              type="range"
              id="hoursRange"
              min="10"
              max="40"
              step="5"
              value="20"
              oninput="updatePricing(this.value)"
            />
          </div>
          <div class="slider-values">
            <span>10 hrs</span>
            <span>20 hrs</span>
            <span>30 hrs</span>
            <span>40 hrs</span>
          </div>

          <div class="slider-current">
            <div>
              <div class="slider-price" id="sliderPrice">$3,000</div>
              <div class="slider-fineprint">
                Billed in full. Flexible payment plans available on request.
              </div>
            </div>
            <div style="text-align:right;">
              <div class="slider-pill">
                <span>3k at 20 hrs · 6k at 40 hrs</span>
              </div>
            </div>
          </div>
        </div>

        <div class="trust-row">
          <div class="trust-avatars">
            <div class="avatar"></div>
            <div class="avatar"></div>
            <div class="avatar"></div>
          </div>
          <div>
            <strong>Dozens of students</strong> guided from “stuck at 500s” to competitive MD scores.
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">What makes FutureMD different?</h2>
        <p class="section-subtitle">
          You don’t need more content. You need structure, feedback, and someone who knows exactly
          what’s holding your score back — and how to fix it efficiently.
        </p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-title">
            <span class="icon">🎯</span>
            Targeted, not generic
          </div>
          <p class="feature-body">
            Every student gets a baseline analysis, custom schedule, and weekly score tracker. We
            only assign work that moves specific sections — no filler.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-title">
            <span class="icon">🧠</span>
            High-yield CARS & passages
          </div>
          <p class="feature-body">
            We break CARS and science passages into small, repeatable skills: mapping arguments,
            anticipating traps, and managing time under pressure.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-title">
            <span class="icon">📈</span>
            Real accountability
          </div>
          <p class="feature-body">
            Weekly check-ins, mandatory review templates, and shared spreadsheets so you and your
            tutor see exactly where every point is coming from.
          </p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section" id="testimonials">
      <div class="section-header">
        <h2 class="section-title">Student results</h2>
        <p class="section-subtitle">
          We’re not promising magic. We’re promising a plan, honest feedback, and work that actually
          converts into points. Here’s what recent students say.
        </p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="quote-mark">“</div>
          <div class="testimonial-score">510 → 521 · 11-point jump</div>
          <div class="testimonial-body">
            “Before this, I kept scoring 509–510 no matter what I tried. Within 6 weeks we rebuilt my
            CARS approach and tightened my review. My final AAMC full-length was a 521.”
          </div>
          <div class="testimonial-footer">
            <div class="testimonial-avatar"></div>
            <div>
              <div><strong>Riya S.</strong> · MD applicant</div>
              <div>Accepted to multiple top-25 programs</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="quote-mark">“</div>
          <div class="testimonial-score">499 → 510 · first-gen student</div>
          <div class="testimonial-body">
            “I felt completely lost after my diagnostic. They broke everything into small, doable
            tasks and stayed on me when I slacked. I ended up with a 510 — enough to be competitive
            at my in-state MD programs.”
          </div>
          <div class="testimonial-footer">
            <div class="testimonial-avatar"></div>
            <div>
              <div><strong>Daniel K.</strong> · First-gen premed</div>
              <div>Full-time student & part-time worker</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="quote-mark">“</div>
          <div class="testimonial-score">512 → 520 · retaker</div>
          <div class="testimonial-body">
            “As a retaker, I didn’t need content — I needed strategy. They dissected my AAMC exams,
            showed me my patterns, and built sessions around only those weaknesses.”
          </div>
          <div class="testimonial-footer">
            <div class="testimonial-avatar"></div>
            <div>
              <div><strong>Michelle L.</strong> · Non-traditional student</div>
              <div>Started med school with confidence</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PLANS / PACKAGES -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Choose the level of support you want</h2>
        <p class="section-subtitle">
          All programs are 1:1, live on Zoom, and include custom planning + structured review
          templates. Slide the calculator above to preview your total cost.
        </p>
      </div>
      <div class="plans-grid">
        <div class="plan-card">
          <div class="plan-label">Starter</div>
          <div class="plan-name">Strategy Sprint</div>
          <div class="plan-price">10 hrs</div>
          <div class="plan-caption">
            For self-motivated students who want expert direction and a sharp plan.
          </div>
          <ul class="plan-list">
            <li>
              <div class="plan-check">✓</div>
              <span>Diagnostic breakdown + custom 8-week plan</span>
            </li>
            <li>
              <div class="plan-check">✓</div>
              <span>10 hours of live 1:1 coaching</span>
            </li>
            <li>
              <div class="plan-check">✓</div>
              <span>Study schedule + score tracking sheet</span>
            </li>
          </ul>
          <button class="plan-cta" onclick="scrollToForm()">
            Apply for Starter
          </button>
        </div>

        <div class="plan-card featured">
          <div class="plan-label">Recommended</div>
          <div class="plan-name">Score Builder</div>
          <div class="plan-price">20 hrs</div>
          <div class="plan-caption">
            Our most popular option — enough time to rebuild strategy and fix key weak spots.
          </div>
          <ul class="plan-list">
            <li>
              <div class="plan-check">✓</div>
              <span>Everything in Starter, plus</span>
            </li>
            <li>
              <div class="plan-check">✓</div>
              <span>Deep-dive CARS + passage strategy</span>
            </li>
            <li>
              <div class="plan-check">✓</div>
              <span>AAMC exam review built into sessions</span>
            </li>
          </ul>
          <button class="plan-cta" onclick="scrollToForm()">
            Apply for Score Builder
          </button>
          <div class="plan-tag">Best balance</div>
        </div>

        <div class="plan-card">
          <div class="plan-label">Max Support</div>
          <div class="plan-name">Full Cycle Mentorship</div>
          <div class="plan-price">30–40 hrs</div>
          <div class="plan-caption">
            For students who want someone in their corner from diagnostic to test day.
          </div>
          <ul class="plan-list">
            <li>
              <div class="plan-check">✓</div>
              <span>Ongoing plan adjustments & check-ins</span>
            </li>
            <li>
              <div class="plan-check">✓</div>
              <span>Full exam review + pattern analysis</span>
            </li>
            <li>
              <div class="plan-check">✓</div>
              <span>Priority scheduling with your tutor</span>
            </li>
          </ul>
          <button class="plan-cta" onclick="scrollToForm()">
            Join the waitlist
          </button>
        </div>
      </div>
    </section>

    <!-- SIMPLE "APPLY" SECTION (FAKE FORM FOR NOW) -->
    <section class="section" id="apply">
      <div class="section-header">
        <h2 class="section-title">Apply for a free 20-minute strategy call</h2>
        <p class="section-subtitle">
          This isn’t a sales webinar. We’ll look at your current scores, timeline, and constraints,
          then tell you honestly if we can help — and how many hours you actually need.
        </p>
      </div>

      <div class="faq-grid">
        <div class="faq-note">
          <strong>What happens on the call?</strong>
          <ul style="margin-top:4px; padding-left:18px; list-style: disc;">
            <li>We walk through your current practice scores and schedule.</li>
            <li>We map out a realistic test date and weekly gameplan.</li>
            <li>We recommend an hour range (10–40) based on your situation.</li>
          </ul>
          <p style="margin-top:8px;">
            If it’s not a fit, we’ll tell you exactly what we’d do on our own in your shoes.
          </p>
        </div>
        <div class="faq-list">
          <!-- You can replace this with a real form (Formspree, Tally, Typeform, Google Form, etc.) -->
          <div class="faq-item">
            <div class="faq-q">Quick interest form</div>
            <div class="faq-a">
              <p style="margin-bottom:6px;">
                For now, email us with the subject line <strong>“MCAT Strategy Call”</strong>:
              </p>
              <p style="margin-bottom:6px;">
                <a href="mailto:hello@futuremdacademy.com">hello@futuremdacademy.com</a>
              </p>
              <p style="margin-bottom:4px;">Include:</p>
              <ul style="padding-left:18px; list-style: disc;">
                <li>Your target test date</li>
                <li>Diagnostic / full-length scores so far</li>
                <li>A short note about what you’re struggling with most</li>
              </ul>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Do you offer payment plans?</div>
            <div class="faq-a">
              Yes — we can split payments for 20+ hour programs. Mention this on your call and we’ll
              walk through options.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Common questions</h2>
        <p class="section-subtitle">
          Straight answers to the things everyone asks before they start.
        </p>
      </div>
      <div class="faq-grid">
        <div class="faq-list">
          <div class="faq-item">
            <div class="faq-q">Is this worth it if I already bought another course?</div>
            <div class="faq-a">
              Yes — most of our students come from big-box courses that didn’t move their score.
              We keep any good materials you already have and focus on strategy, accountability, and
              exam-level practice.
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Do you guarantee a certain score?</div>
            <div class="faq-a">
              No fake guarantees. We guarantee clarity: you’ll know what to do every week, why
              you’re doing it, and what we’re adjusting based on your practice results.
            </div>
          </div>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <div class="faq-q">How many students do you take at once?</div>
            <div class="faq-a">
              Very few. We’re not trying to be a call center. Each tutor works with a small,
              controlled number of students so feedback stays sharp and personalized.
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Can you help with applications too?</div>
            <div class="faq-a">
              Our primary focus is MCAT performance. When your score is where it needs to be, we can
              discuss separate support for school list strategy and primary/secondary essays.
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div>© <span id="year"></span> FutureMD Academy. All rights reserved.</div>
      <div class="footer-links">
        <span>Email: <a href="mailto:hello@futuremdacademy.com">hello@futuremdacademy.com</a></span>
        <span>Instagram: @futuremdacademy (placeholder)</span>
      </div>
    </footer>
  </div>

  <script>
    const HOURLY_RATE = 150; // 20h -> 3000, 40h -> 6000

    function formatMoney(value) {
      return "$" + value.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }

    function updatePricing(hoursStr) {
      const hours = parseInt(hoursStr, 10);
      const total = hours * HOURLY_RATE;

      const hoursLabel = document.getElementById("hoursLabel");
      const priceDisplay = document.getElementById("priceDisplay");
      const hourlyDisplay = document.getElementById("hourlyDisplay");
      const sliderPrice = document.getElementById("sliderPrice");

      if (!hoursLabel || !priceDisplay || !hourlyDisplay || !sliderPrice) return;

      hoursLabel.textContent = hours;
      priceDisplay.textContent = formatMoney(total);
      sliderPrice.textContent = formatMoney(total);
      hourlyDisplay.textContent = "$" + HOURLY_RATE;
    }

    function scrollToForm() {
      const el = document.getElementById("apply");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    // Initialize
    document.addEventListener("DOMContentLoaded", function () {
      const slider = document.getElementById("hoursRange");
      if (slider) updatePricing(slider.value);

      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    });
  </script>
</body>
</html>
