// when button register for save data to database
const registerSave = () => {
    const newData = inputCollector("group-register")
    if (isUnique(newData.userId)){
        database.push(newData)
        alert("data succesfully added !")
    } else {
        alert("userid sudah digunakan !")
    }
}

//check username & password isMatch return data
const authLogin = (userName, userPass) => {
    const dataKaryawan = database.filter(employee => employee.userId === userName && employee.password === userPass)
    dataKaryawan.length === 0 ? alert("username/password salah") : alert("berhasil login")

    return dataKaryawan
}

