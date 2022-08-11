
import './App.css'
import Card_Poke from './componets/Card_Poke'
import Hero_Nav from './componets/Hero_Nav'
import useApi from './hooks/useApi'

function App() {
  
  const url = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`
    
  const data = useApi(url)

  
  //console.log(data)
  
  return (
    <div className="App">
       <Hero_Nav/>
      <div className="card_container">
         { data && 
          data.results.map(poke =>(
          <Card_Poke poke={poke}
         />
         ))
        } 
      
      </div>
    </div>
  )
}

export default App
