const { MongoClient } = require("mongodb")

exports.handler = async (event, context) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db("WHACK");
    const collection = db.collection("HIGH_SCORE");

    if (event.httpMethod === "GET") {
      const data = await collection.find({}).toArray();

      client.close();

      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } else if (event.httpMethod === "POST") {
      const requestBody = JSON.parse(event.body);
      try {
        if (!body.name) {
          // Default if one is not provided
          body.name= "ACB"
        }
        if (!body.score) {
          body.score = 0
        }
        if (!body.timeStamp) {
          body.timeStamp = new Date()
        }
        await HighScore.create(req.body)
        
      } catch (error) {
        console.log(error)
      }

      // Insert the data into the MongoDB collection.
      const result = await collection.insertOne(requestBody);

      client.close();

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Record saved successfully!" }),
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
      };
    }
  } catch (error) {
    console.error("Error accessing MongoDB: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
