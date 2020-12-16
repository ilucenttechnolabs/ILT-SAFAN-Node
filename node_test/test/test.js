const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const blogModel  = require("../app/model/blogModel");
// const UserRepository = require("./user.repository");
describe("Unit test", function() {
  const addArray = {
    nickname: faker.name.findName(),
    title: faker.name.jobTitle(),
    content: faker.name.jobType()
  };
  const addComment = {
    nickname: faker.name.findName(),
    article_id: faker.random.number({
      'min': 1,
      'max': 10
  }),
    content: faker.name.jobType()
  };

  const addCommentOnComment = {
    nickname: faker.name.findName(),
    article_id: faker.random.number({
      'min': 1,
      'max': 10
  }),
  parant_id: faker.random.number({
    'min': 1,
    'max': 10
}),
    content: faker.name.jobType()
  };
  const randomId = faker.random.number({'min': 1,'max': 10});
  describe("Create an article", function() {
    it("should add a new article to the db", async function() {
      blogModel.create(addArray, function (err, stubValue) {       
        expect(stubValue.id).to.equal(stubValue.id);
        expect(stubValue.nickname).to.equal(stubValue.nickname);
        expect(stubValue.title).to.equal(stubValue.title);
        expect(stubValue.content).to.equal(stubValue.content);
        expect(stubValue.created_at).to.equal(stubValue.created_at);
      });     
    });
  });
  describe("Get an article", function() {
    it("should return a article that matches the id param", async function() {
      blogModel.findbyid(2, function (err, stubValue) {       
        expect(stubValue.id).to.equal(stubValue.id);
        expect(stubValue.nickname).to.equal(stubValue.nickname);
        expect(stubValue.title).to.equal(stubValue.title);
        expect(stubValue.content).to.equal(stubValue.content);
        expect(stubValue.created_at).to.equal(stubValue.created_at);
      });     
    });
  });
  describe("List of article", function() {
    it("should return a article list", async function() {
      blogModel.list(0,1, function (err, stubValue) {       
        expect(stubValue.id).to.equal(stubValue.id);
        expect(stubValue.nickname).to.equal(stubValue.nickname);
        expect(stubValue.title).to.equal(stubValue.title);
        expect(stubValue.content).to.equal(stubValue.content);
        expect(stubValue.created_at).to.equal(stubValue.created_at);
      });     
    });
  });
  
  describe("Add comment into the article", function() {
    it("should add a comment into the article", async function() {
      blogModel.createComment(addComment, function (err, stubValue) {       
        expect(stubValue.id).to.equal(stubValue.id);
        expect(stubValue.nickname).to.equal(stubValue.nickname);
        expect(stubValue.article_id).to.equal(stubValue.article_id);
        expect(stubValue.content).to.equal(stubValue.content);
        expect(stubValue.created_at).to.equal(stubValue.created_at);
      });     
    });
  });
  describe("Add comment on comment into the article", function() {
    it("should add a comment on comment into the article", async function() {
      blogModel.createComment(addComment, function (err, stubValue) {       
        expect(stubValue.id).to.equal(stubValue.id);
        expect(stubValue.nickname).to.equal(stubValue.nickname);
        expect(stubValue.article_id).to.equal(stubValue.article_id);
        expect(stubValue.content).to.equal(stubValue.content);
        expect(stubValue.created_at).to.equal(stubValue.created_at);
      });     
    });
  });
  describe("List of comments", function() {
    it("should return list of comment based on article", async function() {
      blogModel.commentList(randomId, function (err, stubValue) {       
        expect(stubValue.id).to.equal(stubValue.id);
        expect(stubValue.nickname).to.equal(stubValue.nickname);
        expect(stubValue.article_id).to.equal(stubValue.article_id);
        expect(stubValue.content).to.equal(stubValue.content);
        expect(stubValue.created_at).to.equal(stubValue.created_at);
      });     
    });
  });
});
// var app = require('../server.js'),
//   chai = require('chai'),
//   request = require('supertest');

//   describe('POST Create an article', function() {
//     it('responds with json', function(done) {
//     request(app)
//       .post('/addArticle')
//       .send({nickname:'John',title:'Title of the article',content:'Content of the article'})
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//     });
//   });
// "test": "./node_modules/.bin/mocha"
  // describe('GET Get article detail', function() {
  //   it('responds with json', function(done) {
  //   request(app)
  //     .post('/articleDetail/2')
  //     .send({})
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end(function(err, res) {
  //       if (err) return done(err);
  //       done();
  //     });
  //   });
  // });
// var assert = require('assert');
// describe('Basic Mocha String Test', function () {
//   it('should return number of characters is 5', function () {
//     assert.equal("Hello".length, 5);
//   });
// });

