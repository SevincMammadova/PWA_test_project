export async function getPostsApi () {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=11')
    return await data.json()
}