// when button register for save data to database
const registerBtn = () => {
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
// createTable('myTable')

// save by form edit
const saveUpdateBtn = () => {
    const updateData = inputCollector("group-edit")
    updateData(updateData.userId, updateData.address)
    createTable('myTable')
}


const editEmployeeBtn = (userId, address) => {
    // send data to modals/form by userId

    const userEditForm = createHtmlInput("text", "group-edit", "userId", userId, true);
    const addressEditForm = createHtmlInput("text", "group-edit", "address", address, false);

    document.getElementById("editForm").appendChild(userEditForm,addressEditForm)

    // showFormEdit()
}


const deleteEmployeeBtn = (userIdRemove) => {
    database = database.filter(item => item.userId !== userIdRemove)
    createTable('myTable')
}



// Create table with data
const createTable = (tableName) => {
    const tablearea = document.getElementById(`${tableName}`)

    if (database.length < 1 ) {
        window.alert("data kosong")
        let msg = document.createTextNode(`database kosong`)
        tablearea.removeChild(document.getElementsByTagName('table'))
        return
    }
    const databaseKeys = Object.keys(...database)
    const table = document.createElement('table');
    const header = document.createElement('tr');
    let nextColumn = 0;

    // table header dynamic
    for (let i = 0; i < databaseKeys.length - 1; i++) {
        header.appendChild(document.createElement('th'));
        header.cells[i].appendChild(document.createTextNode(`${databaseKeys[i]}`))
        nextColumn++
    }
    header.appendChild(document.createElement('th'));
    header.appendChild(document.createElement('th'));
    header.cells[nextColumn].appendChild(document.createTextNode(`edit`))
    header.cells[nextColumn + 1].appendChild(document.createTextNode(`delete`))
    table.appendChild(header);


    // table content
    for (var i = 0; i < database.length; i++) {
        const tr = document.createElement('tr');
        nextColumn = 0;

        // lenght - 1 so password not show
        for (let j = 0; j < databaseKeys.length - 1; j++) {
            tr.appendChild(document.createElement('td'));
            tr.cells[j].appendChild(document.createTextNode(`${database[i][databaseKeys[j]]}`))
            nextColumn++
        }
        let editBtn = document.createElement("BUTTON");
        let deleteBtn = document.createElement("BUTTON");
        editBtn.innerHTML = "Edit"
        deleteBtn.innerHTML = "Delete"
        editBtn.setAttribute("class", "btn")
        editBtn.setAttribute("id", "editBtn")
        editBtn.setAttribute("onclick", `editEmployeeBtn('${database[i].userId}', '${database[i].address}')`)
        deleteBtn.setAttribute("onclick", `deleteEmployeeBtn('${database[i].userId}')`)


        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));
        tr.cells[nextColumn].appendChild(editBtn)
        tr.cells[nextColumn + 1].appendChild(deleteBtn)
        table.appendChild(tr);

        // editEmployeeBtn()
    }

    if (tablearea.childNodes[0] !== null) {
        tablearea.replaceChild(table, tablearea.childNodes[0]);
    } else {
        tablearea.appendChild(table)
    }
}


const createHtmlInput = (inputType, keyName, className, value, isDisabled) => {
    let htmlInput = document.createElement("INPUT");
    htmlInput.setAttribute("type", `${inputType}`);
    htmlInput.setAttribute("name", `${keyName}`);
    htmlInput.setAttribute("class", `${className}`);
    htmlInput.setAttribute("value", `${value}`);
    htmlInput.disabled = isDisabled
    return htmlInput
}



