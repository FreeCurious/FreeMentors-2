const express = require('express');
const router = express.Router();

router.post('/', (req, res, next)=>{
    const user = {
        name: req.body.name,
        firstname: req.body.firstname 
    };
    res.status(200).json({
       message: 'User created successfully',
       createdUser: user
    });
});

router.get('/', (req, res, next)=>{
    res.status(200).json({
       message: 'User data retrieved successfully'
    });
});




module.exports = router;
