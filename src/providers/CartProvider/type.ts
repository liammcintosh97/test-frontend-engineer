import { Product } from "@/util/getProducts/type";

/** The shape of a cart item */
export type CartItem = {
  /** The id of the item */
  id: number;
  /** The quantity of the item */
  quantity: number;
}

/** The state of the cart */
export type CartState = {
  /** the items in the cart */
  items: CartItem[];
}

/** The actions that can be dispatched to the cart reducer */
export type CartAction = {
  /** The type of action
    * - 'ADD_ITEM': Adds an item to the cart. If the item already exists, it increments the quantity.
    * - 'REMOVE_ITEM': Removes an item from the cart.
    * - 'CLEAR_CART': Clears all items from the cart.
    * - 'SET_CART': Sets the cart items to the provided array of CartItems.
  */
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART' | 'SET_CART';
  /** The payload of the action */
  payload?: CartItem | CartItem[];
}

export type CartContextType = {
  /** The state of the cart */
  state: CartState;
  /** The dispatch function for the cart */
  dispatch: React.Dispatch<CartAction>;
  /** Gets all the product data from the cart ids */
  getCartProducts: () => Promise<Product[]>;
}