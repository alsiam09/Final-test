import { createSlice } from '@reduxjs/toolkit'

export const prodectSlice = createSlice({
  name: 'prodect',
  initialState: {
    CartItem: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[],
    userId: localStorage.getItem("userId")? JSON.parse(localStorage.getItem("userId")):[],
  },
  reducers: {
    addToCart: (state , action) => {
      let FindProdect = state.CartItem.findIndex((item)=> item.id == action.payload.id)
            
      if (FindProdect !== -1) {
        state.CartItem[FindProdect].qun += 1
        localStorage.setItem("cart" , JSON.stringify(state.CartItem))
      }else{
        state.CartItem = [ ...state.CartItem , action.payload ]
        localStorage.setItem("cart" , JSON.stringify(state.CartItem))
      }
      
    },
    qunInc: (state , action) => {
        let stock = action.payload.item.stock;
        let qun = action.payload.item.qun;
        if ( stock > qun) {
          state.CartItem[action.payload.index].qun += 1
          localStorage.setItem("cart" , JSON.stringify(state.CartItem))
        }else{
          state.CartItem[action.payload.index].qun === stock
        }              
    },
    qunDec: (state , action) =>{
      if ( state.CartItem[action.payload].qun > 1 ) {
        state.CartItem[action.payload].qun -= 1
        localStorage.setItem("cart" , JSON.stringify(state.CartItem))
      }
    },
    qunRem:(state , action) =>{
      state.CartItem.splice(action.payload , 1)
      localStorage.setItem( "cart" , JSON.stringify(state.CartItem) )
    },
    clear:(state , action)=>{
      state.CartItem.splice(action.payload)
      localStorage.setItem( "cart" , JSON.stringify(state.CartItem) )
    },
    UserDetails:( state , action )=>{
      state.userId = [action.payload]
      localStorage.setItem("userId" , JSON.stringify(state.userId))
    },
    LogOutclear:(state , action)=>{
      state.userId.splice(action.payload)
      localStorage.setItem("userId",JSON.stringify(state.userId))
    },
    UserID:(state , action)=>{
      console.log(action);
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart , qunInc , qunDec , qunRem , clear , UserDetails , LogOutclear , UserID } = prodectSlice.actions

export default prodectSlice.reducer