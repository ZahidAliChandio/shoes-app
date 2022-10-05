import { useReducer } from "react"
import CartContext from "./cart-context"

const cartReducer = (state, action) => {
    let updatedAmount;
    let updatedItems;

    if (action.type === 'ADD') {
        updatedAmount = state.totalAmount + action.item.price * action.item.amount;
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
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedAmount = state.totalAmount - existingCartItem.price;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }
    return {
        items: [],
        totalAmount: 0
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0
    })
    const itemAddHandler = (item) => {
        dispatchCart({ type: 'ADD', item: item })
    }
    const itemRemoveHandler = (id) => {
        dispatchCart({ type: 'REMOVE', id: id })
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