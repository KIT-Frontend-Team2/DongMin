import React from 'react';

const reducerToto = (state,action) => {
    switch (action.type){
        case "ADD":
            const Copy  = [...state,action.payload]
            return Copy
        case "DELETE":
            const CopyDelete  = state.filter((v)=>v !==action.payload)
            return CopyDelete
    }
};

export default reducerToto;