exports.handler = async function(event, context) {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `High Score Api!! ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
  

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// const handler = async (event) => {
  

// module.exports = { handler }

