module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { password } = req.body || {};
  if (password === (process.env.APP_PASSWORD || '#Henry1W*H')) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ ok: false });
};
