/**
 * Created by grevil on 5/19/2017.
 */

var firstName;
var lastName;
var dob;
// var user = {firstName: firstName, lastName: lastName, dob: dob};

// var allUsers = [user];
var allUsers = [];

function updateUser() {
    var user = new Object();
    user.firstName = firstName;
    user.lastName = lastName;
    user.dob = dob;
    allUsers.push(user);
    document.getElementById("dummy").innerHTML = "Dev";
};

// function updateAllUsers() {
//     allUsers.push(user);
// };

function addUser() {
    firstName = document.getElementById("firstName").value;

    lastName = document.getElementById("lastName").value;
    dob = document.getElementById("dob").value;
    updateUser();
    // updateAllUsers();
    hideInputField();
    updateTable();
    // result();

};

function updateTable() {
    var lastElement = allUsers.length-1;

    // for (i = 0; i < allUsers.length; i++) {
        var table = document.getElementById("userTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = allUsers[lastElement].firstName;
        cell2.innerHTML = allUsers[lastElement].lastName;
        cell3.innerHTML = allUsers[lastElement].dob;
    // }
};

function showInputField() {
    var inputField = document.getElementById("inputField");
    inputField.style.display = 'block';
}

function hideInputField() {
    var inputField = document.getElementById("inputField");
    inputField.style.display = 'none';
}

function giveAction() {
    var dum = document.getElementById("dummy");
    alert(dum);
}


// function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
// }
