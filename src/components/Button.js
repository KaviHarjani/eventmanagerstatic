const Button = ({color,text, onClick}) => {
    return <button style={{background :color }} onClick={onClick} className="btn">{text}</button>
}

Button.defaultProps = {
    color:'steelblue',
    text:'Add',
}

export default Button
