'use strict';

var Blog = require('../model/blogModel.js');
var common_function = require('../common/common_function.js');
var async = require('async');
const { Validator } = require('node-input-validator');

exports.addArticle = async function (req, res, next) {
    const v = await new Validator(req.body, {
        nickname: 'required|minLength:3',
        title: 'required|minLength:3',
        content: 'required|minLength:10',
    });
    const matched = await v.check();
    if (!matched) {
        res.status(200).send({ error: true, msg: 'All mandatory fiels are required!', data: v.errors })
    } else {
        var addArray = {
            nickname: req.body.nickname,
            title: req.body.title,
            content: req.body.content
        }
        Blog.create(addArray, function (err, response) {
            if (err) {
                res.status(200).send({ error: true, msg: 'Something went wrong!' });
            } else {
                res.status(200).send({ error: false, msg: 'Article created successfully!' });
            }

        });
    }

};
exports.comment = async function (req, res, next) {
    const v = await new Validator(req.body, {
        nickname: 'required|minLength:3',
        article_id: 'required|integer',
        content: 'required|minLength:10',
    });
    const matched = await v.check();
    if (!matched) {
        res.status(200).send({ error: true, msg: 'All mandatory fiels are required!', data: v.errors })
    } else {
        var addArray = {
            nickname: req.body.nickname,
            article_id: req.body.article_id,
            content: req.body.content
        }
        Blog.createComment(addArray, function (err, response) {
            if (err) {
                res.status(200).send({ error: true, msg: 'Something went wrong!' });
            } else {
                res.status(200).send({ error: false, msg: 'Comment submitted successfully!' });
            }

        });
    }

};
exports.reply = async function (req, res, next) {
    const v = await new Validator(req.body, {
        nickname: 'required|minLength:3',
        article_id: 'required|integer',
        comment_id: 'required|integer',
        content: 'required|minLength:10',
    });
    const matched = await v.check();
    if (!matched) {
        res.status(200).send({ error: true, msg: 'All mandatory fiels are required!', data: v.errors })
    } else {
        var addArray = {
            nickname: req.body.nickname,
            article_id: req.body.article_id,
            parant_id: req.body.comment_id,
            content: req.body.content
        }
        Blog.createComment(addArray, function (err, response) {
            if (err) {
                res.status(200).send({ error: true, msg: 'Something went wrong!' });
            } else {
                res.status(200).send({ error: false, msg: 'Comment submitted successfully!' });
            }

        });
    }

};
exports.commentList = async function (req, res, next) {
    const v = await new Validator(req.params, {
        id: 'required|integer'
    });
    const matched = await v.check();
    if (!matched) {
        res.status(200).send({ error: true, msg: 'All mandatory fiels are required!', data: v.errors })
    } else {
        var id = req.params.id;
        Blog.commentList(id, function (err, comments) {
            if (err) {
                res.status(200).send({ error: true, msg: 'Something went wrong2!' });
            } else {
                var comentList = [];
                async.eachSeries(comments, function (commentsData, callback) {
                    Blog.replyList(id,commentsData.id, function (err, reply) {
                        if (err) {
                            res.status(200).send({ error: true, msg: 'Something went wrong2!' });
                        } else {
                            commentsData.replyList = reply;
                            comentList.push(commentsData);
                            callback();
                        }
                    });
                    
                }, function (err, results) {
                    if (err) {
                        res.status(200).send({ error: true, msg: 'Something went wrong2!' });
                    } else {
                        res.status(200).send({ error: false, msg: 'All Comments', data: comentList });
                    }
        
        
                });
                // res.status(200).send({ error: false, msg: 'All Comments', data: comments });
                
            }

        });
    }
};
exports.list = async function (req, res, next) {
    const v = await new Validator(req.query, {
        page: 'required|integer'
    });
    const matched = await v.check();
    if (!matched) {
        res.status(200).send({ error: true, msg: 'All mandatory fiels are required!', data: v.errors })
    } else {
        var page = req.query.page;
        Blog.getArticleCount(function (err, response) {
            if (err) {
                res.status(200).send({ error: true, msg: 'Something went wrong1!' });
            } else {
                var count = response[0].total;
                var limit = 20;
                var offset = 0;
                if (page > 1) {
                    var offset = (page - 1) * limit;
                }

                var totalPages = Math.ceil(count / limit);
                // console.log("totalPages:"+totalPages);
                var nextPage = 1;
                if (totalPages == page || totalPages < page) {
                    nextPage = 1;

                } else {
                    nextPage = parseInt(page) + parseInt(1)
                }

                Blog.list(offset, limit, function (err, listArticle) {
                    if (err) {
                        res.status(200).send({ error: true, msg: 'Something went wrong2!' });
                    } else {
                        res.status(200).send({ error: false, msg: 'All Aricles', TotalPages: totalPages, NextPage: nextPage, data: listArticle });
                    }

                });
            }

        });

    }

};
exports.articleDetail = async function (req, res, next) {
    const v = await new Validator(req.params, {
        id: 'required|integer'
    });
    const matched = await v.check();
    if (!matched) {
        res.status(200).send({ error: true, msg: 'All mandatory fiels are required!', data: v.errors })
    } else {
        var id = req.params.id;
        Blog.findbyid(id, function (err, article) {
            if (err) {
                res.status(200).send({ error: true, msg: 'Something went wrong2!' });
            } else {
                res.status(200).send({ error: false, msg: 'Aricle Detail', data: article[0] });
            }

        });
    }
};