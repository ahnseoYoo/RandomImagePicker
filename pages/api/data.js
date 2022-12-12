import { v4 } from "uuid";
import { MongoClient } from "mongodb";


const handler = async (req, res) => {
    const client = new MongoClient('mongodb+srv://ravelmiroirs:1234@cluster0.tz2uboa.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db('randomImg');
    const collection = db.collection('imgUrl')

    if(req.method === 'POST') {
        const username = req.body.username;
        const url = req.body.url;

        const newUrl = {
            id: v4(),
            username: username,
            url: url,
        };

        await collection.insertOne(newUrl);
        client.close();

        res.status(201).json({message: 'your URL has been successfully added', url: newUrl})
    } else if(req.method === 'DELETE') {
        let uuidToDelete = req.body.id;
        console.log('delete method')

        await collection.deleteMany({id: uuidToDelete});
        res.status(201).json({message: 'your URL has been successfully deleted', uuid: uuidToDelete})

    } else {
        let documents = await collection.find().toArray();
        client.close();

        res.status(200).json(documents)
    }

}

export default handler;