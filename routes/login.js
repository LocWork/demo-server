const { Router } = require('express');
const router = Router();
const db = require('../database');
router.get('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const users = await db
      .promise()
      .query(
        `SELECT username, password from tbl_user where username = "${username}" && password = "${password}"`
      );
    if (users) {
      res.status(200).json(users[0]);
      // res.redirect('https://www.google.com/');
    } else {
      res.status(400).json({ msg: 'No user found' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
