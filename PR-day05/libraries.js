// Libraries or Function



// collecting properties data id & value
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

// newKaryawan =     {
//     "userId":"andi",
//     "roleId":"hrd",
//     "firstName":"Romin",
//     "lastName":"Irani",
//     "preferredFullName":"Romin Irani",
//     "employeeCode":"E1",
//     "region":"CA",
//     "phoneNumber":"408-1234567",
//     "emailAddress":"romin.k.irani@gmail.com",
//     "password": "1234"
// }



// var arr = document.getElementsByClassName("classname")




//register user
registerUser = (name, userName, password) => {
    const newUser = {
        "name": name,
        "username": userName,
        "password": password
    }

    if (databaseUser.push(newUser)) {
        return true
    }

    return false
}
//
//
//
// // ===============================================
//
// loginSubmit = () => {
//     console.warn("Login button clicked");
//     const username = document.getElementById("usernameLogin").value;
//     const password = document.getElementById("passwordLogin").value;
//
//     console.warn("username :", username);
//     console.warn("password :", password);
//
//     checkPassword(username, password)
// }