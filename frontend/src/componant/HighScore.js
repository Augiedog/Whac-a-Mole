
function HighScore(props) {
    console.log(props, 'new Goal')
    console.log(props.topscore, 'topscore object')

    const TableFromObject = ({ data }) => {
        const tableRows = Object.entries(data).map(([key, name, score, date]) => (
            <tr key={key}>
                <td>{name}</td>
                <td>{score}</td>
            </tr>
        ));

        return (
            <div className="highScore">
                <h3>Game Over</h3>
                <p>Your Score: {props.score}</p>
                <table>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div className="highScore">
            <h3>Game Over</h3>
            <p>Your Score: {props.score}</p>
            {TableFromObject()}
        </div>
    )
}

export default HighScore
