const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Comments } = require('../models/comments');

// => localhost:3000/comments/list
router.get('/list', (req, res) => {
    Comments.find((err, results) => {
        if(!err){
            res.send(results);
        }
        else{
            console.log('Error in retrieving comments: '+JSON.stringify(err, undefined, 2));
        }
    })
});

// => localhost:3000/comments/list/:id
router.get('/list/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No records with id: ${req.params.id}`);
    }

    Comments.findById(req.params.id, (err, results) => {
        if(!err){
            res.send(results);
        }
        else{
            console.log('Error in retrieving comment: '+JSON.stringify(err, undefined, 2));
        }
    })
});

// => localhost:3000/comments/list
router.post('/list', (req, res) => {
    var comment = new Comments({
        recipeId: req.body.recipeId,
        commentText: req.body.commentText,
        updatedAt: req.body.updatedAt
    });
    comment.save((err, result) => {
        if(!err){
            res.send(result);
        }
        else{
            console.log('Error in saving comment: '+JSON.stringify(err, undefined, 2));
        }
    })
});

// => localhost:3000/comments/list/:id
router.put('/list/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No records with id: ${req.params.id}`);
    }
    var comment = {
        recipeId: req.body.recipeId,
        commentText: req.body.commentText,
        updatedAt: req.body.updatedAt
    };
    Comments.findByIdAndUpdate(req.params.id, {$set:comment}, {new:true}, (err, result) => {
        if(!err){
            res.send(result);
        }
        else{
            console.log('Error in updating comment: '+JSON.stringify(err, undefined, 2));
        }
    })
});

// => localhost:3000/comments/list/:id
router.delete('/list/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No records with id: ${req.params.id}`);
    }
    Comments.findByIdAndDelete(req.params.id, (err, result) => {
        if(!err){
            res.send(result);
        }
        else{
            console.log('Error in deleting comment: '+JSON.stringify(err, undefined, 2));
        }
    })
});

module.exports = router;