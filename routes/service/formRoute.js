const express = require('express')
const router = express.Router()
var multer  = require('multer')
const Response = require('../../models/Response')
const {FirebaseUpload} = require('../../utils/uploadFile')

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: multer.memoryStorage(), fileFilter: fileFilter })

router.post("/form",upload.single('upload'),async (req,res)=>{
    const {name,radio} = req.body

    FirebaseUpload(req.file,'paymentImages').then(async (url) =>{
        const newResponse = new Response({
            name: name,
            radio: radio,
            imageUrl: url
        })
        await newResponse.save()
        res.redirect('/form')
    }).catch((err)=>{
        res.status(200).json({
            "err": err
        })
        res.end();
    });
})

router.get("/form",(req,res)=>{
    Response.find({},(err,data)=> {
        if(err) res.send(err) 
        else res.send(data)
    })
})

module.exports = router