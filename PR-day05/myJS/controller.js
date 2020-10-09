// collecting properties input name & value
const inputCollector = classname => {
    let data = {}
    const registerForm = document.getElementsByClassName(classname)

    // object format
    for (let i = 0; i < registerForm.length; i++) {
        data[registerForm[i].name] = `${registerForm[i].value}`
    }

    return data
}

// isUnique
const isUnique = newUserId => {
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
    if (dataKaryawan.roleId === "hrd") {
        hrdPage.style.visibility = "visible"
    }
    return dataKaryawan
}

const updateData = (userName, newAddress) => {
    const dataKaryawan = database.filter(employee => employee.userId === userName).map(
        item => item.address = newAddress
    )
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