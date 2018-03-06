const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const mysql = require('./server/mysql.js');

const async = require('async');//异步转同步

router.post('/page/one', (req, res) => {
    mysql.query("select * from project where name=? and age=?", [req.body.name, req.body.age], (err, data) => {
        if (!err) {
            res.json('查询成功');
        }
    })
});