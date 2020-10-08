// Libraries or Function

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