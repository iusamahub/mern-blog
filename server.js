const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
// const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }))

const url = 'mongodb://127.0.0.1:27017/mernblog';
const client = new MongoClient(url);
// console.log(client)

// const url = 'mongodb://localhost:27017'
// const dbName = 'mernblog'
// let db

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err)

//   // Storing a reference to the database so you can use it later
//   db = client.db(dbName)
//   console.log(`Connected MongoDB: ${url}`)
//   console.log(`Database: ${dbName}`)
// })

app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        console.log(articleName);
        const conn = await client.connect();
        // console.log(conn)
        client.db('mernblog');
        const articleInfo = await db.collection('articles')
        console.log(db.collection)

        res.status(200).json(articleInfo);
        client.close();
    } catch (error) {
        res.status(500).json({message: "ERROR", error});
    }
});



// const url = 'mongodb://localhost:27017/mernblog';
// mongoose.connect(url, { useNewUrlParser: true })

// const db = mongoose.connection
// db.once('open', _ => {
//   console.log('Database connected:', url)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })

app.listen(PORT, () => console.log("Server is listening at PORT 8000"))