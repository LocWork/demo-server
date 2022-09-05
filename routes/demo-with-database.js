const { Router } = require('express');
const router = Router();

const db = require('../database');

router.get('/', async (req, res) => {
  try {
    const users = await db.promise().query(`select username from tbl_user`);
    if (users) {
      console.log({ data: users[0] });
      res.status(200).json({ data: users[0] });
    } else {
      res.status(400).json({ msg: 'No user found' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db
      .promise()
      .query(`Select username from tbl_user WHERE id = ${id}`);
    if (user) {
      res.status(200).json(user[0]);
    } else {
      res.status(400).json({ msg: `Unable to find tbl_user` });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post(
  '/',

  async (req, res) => {
    try {
      const { username, password } = req.body;
      await db
        .promise()
        .query(
          `INSERT INTO tbl_user (username, password) values ("${username}","${password}")`
        );
      res.status(200).json({ msg: 'Successfully Created' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: `An error has occured` });
    }
  }
);

router.put('/:id', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { id } = req.params;
    await db
      .promise()
      .query(
        `Update tbl_user SET username = "${username}", password = "${password}" where id = ${id} `
      );
    res.status(200).json({ msg: 'Successfully Updated' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: `An error has occured` });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.promise().query(`DELETE FROM tbl_user WHERE id = ${id}`);
    res.status(200).json({ msg: 'Successfully Deleted' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: `An error has occured` });
  }
});

module.exports = router;
