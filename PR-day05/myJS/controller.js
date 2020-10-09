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


