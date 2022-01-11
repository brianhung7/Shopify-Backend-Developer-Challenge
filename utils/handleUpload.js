// const bucketS3 = require('../config/aws.connection')
const fs = require('fs');
const util = require('util');
const removeFile = util.promisify(fs.unlink);

const handleUploadFile = async (req, res, next) => {
    try {
        const file = req.file;

        // commented out to run locally, uncomment to use with AWS S3
        // const result = await bucketS3.uploadFile(file);
        // await removeFile(file.path);
        // req.body.image = result.Location;

        // uncomment to run local, comment to use AWS S3
        req.body.image = file.path
        
        next();
    } catch (error) {
        const context ={
            error,
        };
        return res.render("new", context);
    }
}

module.exports = handleUploadFile;