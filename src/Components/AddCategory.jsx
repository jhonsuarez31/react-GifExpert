import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState('')
   const onInputChangue = (e) =>{
    setinputValue(e.target.value)
    return inputValue;
   } 

   const onSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length < 1 )return;
    //setCategories(categories=>[...categories, inputValue])
    onNewCategory(inputValue.trim())
    setinputValue('')
   
   }
   
    return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChangue }
        />
    </form>
  )
}
