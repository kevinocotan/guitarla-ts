import { db } from "../data/db"
import { CartItem, Guitar } from "../types"

export type CartActions =
    { type: 'add-to-cart', payload: { item: Guitar } } |
    { type: 'remove-from-cart', payload: { item: Guitar['id'] } } |
    { type: 'decrease-quantity', payload: { item: Guitar['id'] } } |
    { type: 'increase-quantity', payload: { item: Guitar['id'] } } |
    { type: 'clear-cart' }

export type CarState = {
    data: Guitar[]
    cart: CartItem[]
}

export const initialState: CarState = {
    data: db,
    cart: []
}

export const cartReducer = (
    state: CarState = initialState,
    action: CartActions
) => {
    
    if (action.type === "add-to-cart") {

        return {

        }
    }

    if (action.type === "remove-from-cart") {

        return {

        }
    }

    if (action.type === "decrease-quantity") {

        return {

        }
    }

    if (action.type === "increase-quantity") {

        return {

        }
    }

    if (action.type === "clear-cart") {

        return {

        }
    }

    return state
}