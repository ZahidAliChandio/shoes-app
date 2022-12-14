import { useContext } from "react";
import CartContext from '../../store/cart-context'
import Modal from "../UI/Modal";
import CartItem from './CartItem'
import Button from '../UI/Button'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const AddItemHandler = (item) => {
        cartCtx.onItemAdd({ ...item, amount: 1 })
    }
    const removeItemHandler = (id) => {
        cartCtx.onItemRemove(id);
    }
    const cartItems = (<ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
            return (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onItemAdd={AddItemHandler.bind(null, item)}
                    onItemRemove={removeItemHandler.bind(null, item.id)}
                />
            )
        })}
    </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button className='order' onClick={props.onClose}>Close</Button>
                {hasItems && <Button className={classes.order}>Order</Button>}
            </div>
        </Modal>
    )
}
export default Cart;