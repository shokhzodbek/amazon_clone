export const initialState = {
      basket:[],
      user:null
}

export const actionType = {
      type:"ADD"
}
export const getTotal = (basket)=>basket?.reduce((amount,item)=>item.price+amount,0)

const reducer =(state,action)=>{
      switch(action.type){
            case "ADD":
                  return {
                        ...state,
                        basket:[...state.basket,action.item]
                  };
            case "DELATE":
      
                    const index =state.basket.findIndex(item=>item.id===action.id)
                    let newBasket = [...state.basket]
                    if(index>=0){
                          newBasket.splice(index,1)
                    }
                    else {
                          console.warn("Cant remove item")
                    }

                    return {
                          ...state,
                          basket: newBasket
                    }
            case "USER":
                  return {
                        ...state,
                        user:action.user
                  }
            default:
                  return state
      }
}

export default reducer;