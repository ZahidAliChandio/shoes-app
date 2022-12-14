import { useRef, useState } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input'
import classes from './ShoesItemForm.module.css'

const ShoesItemForm = (props) => {
    const [amountIsValid, setAmoutIsValid] = useState(true);
    const amountInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;

        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmoutIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className="d-flex align-center">
                <h3>Amount </h3>
                <input
                    ref={amountInputRef}
                    id={`amount_ ${props.id}`} type='number'
                    min='1'
                    max='5'
                    step='1'
                    defaultValue='1'
                />
            </div>
            <div>
                <Button type="submit" fontSize='1rem'>+ Add</Button>
            </div>
        </form>
    )
};
export default ShoesItemForm;