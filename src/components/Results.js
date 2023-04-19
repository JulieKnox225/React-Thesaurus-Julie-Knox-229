import { nanoid } from 'nanoid';

function Results({ data, isLoading, isError, error }) {

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>{error}</h2>

    return ( 
        <div>
            {data.length !== 0 &&
                <div className='Results--container'>
                    {data.map(obj => <p key={nanoid()} className='Results--word'>{obj.word}</p>)}
                </div>
            }
            {data.length === 0 &&
                <h2 className='Results--no-word'>That word is not in our database. Please try again.</h2>
            }
        </div>
     );
}

export default Results;