import React, { useState } from 'react'; 
 
function App() { 
  const [searchText, setSearchText] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 
 
  const handleSearch = async () => { 
    const response = await fetch(`https://api.example.com/search?query=${searchText}`); 
    const data = await response.json(); 
    setSearchResults(data.results); 
  }; 
 
  return ( 
    <div> 
      <h1>Heathga Aloqador UI</h1> 
      <div> 
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} /> 
        <button onClick={handleSearch}>Qidirish</button> 
      </div> 
      <div> 
        {searchResults.length === 0 && <p>Hech narsa topilmadi</p>} 
        {searchResults.map((result) => ( 
          <div key={result.id}> 
            <h2>{result.title}</h2> 
            <p>{result.description}</p> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default App;