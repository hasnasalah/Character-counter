
import type {CharacterCounterProps} from "../../types/index";
export function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime,
}: CharacterCounterProps) {
  
  const calculateCharacters = (text: string) => {
return text.length;
  };
 

  const calculateWords = (text: string) => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };
  const calculateTime=(words:number)=>{
    // i set that every 200 words are reading in one minute 
     const totalSeconds = Math.ceil(words * 60 / 300);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return (`${minutes}:${seconds}`)
  }

  return {
    minWords,
    maxWords,
    targetReadingTime,
    calculateCharacters,
    calculateWords,
    calculateTime,
  };
}