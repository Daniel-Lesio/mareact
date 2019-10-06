const initState = {
    posts : [
        {id:'1',title: 'Post One', body : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},
        {id:'2',title: 'Post Two', body : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},
        {id:'3',title: 'Post Three', body : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"},
    ]
}
const rootReducer = (state = initState,action) => {
    if(action.type === 'DELETE_POST' ){
        let newPosts = state.posts.filter( post => post.id !== action.id )
        return {
            ...state,
            posts : newPosts
        }
    }
    return state

}

export default rootReducer;

