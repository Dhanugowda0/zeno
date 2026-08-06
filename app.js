const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Zeno DevOps Assignment</h1><p>Deployed via Jenkins CI/CD to AWS EC2 ✅</p>');
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));