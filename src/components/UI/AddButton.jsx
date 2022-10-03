import classes from './Button.module.css'
const Button = (props) => {
    return (
        <button
            type={props.type || 'submit'}
            className={classes['form-button']}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default Button;