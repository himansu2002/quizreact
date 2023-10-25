function Quizresult({result,retry}){
    return(
        <div className="result-screen">
            <h2>result : {result.percentage}%</h2>
            <p>selected {result.correct} correct options out of {result.total} questions.</p>
            <button onClick={retry}>
                retry
            </button>
        </div>

    );

}
export default Quizresult;