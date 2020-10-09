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



