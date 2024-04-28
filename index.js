const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

// emran
// wMg7Ij3aprLkn4v0

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://emran:wMg7Ij3aprLkn4v0@cluster0.niwwhqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri = "mongodb+srv://<username>:<password>@cluster0.niwwhqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('jute wooden server is running')
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})