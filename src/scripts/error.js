import { userStorage } from "./storage.js"


const buttonHandle = () => {
    const button = document.querySelector(".main__newSearch")
    button.addEventListener("click", (event) => {
        userStorage("@userInfo", "delete")
        userStorage("@userRepos", "delete")

        window.location.replace("../../")
    })
}

buttonHandle()