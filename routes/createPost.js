const express = require('express');
const router = express.Router();
const firestore = require ("firebase/firestore");
const db = firestore.getFirestore();

const submitForm =`
<form action="/create/submit">
<label> Title
    <input type="text" name="postTitle" />
</label>
<label> Text
    <input type="text" name="postText" />
</label>
<label> Author
    <input type="text" name="author" />
</label>
<button type="submit">Submit</button>
</form>
`;


router.get('/', (req, res) => {
res.send(submitForm)
});


router.get('/submit', (req, res) => {
    console.log(req.params)
    const queryParams = req.query
    const title = queryParams.postTitle;
    const text = queryParams.postText;
    const author = queryParams.author;


const id=title.replace(/\s+/g, "-").toLowerCase();


const setBlogPost = firestore.setDoc(
    firestore.doc(db, "posts", id ),
    {
        postTitle: title,
        postText: text,
        author: author,
    });``


setBlogPost
.then(() => {
    res.send(`
    <h1>Thanks</h1>
    <p><a href="/create">Submit another response</a>.</p>
    `);
})
.catch((error) => {
console.warn(error);
res.send(`Error submitting: $(error.toString()}`);
});

});

module.exports = router;