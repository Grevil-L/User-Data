/**
 * Created by grevil on 5/19/2017.
 */

// console.log("from javaScript");
//
   var users = [{srno: "1", firstName: "Grevil", lastName: "Lopes", dob: "11/24/1992"},
    {srno: "1", firstName: "Grevil", lastName: "Lopes", dob: "11/24/1992"}];
// var add = document.getElementById('add').onclick = addUser();
//
funtion addUser(){

    var fruits, text, fLen, i;

    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
};


function myCreateFunction() {
    var table = document.getElementById("userTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = users.srno;
    cell2.innerHTML = users.firstName;
    cell3.innerHTML = users.lastName;
    cell4.innerHTML = users.dob;
}

// function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
// }