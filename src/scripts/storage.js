

export const userStorage = (keyName, data) => {
    /* usa local storage para armazenar ou excluir a chave 
    padrão de keyName do site:
    @userInfo
    @userRepos
    
    */
    if(data === undefined){
        return JSON.parse(localStorage.getItem(keyName)) // lê se não passar nenhum argumento
    }else if (data === "delete"){
        localStorage.removeItem(keyName) // remove se o argumento for a string delete
    } else if (typeof data === "object") {
        localStorage.setItem(keyName, JSON.stringify(data)) // armazena o que for objeto
    }
}
 