import proposingGif from "./gif/proposal.gif"
import cryingGif from "./gif/crying.gif"
import kissingGif from "./gif/kiss.gif"
import React from "react"
import './App.css';

function App() {
  const [noCount, setNoCount] = React.useState(1)
  const [wordSelect, setWordSelect] = React.useState(0)
  const [yesIsSelected, setYesIsSelected] = React.useState(false)

  const words = [
    "No",
    "Sure?",
    "Really really sure?",
    "Hmmmm",
    "HMMMMMMMMMMMMMMMMMM",
    "Ayaw talaga?",
    "Grabe naman, tinatanggihan mo ko :'(",
    "Sure na?",
    "Sure na sure na?",
    "Sure na sure na sure na?"
  ]

  React.useEffect(() => {
    if (noCount < 10) {
      setWordSelect(noCount - 1)
    } else {
      setWordSelect(9)
    }
  }, [noCount])

  return (
    <div className="App">
      {!yesIsSelected && 
        <>
          <img src={noCount < 2 ? proposingGif : cryingGif}></img>
          <div className="text">Will you be my Valentine?</div>
          <div className='buttonContainer'>
            <button onClick={() => setYesIsSelected(true)} style={{ fontSize: `${noCount}vw`}} className="yesButton">Yes</button>
            <button onClick={() => setNoCount(prevState => prevState + 1)} className="noButton">{words[wordSelect]}</button>
          </div>
        </>
      }
      
      {yesIsSelected && 
        <>
          <img src={kissingGif}></img>
          <div className="text">Okies, let's eat sa 14. I love you ❤️</div>
        </>
      }
    </div>
  );
}

export default App;
