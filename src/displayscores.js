export default function DisplatScoreBoard() {
    const name = "Gusi";
    return (
        <div className="scoreboard">
            <h2>Scoreboard for { name}</h2>
            <div>
                <label>score</label>
                <p className="score">0</p>
            </div>
            <div>
                <label>Highest Score</label>
                <p>37</p>
            </div>
        </div>
        );
}