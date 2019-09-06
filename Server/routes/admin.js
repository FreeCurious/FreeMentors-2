const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
      message: 'Getting all the admins of the community'
    });
});

module.exports = router;