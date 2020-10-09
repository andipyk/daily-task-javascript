// collecting properties input id & value
const inputCollector = classname => {
    let data = {}
    const registerForm = document.getElementsByClassName(classname)

    // object format
    for (let i = 0; i < registerForm.length ; i++) {
        data[registerForm[i].id] = `${registerForm[i].value}`
    }

    return data
}

// isUnique
const isUnique = newUserId  => {
    for (let i = 0; i < database.length; i++) {
        if (database[i].userId === newUserId) {
            return false
        }
    }

    return true
}

//check username & password isMatch return data
const authLogin = (userName, userPass) => {
    const dataKaryawan = database.filter(employee => employee.userId === userName && employee.password === userPass)
    return dataKaryawan
}


// Create table with data
const createTable = ( tableName ) => {
    const databaseKeys = Object.keys(...database)
    const tablearea = document.getElementById(`${tableName}`)
    const table = document.createElement('table');
    const header = document.createElement('tr');

    // table header dynamic
    for (let i = 0; i < databaseKeys.length-1; i++) {
        header.appendChild(document.createElement('th'));
        header.cells[i].appendChild(document.createTextNode(`${databaseKeys[i]}`))
    }
    table.appendChild(header);

    // table content
    for (var i = 0; i < database.length; i++) {
        const tr = document.createElement('tr');

        // lenght - 1 so password not show
        for (let j = 0; j < databaseKeys.length-1; j++) {
            tr.appendChild(document.createElement('td'));
            tr.cells[j].appendChild(document.createTextNode(`${database[i][databaseKeys[j]]}`))
        }
        table.appendChild(tr);
    }

    tablearea.replaceChild(table , tablearea.childNodes[0]);
}