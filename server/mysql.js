const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 1000,
    host: 'localhost',
    user: 'root',
    password: 'lhhzz335',
    database: 'project'
})//创建连接池
function query(sql, arr, fn) {
    pool.getConnection((err, con) => {
        con.query(sql, arr, (err, res) => {
            con.release();//释放连接
            fn(err, res);
        })
    });
}

module.exports = {
    query: query
};