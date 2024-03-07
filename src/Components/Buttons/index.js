const Button = (props) =>{
    return(
       <button onClick={props.click}>{props.content}</button>     
    )
}

export default Button