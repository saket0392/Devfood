const express = require('express');
const router = express.Router();

router.post('/fooddata',(req,res)=>{
    try {
        res.send([global.fooditems,global.foodcategory])
    } catch (error) {
        res.send('Server Error')
    }
})

module.exports = router;