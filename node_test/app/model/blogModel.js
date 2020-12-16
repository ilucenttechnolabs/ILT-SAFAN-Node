'user strict';
var sql = require('./db.js');

var blogModel = function (task) {
    
};

blogModel.create = function (data, result) {
    sql.query("INSERT INTO article SET ?", [data], function (err, res) {

        if (err) {
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};
blogModel.createComment = function (data, result) {
   var s= sql.query("INSERT INTO comments SET ?", [data], function (err, res) {
    // console.log(s.sql);
        if (err) {
            result(err, null);
        } else {
            // result(null, res.insertId);
            sql.query("SELECT * FROM comments where id = ?",res.insertId,  function (err, res) {

                if (err) {
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
        }
    });
};
blogModel.list = function (offset,limit, result) {
    sql.query("SELECT * FROM article limit ?, ?", [offset,limit], function (err, res) {
       
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
blogModel.getArticleCount = function (result) {
    sql.query("SELECT count(id)as total FROM article",  function (err, res) {

        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
blogModel.findbyid = function (id, result) {
    sql.query("SELECT * FROM article where id = ?",id,  function (err, res) {

        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
blogModel.commentList = function (id, result) {
    sql.query("SELECT * FROM comments where article_id = ? and parant_id IS NULL",id,  function (err, res) {

        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
blogModel.replyList = function (id,parant_id, result) {
   var s= sql.query("SELECT * FROM comments where article_id = ? and parant_id = ? and parant_id IS NOT NULL",[id,parant_id],  function (err, res) {
console.log(s.sql)
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
module.exports = blogModel;