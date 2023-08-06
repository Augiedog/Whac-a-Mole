
function HighScore(props) {
    console.log(props, 'new Goal')

    {/* A function that will show scores of last 30 days
    then displays a table with the scores from highest to lowest */}
    // const TableFromObject = ({ props.topScore }) => {
    //     const tableRows = Object.entries(data).map(([key, value]) => (
    //         <tr key={key}>
    //             <td>{key}</td>
    //             <td>{value}</td>
    //         </tr>
    //     ));

        return (
            <div className="highScore">
                <h3>Game Over</h3>
                <p>Your Score: {props.score}</p>
                {/* <table>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table> */}
            </div>
        )
    }

    export default HighScore
