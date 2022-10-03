import { useReducer } from "react"
import CartContext from "./cart-context"

const cartReducer = (state, action) => {
    let updateItems;
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    if (action.type === 'ADD') {
        updateItems = [...state.items];
        updateItems = state.items.concat(action.item);
    }
    return {
        items: updateItems,
        totalAmount: updatedAmount
    };
}
const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0
    })
    const itemAddHandler = (item) => {
        dispatchCart({ type: 'ADD', item: item })
    }
    const itemRemoveHandler = () => {

    }
    return (
        <CartContext.Provider
            value={{
                items: cartState.items,
                totalAmount: cartState.totalAmount,
                onItemAdd: itemAddHandler,
                onItemRemove: itemRemoveHandler
            }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;