const AWS = require('aws-sdk');
require('dotenv').config();
const fs = require('fs');

const credentials = new AWS.EnvironmentCredentials('AWS');
AWS.config.credentials = credentials;

class BucketS3 {
    #s3
    #bucketName

    constructor() {
        this.#s3 = new AWS.S3()
        this.#bucketName = process.env.AWS_BUCKET_NAME
    }

    uploadFile(file) {
        const filePath = fs.createReadStream(file.path);
        const uploadParams = {
            Bucket: this.#bucketName,
            Body: 'hello world',
            Key: 'Hello.txt'
        }
        return this.#s3.upload(uploadParams).promise()
    }


}

const bucketTest = new BucketS3()
bucketTest.uploadFile().then((data) => console.log({data}))

module.exports = new BucketS3()