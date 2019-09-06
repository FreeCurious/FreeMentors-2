const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
      message: 'Getting all the mentors of the community'
    });
});

router.get('/:mentorId', (req, res, next) => {
    const id = req.params.mentorId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special mentor',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You discovered an ordinary mentor',
            id: id
        });
    }
})

module.exports = router;