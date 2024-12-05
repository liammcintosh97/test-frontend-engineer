import React, { createContext, useContext, useReducer, ReactNode, useEffect, Context } from 'react';
import { CartAction, CartContextType, CartState } from './type';

/**
 * The context for the shopping cart.
 *
 * @type {Context<CartContextType | undefined>}
 */
const CartContext: Context<CartContextType | undefined> = createContext<CartContextType | undefined>(undefined);

/**
 * Reducer function to manage the state of the shopping cart.
 *
 * @param {CartState} state - The current state of the cart.
 * @param {CartAction} action - The action to be performed on the cart state.
 * @returns {CartState} The new state of the cart after the action is applied.
 *
 * @throws {Error} If the payload doesn't match the schema dictated by the action type, or if the action type is not recognized.
 *
 * The reducer supports the following action types:
 * - 'ADD_ITEM': Adds an item to the cart. If the item already exists, it increments the quantity.
 * - 'REMOVE_ITEM': Removes an item from the cart.
 * - 'CLEAR_CART': Clears all items from the cart.
 * - 'SET_CART': Sets the cart items to the provided array of CartItems.
 */
const cartReducer = (state: CartState, action: CartAction): CartState => {
  const payload = action.payload;
  switch (action.type) {

    case 'ADD_ITEM':
      if (!payload || Array.isArray(payload)) {
        throw new Error('payload for ADD_ITEM must be a CartItem')
      }

      const existingItem = state.items.find(item => item.id === payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { ...state, items: [...state.items, { ...payload, quantity: 1 }] };
    case 'REMOVE_ITEM':
      if (!payload|| Array.isArray(payload)) {
        throw new Error('payload for ADD_ITEM must be a CartItem')
      }

      if (payload) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== payload.id),
        };
      }
      return state;
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_CART':
      if (!Array.isArray(payload)) {
        throw new Error('payload for SET_CART must be an array of CartItems');
      }

      return {...state, items: payload|| []};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

/**
 * The CartProvider component provides the shopping cart state and actions to its children.
 * @param {{ children: ReactNode }} props - The children to render.
 * @returns
 */
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    console.log('Cart State:', state);
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const string = localStorage.getItem('cart');
    const storedCart = string ? JSON.parse(string) : undefined;
    if (Array.isArray(storedCart)) {
      dispatch({ type: 'SET_CART', payload: storedCart });
    }
  }, []);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

/**
 * A custom hook to access the cart state and dispatch actions.
 * @returns {{state: CartState; dispatch: React.Dispatch<CartAction>;}}
 */
export const useCart = (): {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};