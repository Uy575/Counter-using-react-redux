const initialState = 0;

const counter = (state = initialState,action) => {

        switch(action.type){
            case 'increment' : return state + 5;
            case 'decrement' : return state -1;
            default: return state
        }

}

export default counter;