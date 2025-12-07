import type {StatsDisplayProps} from "../../types/index";
export function StatsDisplay({stats,showReadingTime=true}:StatsDisplayProps){
     const  {
        characterCount,wordCount,readingTime
     }=stats;

return (
<>
<div className="wraper">
<div className="statsDisplay">
    <div className="container">
<p>Characters</p>
<p className="count" >{characterCount}</p>
</div>
<div className="container">
<p>Words</p>
<p className="word">{wordCount}</p>
</div>
<div className="container">
<p>Reading Time</p>
{showReadingTime&&
<p  className="count">{readingTime}</p>}
</div>
</div>
<p >Min: 25 | Max: 100</p>
</div>
</>











)







}