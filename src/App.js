import { useState } from "react";
import Button from "./Components/Buttons";
import Result from "./Components/Result";

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
        <div>
            <h1>
              Counter App
            </h1>
            <Result value={result}/>
           <Button content='Adicionar' click={add}/>
           <Button content='subtrair' click={sub}/>
           <Button click={restore}/>
        </div>
  )
}
export default Contador;