/**
 * Created by grevil on 5/19/2017.
 */

var firstName;
var lastName;
var dob;
var rIndex;
var table = document.getElementById("userTable");
var origColor;
var allUsers = [];

function updateUser() {
    var user = new Object();
    user.firstName = firstName;
    user.lastName = lastName;
    user.dob = dob;
    allUsers.push(user);
    document.getElementById("dummy").innerHTML = "Dev";
};

function addUser(y) {
    if (y.value === "Edit User") {
        editUser();
        hideInputField();
        clearInputField();
        disableButtons();
        unhighlightRows();
    }
    else {
        firstName = document.getElementById("firstName").value;
        lastName = document.getElementById("lastName").value;
        dob = document.getElementById("dob").value;
        updateUser();
        hideInputField();
        updateTable();
        clearInputField();
        selectedRowToInput();
    }
};


function editUser() {

    var fname = document.getElementById("firstName").value,
        lname = document.getElementById("lastName").value,
        dob = document.getElementById("dob").value;
    // if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = dob;
    // }
};

function selectedRowToInput() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // if(rIndex !== null){
            //     if(table.rows[rIndex].style.backgroundColor === 'green'){
            //         unhighlightRows();
            //         rIndex = null;
            //     }
            // }

            // get the selected row index
            rIndex = this.rowIndex;


            origColor = this.style.backgroundColor;
            //this.style.backgroundColor = 'green';
            highlightRows();
            document.getElementById("firstName").value = this.cells[0].innerHTML;
            document.getElementById("lastName").value = this.cells[1].innerHTML;
            document.getElementById("dob").value = this.cells[2].innerHTML;

            enableButtons();

        };
    }
}
selectedRowToInput();

// function editHtmlTbleSelectedRow() {
//     var fname = document.getElementById("fname").value,
//         lname = document.getElementById("lname").value,
//         age = document.getElementById("age").value;
//     if (!checkEmptyInput()) {
//         table.rows[rIndex].cells[0].innerHTML = fname;
//         table.rows[rIndex].cells[1].innerHTML = lname;
//         table.rows[rIndex].cells[2].innerHTML = age;
//     }
// }


function updateTable() {
    var lastElement = allUsers.length - 1;

    // for (i = 0; i < allUsers.length; i++) {

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = allUsers[lastElement].firstName;
    cell2.innerHTML = allUsers[lastElement].lastName;
    cell3.innerHTML = allUsers[lastElement].dob;
    cell1.c
    // row.onclick = editUser(this);
    // }
};

function deleteUser() {
    table.deleteRow(rIndex);
    // clear input text
    clearInputField();
    disableButtons()
}

function showInputField(x) {
    var caller = x.id;
    if (caller === "edit") {
        document.getElementById("addUser").value = "Edit User";
    }
    else {
        document.getElementById("addUser").value = "Add User";
    }
    var inputField = document.getElementById("inputField");
    inputField.style.display = 'block';
}

function hideInputField() {
    var inputField = document.getElementById("inputField");
    inputField.style.display = 'none';
}

function clearInputField() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
}

function enableButtons() {
    document.getElementById("edit").disabled = false;
    document.getElementById("delete").disabled = false;
}

function disableButtons() {
    document.getElementById("edit").disabled = true;
    document.getElementById("delete").disabled = true;
}

function highlightRows() {
    table.rows[rIndex].style.backgroundColor = 'orange';
    //table.rows[rIndex].style.color = 'white';
}

function unhighlightRows() {
    table.rows[rIndex].style.backgroundColor = origColor;
}

