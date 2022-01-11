# Shopify-Backend-Developer-Challenge
Brian Pham's Submission for Shopify's Backend Developer Challenge

## Getting Started

1. ```npm install```  
2. You will also need to create a ```.env``` file on the top level directory, on the same level as ```server.js```
3. Inside the ```.env``` file please copy and paste the following demo keys and save

4. ```npm start``` and go to ```http://localhost:4000/```


## Challenge Info
<a href="http://shopifybackendbrian.herokuapp.com/">View the Live Site here</a>  

Shopify's Backend Developer Challenge prompt was to create CRUD functionality to allow creation, editing, deletion, and viewing of inventory/products.  
Step 2 was to choose an additional feature to implement of which I chose "Allow image uploads AND store image with generated thumbnails" which I completed using the multer middleware for handling multipart/form-data as well as Amazon S3 Buckets for file storage. Application was built out using Node.js, MongoDB and Atlas for database storage, and Express.  
Thankfully styling/css was specifically mentioned as not being considered as a factor for this challenge. :)

## Technologies
Javascript, Node, Express, MongoDB, Mongoose, Atlas, Heroku, AWS S3 Buckets
