// action for incrementing likes

export const increment = (idx) => {
    return {
        type: 'INCREMENT_LIKES',
        index: idx
    }
}

// action for adding commnets

export const addComment =  (pId, auth, comm) => {
    return {
        type: 'ADD_COMMENT',
        postId: pId,
        author: auth,
        comment: comm
    }
}

// action for removing comments

export const removeComment =  (postId, idx) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index: idx
    }
}

// the objects being returned by the functions are the actual action
// the fuction itself is the action creator.
