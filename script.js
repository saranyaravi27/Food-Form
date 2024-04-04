function onFormSubmit(){
  var formData = readFromData();
  addData(formData);
  clearInputs();
}


function readFromData(){
  var formData = {}
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["address"] = document.getElementById("address").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["zip"] = document.getElementById("zip").value;
  formData["country"] = document.getElementById("country").value;
  formData["state"] = document.getElementById("state").value;
  formData["foods"] = listedfoods();
  return formData;
}

// get list of selected food items
function listedfoods(){
  let result =[];
  document.querySelectorAll('[type="checkbox"]').forEach(item =>{
        if(item.checked=== true){
          result.push(item.value);
        }
  })
  return result;
  }
// add data to the table in the form
function addData(data){
  let table=document.getElementById("outputtable").getElementsByTagName('tbody')[0];
  let newRow=table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.gender;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.pincode;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.country;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.state;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.foods;
  clearInputs();
  }
// clear content
  function clearInputs(){
    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("address").value="";
    document.getElementById("gender").value="";
    document.getElementById("zip").value="";
    document.getElementById("country").value="";
    document.getElementById("state").value="";
    document.getElementById("foodReq").value="";
  }

