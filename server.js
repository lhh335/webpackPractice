const express = require("express");
const app = express();

const path = require("path");


app.use(express.static(path.resolve(__dirname, "")));

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');

app.use('/', indexRouter);

/*登录页面*/
app.use('/login', loginRouter);

/*后台页面*/
app.use('/admin', adminRouter);
app.listen(9001);
process.on('uncaughtException', function (exception) {
    console.log('error');
});
