import { userStorage } from "./storage.js"

const headerHandle = () => {

    const user = userStorage("@userInfo")

    const title = document.querySelector("title")
    title.innerText = `Git Search - ${user.login} | ${user.name}`

    const img = document.querySelector(".header__img")
    img.src = user.avatar_url

    const h2 = document.querySelector(".header__username")
    h2.innerText = user.name

    const button = document.querySelector(".header__changeUser")
    button.addEventListener("click", (event) => {
        userStorage("@userInfo", "delete")
        userStorage("@userRepos", "delete")

        window.location.replace("/")
    })

}

const createCard = (data) =>{
    /* cria um card a partir do data. 
    Não desconstrui porque tem muita informação que não é nescessária */
    const li = document.createElement("li")
    li.classList.add("card__containner")

    const article = document.createElement("article")
    article.classList.add("card__article")

    const h3 = document.createElement("h3")
    h3.classList.add("card__title")
    h3.innerText = data.name

    const p = document.createElement("p")
    p.classList.add("card__p")
    p.innerText = data.description

    const button = document.createElement("button")
    button.classList.add("card__btn", "btn")
    button.innerText = "Repositório"
    button.dataset.url = data.html_url

    button.addEventListener("click", (event) =>{
        window.location.replace(event.target.dataset.url)
    })

    //montar

    article.append(h3, p)

    li.append(article, button)

    return li

}

const deckHandle = () =>{
    const userRepos = userStorage("@userRepos")
    const deck = document.querySelector(".card__deck")
    deck.innerHTML = ""

    userRepos.forEach(card => {
        deck.appendChild(createCard(card))
    });
}

headerHandle()
deckHandle()