// reducers are like event listeners, awaiting the for the actionCreaters to trigger events
// we make reducers for every single bit of state
// a reducer for posts, for likes, for comments, etc

// a reducer takes in two things; the action (info about what happened), and a copy of the cuurent state

// what the reducer basically does is that:
    // it says ok, this is the action, that triggered some event that changed the state,
    // then it looks at the current state (the store), and says ok this is so and so that changed,
    // then it says ok lets return a brand new copy, of the updated store.
    // then from that returned new store, react takes that, and updates the actual components ui

// post reducer

// pure functions in redux, we don't mutate state; functional programming
// take a copy of current state, modify it, and return a new state.


const posts = (state = [], action) => {
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log("incrementing likes...")
            // return updated state
            const i = action.index;
            return[
                ...state.slice(0,i), // before one we update
                {...state[i], likes: state[i].likes+1}, //state[i] = posts, so ... spread until likes, and change likes to likes++
                ...state.slice(i + 1), // after the element we update
            ]
        default: 
            return state;
    }

    return state;
}


export default posts;