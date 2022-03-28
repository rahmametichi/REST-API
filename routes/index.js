const User = require('../models/User');

const router = require('express').Router()


router.post('/createUser' , async(req,res)=>{

try {
const {name,phone,email} = req.body;
const user = await User.create({name,phone,email})
res.status(200)
    .json({status : true , message : "user created" , data : user})
}
catch(err) {

    res.status(500).json({status : false , message : err})
}
})

router.get('/userList', async (req , res)=>{
    try {
    const userList = await User.find({})
    res.status(200)
        .json({status : true , message : "user List" , data : userList})

                  }
    catch(err) {

        res.status(500).json({status : false , message : err})
    }
})

router.delete('/deleteUser/:id' , async(req,res)=>{
    try {
        const {id} = req.params;
        let user = await User.findById(id)
        if (user) {
            await User.findByIdAndDelete(id)
                res.status(200)
                .json({status :true , message : "user deleted"})

        }
        else {
            res.status(404)
            .json({status : true , message :"Not Found"} )

        }

           }
    catch(err) {
        res.status(500).json({status : false , message : err})
    }

router.put('/editUser/:id' , async ( req , res) => {
    try {
        const {id} = req.params;
        let user = await User.findById(id)
        if (user) {
            await User.findByIdAndUpdate(id ,{ ...req.body })
             user = await User.findById(id)
                res.status(200)
                .json({status :true , message : "user updated" , data : user})

                 }
        else {
            res.status(404).json({status : true , message : 'Not Found'})

        }
    }
    catch(err){
        res.status(500).json({status : false , message : err})

    }
})

})

module.exports = router