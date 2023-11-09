const express = require('express');
const router = express.Router();

const firestore = require ("firebase/firestore");

const db = firestore.getFirestore();

const indexRoute = require("./index");

router.get("/:id", (req, res) => {
    const postID = req.params.id;
    const postsQuery = firestore.getDoc(firestore.doc(db, "posts", postID));
   
    postsQuery.then((response) => {
            res.send(response.data());
    }).catch((error) => {
    console/log(error);
     res.send (error);
   });
});

module.exports = router;