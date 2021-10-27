export const GET_POSTS = 'GET_POSTS';
export const SET_POSTS = 'SET_POSTS'

export const getPosts = () => ({
    type: GET_POSTS
});

export const setPosts = (data) => ({
    type: SET_POSTS,
    data,
})