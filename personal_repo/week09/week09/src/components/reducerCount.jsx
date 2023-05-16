import React from 'react';

const reducer = (state,action) => {
    switch (action.type){
        case 'INCREASE':
            return state +1;
        case 'DECREASE':
            return state -1;
        case 'MULTIPLY':
            return state*state
        case 'SQR':
            return Math.sqrt(state)
    }
};

export default reducer;