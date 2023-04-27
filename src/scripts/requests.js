const target_URL = "https://api.github.com"

export const getUsername = async (username) => {
    const name = document.querySelector("right__input")

    const userInfo = await fetch(`${target_URL}/users/${username}`,{
        method: "GET",
    }).then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error("usuario não encontrado")
        }
    }).catch(() => window.location.replace("http://127.0.0.1:5500/src/pages/error.html"))
    
    return userInfo
}

export const getRepos = async (username) => {
    const name = document.querySelector("right__input")

    const userRepos = await fetch(`${target_URL}/users/${username}/repos`,{
        method: "GET",
    }).then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error("repos não encontrados")
        }
    }).catch((error) => console.log(error))
    
    return userRepos
}