import type{TextInputProps} from "../../types/index";


export function TextInput({onTextChange,placeholder}:TextInputProps){
const hanedleOnTextChange=(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
 const text=event?.target.value;
 onTextChange(text);
}
placeholder="Start Typing your content here...";
return (
 <>

 <textarea  className ="textArea" placeholder={placeholder} onChange={hanedleOnTextChange}>

 </textarea>
 
 
 </>
);






}