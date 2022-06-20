// fill in javascript code here
document.querySelector("form").addEventListener("submit", create);
function create(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var id = document.querySelector("#docID").value;
    var spec = document.querySelector("#dept").value;
    var exp = document.querySelector("#exp").value;
    var email = document.querySelector("#email").value;
    var mob = document.querySelector("#mbl").value;
    var tr = document.createElement("tr");
    console.log(name)
    var td1 = document.createElement("td");
    td1.innerText = name;
    var td2 = document.createElement("td");
    td2.innerText = id;
    var td3 = document.createElement("td");
    td3.innerText = spec;
    var td4 = document.createElement("td");
    td4.innerText = exp;
    var td5 = document.createElement("td");
    td5.innerText = email;
    var td6 = document.createElement("td");
    td6.innerText = mob;
    var td7 = document.createElement("td");
    if(exp>5){
        td7.innerText = "Senior";
    }
    else if(exp<2){
        td7.innerText = "Trainee";
    }
    else{
        td7.innerText = "Junior";
    }
    var td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.style.backgroundColor = "red";
    td8.addEventListener("click", deleteRow);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody").append(tr)
    function deleteRow(){
        event.target.parentNode.remove()
    }

}

