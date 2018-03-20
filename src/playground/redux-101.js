import {createStore } from 'redux';

// Action generators are functions that return action objects

const increamentCount = ({increamentBy=1}={}) =>({
        type:'INCREMENT',
        increamentBy
    });

const decreamentCount = ({decreamentBy=1}={})=>({
    type:'DECREMENT',
    decreamentBy
});

const setCount = ({count})=>({
    type:'SET',
    count
});

const resetCount = ()=>({
    type:'RESET'
});
//Reducers
//1. reducers are Pure functions --output only depends on input it should not depend on variable outside the scope
// 2. never change the  state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.increamentBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decreamentBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{ //will get called everytime state changes
    console.log(store.getState());
})


// store.dispatch({ //this again calls the createStore function
//     type: 'INCREMENT',
//     increamentBy:5
// });
// unsubscribe();//for unsubscribing the changes
store.dispatch(increamentCount({increamentBy:5}));
store.dispatch(increamentCount());


store.dispatch(decreamentCount());

store.dispatch(decreamentCount({decreamentBy:10}));

store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// });
// store.dispatch({ //this again calls the createStore function
//     type: 'DECREMENT',
//     decreamentBy:10
// });

// store.dispatch({ 
//     type: 'DECREMENT'
// });

store.dispatch(setCount({count:-101}));

// store.dispatch({
//     type: 'SET',
//     count:101
// });

