import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";


function Searchbar() {
    const [word, setWord] = useState('good');
    const fetchSynonyms = () => {
        return axios.get(`https://api.datamuse.com/words?ml=${word}`)
    }; 

    const [enabled, setEnabled] = useState(false);
    const { data, isIdle, isLoading, isError, error, refetch } = useQuery('synonyms', fetchSynonyms,
    {
        enabled
    });

    if(isIdle) {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setEnabled(true);
                }}>
                    <input 
                        type="text"
                        placeholder="Enter word here..."
                        name="wordSearchbar"
                        onChange={(e) => setWord(e.target.value)}
                        value={word}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }

    return (
        <>
            {data && 
                <Results 
                    data={data.data} 
                    isLoading={isLoading}
                    isError={isError}
                    error={error}
                />
            }
        </>
     );
}

export default Searchbar;