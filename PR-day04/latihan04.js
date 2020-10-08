const dummyUsers2 = {
    "name": "andi syafrianda",
    "username": "andi",
    "password": "1234"
}








// input data

const table = document.getElementById("myTable");


let rowNo = 1
let showTable = false;

let form1 = document.form1;

let allData = []
const dummyData1 = ['Andi', 'andipyk', 'Payakumbuh', 'Presiden', ['masak', 'olahraga', 'ghibah']]
const dummyData2 = ['Budi', 'budianduk', 'Merauke', 'Direktur', ['olahraga', 'ghibah']]

allData.push(dummyData1, dummyData2)

showData(allData)

function simpanData() {

    let hobbies = []
    let checkbox = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkbox.length; i++) {
        hobbies.push(checkbox[i].value)
    }

    let nama = document.form1.nama.value;
    let username = document.form1.username.value;
    let alamat = document.form1.alamat.value;
    let pekerjaan = document.form1.pekerjaan.value;
    // save new data by form
    let newData = [nama, username, alamat, pekerjaan, hobbies]
    allData.push(newData)


    showData(allData)
    // delete all row
    // for (let i = 1; i < rowNo; i++) {
    //     document.getElementById('myTable').deleteRow(i);
    // }
    rowNo++;
}

function editData() {
    console.log("edit data");
}

function deleteData(row) {
    console.log("delete data");

    let i = row.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
}


function showData(arrayData) {
    console.log("add data")

    rowNo = 1
    for (let rowIndex = 0; rowIndex < arrayData.length; rowIndex++) {
        addToTable(arrayData[rowIndex])

    }
}


function addToTable(data) {

    let btnEdit = `<input type="button" class="button is-warning" value="edit" onclick="editData()">`;
    let btnDelete = `<input type="button" class="button is-danger" value="delete" onclick="deleteData(this)">`;
    let nama = data[0];
    let username = data[1];
    let alamat = data[2];
    let pekerjaan = data[3];
    let hobbies = data[4];

    const row = table.insertRow(rowNo);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    cell1.innerHTML = `${rowNo}`;
    cell2.innerHTML = nama;
    cell3.innerHTML = username;
    cell4.innerHTML = alamat;
    cell5.innerHTML = pekerjaan;
    cell6.innerHTML = hobbies;
    cell7.innerHTML = `${btnEdit} ${btnDelete}`;

    rowNo++;

}


// pagination
// EDIT DELETE
// tambahin username (harus unique handler windows error)
// hoby array lebih dari satu