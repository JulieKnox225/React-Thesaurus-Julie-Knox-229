import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";


function Searchbar() {
    const [word, setWord] = useState('');
    const fetchSynonyms = () => {
        return axios.get(`https://api.datamuse.com/words?ml=${word}`)
    }; 

    const [placeholder, setPlaceholder] = useState('Enter word here...');

    const [enabled, setEnabled] = useState(false);
    const { data, isLoading, isError, error, refetch } = useQuery('synonyms', fetchSynonyms,
    {
        enabled
    });

    return (
        <>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    word.length !== 0 ? setEnabled(true) : setPlaceholder("Please enter word...");
                    refetch();
                }}>
                    <input 
                        type="text"
                        placeholder={placeholder}
                        name="wordSearchbar"
                        onChange={(e) => setWord(e.target.value)}
                        value={word}
                    />
                    <button>Search</button>
                </form>
            </div>
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