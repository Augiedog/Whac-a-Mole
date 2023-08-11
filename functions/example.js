exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        "_id": "64c9df6976e1feb46b8c6f0a",
        "name": "ACB", "score": "37"
      },
      {
        "_id": "64c9e0d376e1feb46b8c6f0c",
        "name": "ERA", "score": "49"
      },
      {
        "_id": "64c9e0eb76e1feb46b8c6f0d",
        "name": "ACB", "score": "14"
      },
      {
        "_id": "64c9e0fd76e1feb46b8c6f0e",
        "name": "REB", "score": "12"
      },
      {
        "_id": "64c9e10b76e1feb46b8c6f0f",
        "name": "KAT", "score": "56"
      },
      {
        "_id": "64c9e11576e1feb46b8c6f10",
        "name": "OLI", "score": "32"
      },
      {
        "_id": "64d28655c33cdfbd6ce35e12",
        "name": "REB", "score": "500",
        "date": "07/15/2023"
      }
    ])
  }
}