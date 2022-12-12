import { MongoClient } from "mongodb";


const handler = async (req, res) => {
    const client = new MongoClient('mongodb+srv://ravelmiroirs:1234@cluster0.tz2uboa.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db('randomImg');
    const collection = db.collection('imgUrl')

    let documents = await collection.find({}).toArray();
    client.close();

    let documentsArr = documents.map(item=> item.url)
    let randomItem = documentsArr[Math.floor(Math.random()*documentsArr.length)];

    res.status(200).json(randomItem);

}

export default handler;