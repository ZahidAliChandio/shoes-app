import classes from './Button.module.css'
const Button = (props) => {
    return (
        <button className={classes[props.className]} onClick={props.onClick}
        style={{fontSize:(props.fontSize || '1.2rem')}}>{props.children}</button>
    )
}
export default Button;