const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next)=>{
     User.find({email: req.body.email })
     .exec()
     .then(user => {
          if(user.length >= 1){
               return res.status(409).json({
                    message: 'This Email Already Exists'
               }); 
          } else {
               bcryptjs.hash(req.body.password, 10,(err, hash)=> {
                    if(err){
                         return res.status(500).json({
                              error: err
                         });
                    } else {
                         const user = new User({
                              email: req.body.email,
                              password: hash 
                              });
                      user
                      .save()
                      .then(result => {
                           console.log(result);
                           res.status(201).json({
                                message: 'User created successfully'
                           });
                      })
                      .catch(err => {
                           res.status(500).json({
                                error: err
                           })
                      })
                      ;   
                    } 
               });
               
          }
     })

     

});

router.patch('/:userId', (req, res, next) => {
      const userId = {
           Token: req.body.token 
      };
      const id = req.params.userId;
      const status = req.params.status;
      res.status(200).json({
            message: 'User account changed to mentor',
            id: id,
            newMentor: id, status
            
        });
     }
)

module.exports = router;