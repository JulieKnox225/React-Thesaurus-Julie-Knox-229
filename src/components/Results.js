function Results({ data, isLoading, isError, error }) {

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>{error}</h2>

    return ( 
        <div>
            {data.map(obj => <p>{obj.word}</p>)}
        </div>
     );
}

export default Results;