export async function getPosts() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await respuesta.json()
}

export async function getPost(url) {
    const resultado = await fetch(`${process.env.API_URL_GUITARRA}/posts?filters[url]=${url}&populate=imagen`)
    return await resultado.json()
}