import React, { createContext, useContext, useReducer, ReactNode, useEffect, Context, useCallback } from 'react';
import { CartAction, CartContextType, CartItem, CartState } from './type';
import getProduct from '../../util/getProduct';

/**
 * The context for the shopping cart.
 *
 * @type {Context<CartContextType | undefined>}
 */
const CartContext: Context<CartContextType | undefined> = createContext<CartContextType | undefined>(undefined);

/**
 * Finds an item in the cart by its id.
 * @param {number} id - the id of the item to find
 * @param {CartState} state - the state of the cart
 * @returns {CartItem | undefined} - the item if found, undefined otherwise
 */
const findItem = (id: number, state: CartState): CartItem | undefined => state.items.find(item => item.id === id);

/**
 * Adds an item to the cart. If the item already exists, it increments the quantity.
 * @param {CartState} state  - the state of the cart
 * @param {CartItem | CartItem[] | undefined} payload - the item to add
 * @returns {CartState} - the new state of the cart
 */
function addItem(state: CartState, payload: CartItem | CartItem[] | undefined): CartState {
  let _state
  if (!payload || Array.isArray(payload)) {
    throw new Error('payload for ADD_ITEM must be a CartItem')
  }
  if (findItem(payload.id, state)) {
    _state = {
      ...state,
      items: state.items.map(item =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    };
  } else {
    _state = { ...state, items: [...state.items, { ...payload, quantity: 1 }] };

  }
  localStorage.setItem('cart', JSON.stringify(_state));
  return _state
}

/**
 * Removes an item from the cart.
 * @param {CartState} state  - the state of the cart
 * @param {CartItem | CartItem[] | undefined} payload - the item to remove
 * @returns {CartState} - the new state of the cart
 */
function removeItem(state: CartState,  payload: CartItem | CartItem[] | undefined): CartState {
  let _state = {...state}
  if (!payload|| Array.isArray(payload)) {
    throw new Error('payload for ADD_ITEM must be a CartItem')
  }

  const existingItem = findItem(payload.id, state);
  if (existingItem) {
    if (existingItem.quantity > 1) {
      _state = {
        ...state,
        items: state.items.map(item =>
          item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    } else {
      _state = {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
      };
    }
  }
  localStorage.setItem('cart', JSON.stringify(_state));
  return _state;
}

/**
 * Clears the cart.
 * @returns {CartState} - the new state of the cart
 */
function clearCart(): CartState {
  const _state = {items: [] }

  localStorage.setItem('cart', JSON.stringify(_state));
  return _state
}

/**
 * Sets the cart items to the provided array of CartItems.
 * @param { CartItem | CartItem[] | undefined} payload - The items to set in the cart.
 * @returns
 */
function setCart( payload: CartItem | CartItem[] | undefined) {
  if (!Array.isArray(payload)) {
    throw new Error('payload for SET_CART must be an array of CartItems');
  }
  const _state = {items: payload}

  localStorage.setItem('cart', JSON.stringify(_state));
  return _state;
}

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
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.payload);
    case 'REMOVE_ITEM':
      return removeItem(state, action.payload);
    case 'CLEAR_CART':
      return clearCart();
    case 'SET_CART':
      return setCart(action.payload);
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

  const getStoredCart = useCallback(() => {
    const string = localStorage.getItem('cart');
    const storedCart: CartState | undefined = string ? JSON.parse(string) : undefined;
    return storedCart
  }, []);

  const getCartProducts = useCallback(async () => {
    try {
      return Promise.all(state.items.map(async item => await getProduct(item.id)))
    } catch (error) {
      throw error
    }
  }, [state.items])

  useEffect(() => {
    const storedCart = getStoredCart();
    if (storedCart) {
      dispatch({ type: 'SET_CART', payload: storedCart.items });
    }
  },[getStoredCart])

  return <CartContext.Provider value={{ state, dispatch, getCartProducts }}>{children}</CartContext.Provider>;
};

/**
 * A custom hook to access the cart state and dispatch actions.
 * @returns {{state: CartState; dispatch: React.Dispatch<CartAction>;}}
 */
export const useCart = (): CartContextType  => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};