const handleUploadFile = (req,res,next) => {
    const file = req.file
    return res.send({file})
}

module.exports = handleUploadFile;