const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Zeno Moto | DevOps Assignment</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', system-ui, sans-serif;
          color: #1a1a2e;
          background: #ffffff;
        }

        /* NAV */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          border-bottom: 1px solid #eee;
        }
        .logo { font-weight: 700; font-size: 1.3rem; color: #111827; }
        .logo span { color: #2563eb; }
        nav ul { list-style: none; display: flex; gap: 32px; }
        nav ul li a { text-decoration: none; color: #4b5563; font-size: 0.95rem; }

        /* HERO */
        .hero {
          text-align: center;
          padding: 90px 20px 70px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ecfdf5;
          color: #059669;
          padding: 6px 16px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 24px;
        }
        .dot { width: 8px; height: 8px; background: #059669; border-radius: 50%; }
        .hero h1 {
          font-size: 2.6rem;
          color: #0f172a;
          margin-bottom: 16px;
          font-weight: 700;
        }
        .hero p {
          color: #64748b;
          font-size: 1.1rem;
          max-width: 560px;
          margin: 0 auto 32px;
        }
        .btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* STACK STRIP */
        .stack {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          padding: 40px 20px;
        }
        .tag {
          background: #eef2ff;
          color: #4338ca;
          font-size: 0.85rem;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: 600;
        }

        /* FEATURES */
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .feature-card {
          background: #f9fafb;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 28px;
        }
        .feature-card h3 { color: #111827; margin-bottom: 8px; font-size: 1.05rem; }
        .feature-card p { color: #6b7280; font-size: 0.9rem; line-height: 1.5; }
        .icon {
          width: 40px; height: 40px;
          background: #2563eb;
          border-radius: 8px;
          margin-bottom: 14px;
        }

        /* FOOTER */
        footer {
          text-align: center;
          padding: 32px 20px;
          color: #9ca3af;
          font-size: 0.85rem;
          border-top: 1px solid #eee;
          margin-top: 60px;
        }

        @media (max-width: 700px) {
          .features { grid-template-columns: 1fr; }
          nav ul { display: none; }
        }
      </style>
    </head>
    <body>

      <nav>
        <div class="logo">Zeno<span>Moto</span></div>
        <ul>
          <li><a href="#">Platform</a></li>
          <li><a href="#">Infrastructure</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
      </nav>

      <section class="hero">
        <div class="badge"><span class="dot"></span> Live &amp; Deployed</div>
        <h1>DevOps Intern Assignment</h1>
        <p>A fully automated CI/CD pipeline — from GitHub commit to a running container on AWS EC2, built with Jenkins and Docker.</p>
        <button class="btn">View Pipeline</button>
      </section>

      <div class="stack">
        <span class="tag">Node.js</span>
        <span class="tag">Docker</span>
        <span class="tag">Jenkins</span>
        <span class="tag">AWS EC2</span>
        <span class="tag">GitHub Actions Ready</span>
      </div>

      <div class="features">
        <div class="feature-card">
          <div class="icon"></div>
          <h3>Continuous Integration</h3>
          <p>Every push to main triggers an automated Jenkins pipeline — build, containerize, deploy.</p>
        </div>
        <div class="feature-card">
          <div class="icon"></div>
          <h3>Containerized Deployment</h3>
          <p>Packaged with Docker for consistent, portable deployment across any environment.</p>
        </div>
        <div class="feature-card">
          <div class="icon"></div>
          <h3>Cloud Infrastructure</h3>
          <p>Running live on AWS EC2, provisioned and configured end-to-end for this assignment.</p>
        </div>
      </div>

      <footer>
        Built for the Zeno Moto DevOps Intern Assignment &middot; Deployed via Jenkins CI/CD
      </footer>

    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
