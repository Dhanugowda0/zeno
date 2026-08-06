const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Zeno DevOps Assignment</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', system-ui, sans-serif;
          background: #f4f6f8;
          color: #1a1a2e;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          padding: 48px 56px;
          max-width: 520px;
          text-align: center;
          border-top: 4px solid #2563eb;
        }
        h1 {
          font-size: 1.75rem;
          margin-bottom: 12px;
          color: #111827;
        }
        p {
          color: #4b5563;
          font-size: 1rem;
          margin-bottom: 24px;
        }
        .status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ecfdf5;
          color: #059669;
          padding: 8px 18px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #059669;
          border-radius: 50%;
        }
        .stack {
          margin-top: 28px;
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .tag {
          background: #eef2ff;
          color: #4338ca;
          font-size: 0.8rem;
          padding: 4px 12px;
          border-radius: 6px;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Zeno DevOps Assignment</h1>
        <p>Deployed via Jenkins CI/CD pipeline to AWS EC2</p>
        <div class="status"><span class="dot"></span> Deployment Successful</div>
        <div class="stack">
          <span class="tag">Docker</span>
          <span class="tag">Jenkins</span>
          <span class="tag">AWS EC2</span>
          <span class="tag">Node.js</span>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
