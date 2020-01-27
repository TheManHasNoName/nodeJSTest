const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

//GET ALL POSTS
router.get('/',  async (req, res) => {
    //res.send('This is a post request')
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(e) {
        res.json({ message: e })
    }
})


router.get('/test', (req, res) => {
    res.send('This is now `/post/test`')
})

//SUBMITS A POST
router.post('/', async (req, res) => {
    console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch (err) {
        res.json({ message: err })
    }

})

//FINDS A POST
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post);
    } catch (e) {
        res.json({ message: e })
    }
})

//delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
    }catch (e){
        res.json({ message: e })
    }
})

//update post
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {$set: { title: req.body.title }
        })
        res.json(updatedPost)
    } catch (e){
        res.json({ message: err })
    }
})

module.exports = router;