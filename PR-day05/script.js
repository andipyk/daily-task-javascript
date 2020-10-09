// when button register for save data to database
const registerSave = () => {
    const newData = inputCollector("group-register")
    if (isUnique(newData.userId)) {
        database.push(newData)
        alert("data succesfully added !")
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

// Create table with data
const createTable = () => {

    const tablearea = document.getElementById('myTable')
    const table = document.createElement('table');


    for (var i = 0; i < database.length; i++) {
        const tr = document.createElement('tr');
        const databaseKeys = Object.keys(...database)

        for (let j = 0; j < databaseKeys.length; j++) {
            tr.appendChild(document.createElement('td'));
            tr.cells[j].appendChild(document.createTextNode(`${database[i][databaseKeys[j]]}`))
        }
        table.appendChild(tr);
    }

    tablearea.replaceChild(table , tablearea.childNodes[0]);
}



