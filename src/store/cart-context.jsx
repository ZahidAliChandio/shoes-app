import { createContext } from "react";
const CartContext=createContext({
    items:[],
    totalAmount:0,
    onItemAdd:(item)=>{},
    onItemRemove:(item)=>{}
});
export default CartContext;