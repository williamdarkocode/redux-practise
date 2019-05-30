// reducers are like event listeners, awaiting the for the actionCreaters to trigger events
// we make reducers for every single bit of state
// a reducer for posts, for likes, for comments, etc

// a reducer takes in two things; the action (info about what happened), and a copy of the cuurent state

// what the reducer basically does is that:
    // it says ok, this is the action, that triggered some event that changed the state,
    // then it looks at the current state (the store), and says ok this is so and so that changed,
    // then it says ok lets return a brand new copy, of the updated store.
    // then from that returned new store, react takes that, and updates the actual components ui

// comments reducer

const comments = (state = [], action) => {
    // console.log(state, action);
    return state;
}


export default comments;