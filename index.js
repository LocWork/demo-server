const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const demoRoute = require('./routes/demo');
const demoDataBaseRoute = require('./routes/demo-with-database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//terminal -> npm start
//The uri is /api/{get || post || put || delete}
app.use('/api', demoRoute);

//database demo table tbl_user -> id: BIGINT| username and password: nvarchar(150)
app.use('/user', demoDataBaseRoute);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Connected at port ${PORT}`);
});
