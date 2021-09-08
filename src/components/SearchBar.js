import React, { useState} from 'react'


// https://api.github.com/search/repositories?q=${inputText}
function SearchBar(props) {

    // Use state for searh text and list of repos
    const [inputText, setInputText] = useState('')
    const [repositories, setRepositories] = useState([])

    const handleChange = (e)=>{
        setInputText(e.target.value);
    }

    function retApis(){
        fetch(`https://api.github.com/search/repositories?q=${inputText}`)
        .then(res => res.json())
        .then(data => {
            setRepositories(data.items);
        })
    } 


    // Function for pressing enter key after writing the search text
    const tringgerEnterButton = (e)=>{
        if( e.key === 'Enter'){
            retApis();
        }
    }

    // Function to react on click to search button
    const triggerSearchBtn =  ()=>{
        retApis();     
    }

    return (
        <>
         <div className="container modifiedContainer my-3">
             <div className="searchContainer">
                <input className="searchBox my-auto" value={inputText} onChange={handleChange} onKeyDown={tringgerEnterButton} type="search" name="SearchQuery" id="seachBox" placeholder="Search repos here..." />    
                <button type="submit" className="btn-sm btn btn-primary mx-3" onClick={triggerSearchBtn}>Search</button>
             </div>
             <p className={`my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{inputText.length !== 0 ? `Search Result for: ${inputText}` : ''}</p>
        </div>

        {
            inputText.length === 0 ? <div></div> :        
            <div className="repoTile">
 
            {repositories.map(repo =>{

                return (
                    <div className="repoContainer" key={repo.id}>
                    <img src={`${repo.owner.avatar_url}`} alt="After We Fell" />
                    <div className="repoContainer-info">
                        <div className="repositoryName">
                            <h3>{repo.name}</h3>
                        </div>

                        <div className="repositoryForks">
                            <span className="green">Forks: {repo.forks}</span>
                        </div>
                    </div>
    
                    <div className="overview">
                        <h4>{repo.description}</h4>
                        <a className="repoLinkBtn" rel="noreferrer" target="_blank" href={`${repo.owner.html_url}`}>Repo Link</a>
                        
                    </div>      
                    </div>                      
                )
            }) 
            }
            </div>  
        }

        </>
    )
}

export default SearchBar;
