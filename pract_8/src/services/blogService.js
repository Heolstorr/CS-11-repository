const baseURL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async () => {
    const response = await fetch(`${baseURL}/posts`)
    return await response.json()
}

export const getPostsByAuthorId = async (userId) => {
    const response = await fetch(`${baseURL}/posts?${userId}`)
    return await response.json()
}

export const getPost = async (id) => {
    const response = await fetch(`${baseURL}/posts/${id}`)
    if (response.status === 404) {
        return null
    }
    return await response.json()
}

export const getAuthors = async () => {
    const response = await fetch(`${baseURL}/users`)
    return await response.json()
}

export const getAuthor = async (id) => {
    const response = await fetch(`${baseURL}/users/${id}`)
    return await response.json()
}