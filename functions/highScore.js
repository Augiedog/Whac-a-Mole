exports.handler = async function(event, context) {
  return {
      statusCode: 200,
      body: JSON.stringify({
        name: 'ACB',
        score: '37',
        date: '11/14/1985'
      })
  }
}