const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');

const PORT = process.env.PORT || 8000;

// app.use(express.json({ extended: false }))

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'mernblog';

// app.get('/api/articles/:name', async (req, res) => {
//     try {
//         const articleName = req.params.name;
//         console.log(articleName);
//         const conn = await client.connect();
//         // console.log(conn)
//         client.db('mernblog');
//         const articleInfo = await db.collection('articles')
//         console.log(db.collection)

//         res.status(200).json(articleInfo);
//         client.close();
//     } catch (error) {
//         res.status(500).json({message: "ERROR", error});
//     }
// });


app.listen(PORT, () => console.log("Server is listening at PORT 8000"))

app.get('/api/articles/:name',  async (req, res) => {
    let result=  await client.connect();
    let db =result.db(database);
    let collection = db.collection('articles');
    let response = await collection.find({});
    console.log(response);
})

// getdata()