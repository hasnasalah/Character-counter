import { use, useState } from 'react';
import { TextInput } from './component/TextInput/TextInput';
import { StatsDisplay } from './component/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './component/CharacterCounter/CharacterCounter';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [word,setWord]=useState(0);
  const [character,setCharacter]=useState(0);
  const [time,setTime]=useState("");
    const charCounter = CharacterCounter({
    minWords: 25,
    maxWords: 100,
    targetReadingTime: 2,
  });

  const handeleTextChange =(text:string)=>{
    setText(text);
      const word=charCounter.calculateWords(text);
   const character=charCounter.calculateCharacters(text);
    const time=charCounter.calculateTime(word);
        setTime(time);
       setCharacter(character);
      setWord(word);
  }
   
  
  return(
    <>
     <div>
      <TextInput  onTextChange={handeleTextChange}></TextInput>
     </div>
     <div>
      <StatsDisplay stats={{characterCount:character,wordCount:word,readingTime:time}}  />
       
     </div>
    </>
  )
}

export default App
