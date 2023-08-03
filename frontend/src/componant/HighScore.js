
function HighScore(props) {
    console.log(props, 'new Goal')
    return (
        <div className="highScore">
         <h3>Game Over</h3>
        <p>Your Score: {props.score}</p>

    {/* A function that will show scores of last 30 days
    then displays a table with the scores from highest to lowest */}
const TableFromObject = ({ data }) => {
  const tableRows = Object.entries(data).map(([key, value]) => (
    <tr key={key}>
      <td>{key}</td>
      <td>{value}</td>
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
        {/* <p>{props.topScore.name}</p>
        <p>{props.topScore.score}</p> */}
        {/* <h4>Error: {props.error}</h4> */}
        </div>
    )
}

export default HighScore
