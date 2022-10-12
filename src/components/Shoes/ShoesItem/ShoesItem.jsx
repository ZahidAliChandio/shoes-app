import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './ShoesItem.module.css'
import ShoesItemForm from './ShoesItemForm';
const ShoesItem = (props) => {

    const cartCtx = useContext(CartContext);

    let price = parseFloat(props.price);
    price = `$${price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.onItemAdd({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }
    return (
        <li className={classes.shoe}>
            <div className='align-left'>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <ShoesItemForm id={props.id} onAddToCart={addToCartHandler} />
        </li>
    );
}
export default ShoesItem;