import { useReducer } from "react"
import CartContext from "./cart-context"

const cartReducer = (state, action) => {
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

    let updatedItems;

    if (action.type === 'ADD') {

        const existingCartItemIndex = state.items.findIndex((item) =>
            item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems = state.items.concat(action.item);
        }
    }
    return {
        items: updatedItems,
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