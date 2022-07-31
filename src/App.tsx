import axios from "axios";
import { useState } from "react";
import "./App.css";
import charDetailed from "./interfaces";

function App() {
  const [charName, setCharName] = useState("")
  const [charInfo, setCharInfo] = useState<charDetailed | undefined>(undefined)
  const GENSHIN_URL = "https://api.genshin.dev/"

  return (
    <div>
      <h1>Genshin Impact</h1>
      <label>Which Character are you looking for? </label> <br />
      <input type="text" id="char-name" name="char-name" onChange={e => { setCharName(e.target.value) }} />
      <button onClick={searchChar}>Search</button>

      <p>You have searched for {charName}</p>
      {charInfo?.name}
      {charInfo?.affiliation}

    </div>
  )

  function searchChar() {
    axios.get(GENSHIN_URL + "characters/" + charName).then((res => {
      console.log(JSON.parse(JSON.stringify(res.data)))
      setCharInfo(JSON.parse(JSON.stringify(res.data)))
    }))
  }



}


export default App;