exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        name: 'FRO',
        score: '18',
        date: '11/14/2000'
      },
      {
        name: 'ACB',
        score: '38',
        date: '11/14/1985'
      },
      {
        name: 'OLI',
        score: '26',
        date: '03/11/2011'
      },
      {
        name: 'KAT',
        score: '18',
        date: '10/4/2012'
      },
      {
        name: 'REB',
        score: '76',
        date: '08/09/1972'
      }
    ])
  }
}