'use strict';
module.exports = function(app) {
  var blog = require('../controller/blogController');
  
     app.route('/addArticle').post(blog.addArticle);
     app.route('/list').get(blog.list);
     app.route('/articleDetail/:id').get(blog.articleDetail);
     app.route('/commentList/:id').get(blog.commentList);
     app.route('/comment').post(blog.comment);
     app.route('/reply').post(blog.reply);
    };
   