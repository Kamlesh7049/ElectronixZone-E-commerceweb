import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";


const cardSlice=createSlice({
    name:"mycard",
    initialState:{
        card:[],
    },
    reducers:{
     addToCard:(state, actions)=>{
     const mydata =state.card.filter((key)=>key.id==actions.payload.id)
     if(mydata.length>=1)
     {
        message.error("Product already exist in cart");
     }
     else
     {
        state.card.push(actions.payload);
        message.success("Product Successfully Added!!!")
     }

     },
     qntyIncrement:(state,actions)=>{
        for(var i=0;i<state.card.length;i++)
        {
        if(state.card[i].id==actions.payload.id)
        {
            state.card[i].qnty++;
        }
        }
     },
     qntyDecrement:(state,actions)=>{
        for(var i=0;i<state.card.length;i++)
        {
            if(state.card[i].id==actions.payload.id)
            {
                if(state.card[i].qnty<=1)
                {
                    message.error("Quanty not less than 1");
                }
                else
                {
                    state.card[i].qnty--;
                }
            }
        }
     },
     dataRemove:(state, actions)=>{
        state.card=state.card.filter(key=>key.id!=actions.payload);
    },
    removeFromCart: (state, action) => {
        state.card = state.card.filter((item) => item.id !== action.payload);
      },



    }
})
export const {addToCard,qntyIncrement,qntyDecrement,dataRemove,removeFromCart }=cardSlice.actions;
export default cardSlice.reducer;