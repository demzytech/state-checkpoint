import { useState } from "react"
import "./App.css"

function App() {
    const [person, setPerson] = useState({
      fullName: "Lionel Messi",
      bio:  "He is from Argentina. He plays as a right-winger for inter-miami.",
      imgSrc: "https://wallpapers.com/images/hd/messi-pictures-jzykf84saw6wbkd6.jpg",
      profession: "Footballer"
    });
    const [shows, setShows] = useState(false);

  return (
    <>
        <div>
          {shows
          ? (<h1>Welcome here</h1>)
          :(
             <div>
                <img className=" img" src={person.imgSrc} alt={person.fullName} />
                <h4>{person.fullName}</h4>
                <p>{person.bio}</p>
              </div> 
          )
        }        
         <div>
            <button onClick={() => setShows(!shows)}>Toggle Me</button>
         </div>
        </div>
    </>
  )
}

export default App
