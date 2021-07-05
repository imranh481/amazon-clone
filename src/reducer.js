// set the initial state first
export const initialState = {
  basket: [],
  user: null,
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


// inside the reducer listen to the action
const reducer = (state, action) => {
  console.log(action);
      switch (action.type) {
        //if you have received the set user action
        case 'ADD_TO_BASKET' :
          //logic for adding to basket
          return {
            ...state, 
            // add the state of the current basket as well as the action item
            basket: [...state.basket, action.item]
          }
        case 'REMOVE_FROM_BASKET' :
          //logic for removing basket
          let newBasket = [...state.basket]
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

          if (index >= 0 ) {
            //if item exists in basket, remove it...splice by 1
            newBasket.splice(index, 1)
          } else {
            console.warn (`Can't remove product (id: ${action.id}) as its not in basket`)
          }
          return {
            ...state, 
            //set the basket to the new basket
            basket: newBasket
          } 
        case 'SET_USER':
          return {
            ...state,
            user: action.user
          }       

          //if we dont listen to the action the return the state
          default: 
          return state;
      }
}

export default reducer;