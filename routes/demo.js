const { Router } = require('express');
const router = Router();

//to use this route used /api/{name}
router.get('/get', async (req, res) => {
  res.status(200).json({ msg: 'GET' });
});

router.post('/post', async (req, res) => {
  res.status(200).json({ msg: 'POST' });
});

router.put('/put', async (req, res) => {
  res.status(200).json({ msg: 'PUT' });
});

router.delete('/delete', async (req, res) => {
  res.status(200).json({ msg: 'DELETE' });
});

module.exports = router;
