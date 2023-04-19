function Results({ data, isLoading, isError, error }) {

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>{error}</h2>

    return ( 
        <div>
            {
                data.length !== 0 ? 
                    data.map(obj => <p>{obj.word}</p>) 
                    : <h2>That word is not in our database. Please try again.</h2>
            }
        </div>
     );
}

export default Results;