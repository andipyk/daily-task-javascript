// when button register for save data to database
const registerSave = () => {
    const newData = inputCollector("group-register")
    if (isUnique(newData.userId)) {
        database.push(newData)
        alert("data succesfully added !")
        createTable('myTable')
    } else {
        alert("userid sudah digunakan !")
    }
}


const loginBtn = () => {
    const loginData = inputCollector("group-login")
    if (authLogin(loginData.userId, loginData.password).length !== 0) {
        alert("login berhasil !")

    } else {

        alert("login gagal !")
    }
}

// temporary create table here
createTable('myTable')
const editBtn = () => {

}




