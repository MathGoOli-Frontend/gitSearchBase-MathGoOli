import { getUsername, getRepos } from "./requests.js"
import { userStorage } from "./storage.js"

const instaRedirect = () => {
    /* redireciona o usuario caso exista algum usuario armazenado nolocal storage */

    const userInfo = userStorage("@userInfo")
    const userRepos = userStorage("@userRepos")


    if(userInfo && userRepos){
        window.location.replace("/src/pages/profile.html")
    }
}

const searchHandle = async () =>{
    const input = document.querySelector(".right__input")
    const button = document.querySelector(".right__button")

    button.addEventListener("click", async (event)=>{
        event.preventDefault()

        const username = input.value

        const userInfo = await getUsername(username)

        const userRepos = await getRepos(username)

        userStorage("@userInfo", userInfo)
        userStorage("@userRepos", userRepos)
        
        window.location.replace("/src/pages/profile.html")
    })
}

instaRedirect()
searchHandle()