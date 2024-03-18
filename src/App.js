import { useState } from "react";
import Button from "./Components/Buttons";
import Result from "./Components/Result";
import './App.css'

const Contador =  () => {
  const [result, setResult] = useState(0)

  const add = () => {
      setResult(result+1)
  }
  const sub = () => {
    setResult(result-1)
}
const restore = () =>{
  setResult(0)
}
  return(
    <>
      <div className='component'>
        <h1>
          Counter App
        </h1>
        <div className="resultAndButtons">
          <Button content='Subtrair' click={sub} className='subButton'/>
          <Result value={result}/>
          <Button content='Adicionar' click={add} className='addButton'/>
        </div>
          <Button click={restore} content ='Resetar'/>
      </div>
    </>
        
  )
}
export default Contador;