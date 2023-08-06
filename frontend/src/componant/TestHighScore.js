
let data = ([
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

function HighScore(props, data) {
    console.log(props, 'new Goal')
      
    return (
        <div className="highScore">
         <h3>Game Over</h3>
        <p>Your Score: {props.score}</p>

    {/* A function that will show scores of last 30 days
    then displays a table with the scores from highest to lowest */}
const TableFromObject = ({ data }) => {
  const tableRows = Object.entries(data).map(([key, name, score, date]) => (
    <tr key={key}>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};
        </div>
    )
}

export default HighScore
