const express = require('express')

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('Project/index', {title: 'My Project'})
    
});

module.exports = router 