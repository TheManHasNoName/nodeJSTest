const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

//GETS ALL POSTS
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

module.exports = router;