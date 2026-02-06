const API_KEY = 'Q5PligWn4ng6ZOlaD1FlKvYRwyh6RKCCyewqz5MKMHeGzsl9YQ6YN4sr'

const URL = 'https://api.pexels.com/v1/search'

const auth = {
    headers: {
        Authorization: API_KEY
    }
}

const imageAPI = {
    getImages: (query, page, perPage=80) => {
        return fetch(`${URL}?query=${query}&per_page=${perPage}&page=${page}`, auth)
            .then((response) => response.json())
    },
    downloadImage: (url) => {
        return fetch(url, auth)
            .then((response) => {
                if (!response.ok || response.status === 404) {
                    throw new Error('Something went wrong...')
                }
                return response.blob()
            })
    }
}

export default imageAPI