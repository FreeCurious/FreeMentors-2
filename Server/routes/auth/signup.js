const express = require('express');
const router = express.Router();

router.post('/', (req, res, next)=>{
    res.status(200).json({
       message: 'User created successfully'
    });
});

router.get('/', (req, res, next)=>{
    res.status(200).json({
       message: 'User data retrieved successfully'
    });
});




module.exports = router;
