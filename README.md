# Shopify-Backend-Developer-Challenge :shopping:
Brian Pham's Submission for Shopify's Backend Developer Challenge

## Getting Started :rocket:
In order to run the application locally you will need MongoDB which you can setup here https://docs.mongodb.com/manual/installation/

1. Clone the repository and run ```npm install```  
2. Be sure your MongoDB is running, Ubuntu command ```sudo service mongodb start```
3. ```npm start``` and go to ```http://localhost:4000/```

Alternatively <a href="http://shopifybackendbrian.herokuapp.com/">View the Live Site here</a> 

## Challenge Info 📓

Shopify's Backend Developer Challenge prompt was to create CRUD functionality to allow creation, editing, deletion, and viewing (reading) of inventory/products.  
Step 2 was to choose an additional feature to implement of which I chose "Allow image uploads AND store image with generated thumbnails" which I completed using the multer middleware for handling multipart/form-data as well as Amazon S3 Buckets for file storage. Application was built out using Node.js, MongoDB and Atlas for database storage, and Express.  
For the live deployed site on Heroku, I used AWS S3 buckets for file storage.  
The locally run version simply uses multer to upload the file to a folder in the project directory.  
Thankfully styling/css was specifically mentioned as not being considered as a factor for this challenge. :)

## Technologies 💻
Javascript, Node, Express, MongoDB, Mongoose, Atlas, Heroku, AWS S3 Buckets
