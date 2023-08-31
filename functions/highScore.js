const { MongoClient } = require("mongodb");
// const HighScore = require("../models/highscore")

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
      // Perform the MongoDB query here (e.g., find with timeStamp < 30 days)
      const data = await collection.find({}).toArray();

      client.close();

      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } else if (event.httpMethod === "POST") {
      const requestBody = JSON.parse(event.body);
      // Perform any necessary validation on the requestBody
      // before inserting it into the database.
      try {
        if (!req.body.name) {
          // Default if one is not provided
          req.body.name= "ACB"
        }
        if (!req.body.score) {
          req.body.score = 0
        }
        if (!req.body.timeStamp) {
          req.body.timeStamp = Date.now()
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
