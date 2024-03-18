import "./style.css"

const Button = (props) =>{
    return(
       <button onClick={props.click} className="button">{props.content}</button>     
    )
}

export default Button