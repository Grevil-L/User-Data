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
    var user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.dob = dob;
    allUsers.push(user);
};

// function updateAllUsers() {
//     allUsers.push(user);
// };

function addUser() {
    firstName = document.getElementById("firstName");
    lastName = document.getElementById("lastName");
    dob = document.getElementById("dob");
    updateUser();
    // updateAllUsers();
    hideInputField();
    updateTable();
    // result();

};

function updateTable() {

    for (i = 0; i < allUsers.length; i++) {
        var table = document.getElementById("userTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = allUsers[i].firstName;
        cell2.innerHTML = allUsers[i].lastName;
        cell3.innerHTML = allUsers[i].dob;
    }
};

function showInputField() {
    var inputField = document.getElementById("inputField");
    inputField.style.display = 'block';
}

function hideInputField() {
    var inputField = document.getElementById("inputField");
    inputField.style.display = 'none';
}

// function result() {
//     var result = document.getElementById("result");
//     result.style.display = 'block';
//     fade(result);
// }
//
// function fade(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1) {
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }


// function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
// }
