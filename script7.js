const users = [];

document.getElementById('savebtn').addEventListener("click", function () {
    const empId = document.getElementById('emp_id').value;
    const empName = document.getElementById('emp_name').value;
    const empEmail = document.getElementById('emp_email').value;

    let isValid = true;
    document.getElementById('emp_id_error').textContent="";
    document.getElementById('emp_name_error').textContent="";
    document.getElementById('emp_email_error').textContent="";
    if(empId === "" && empName === ""){
      document.getElementById('emp_id_error').textContent="Please Enter the id";
      document.getElementById('emp_name_error').textContent="Please Enter the name";
      isValid=false;
    }
    if(empName === ""){
      document.getElementById('emp_name_error').textContent="Please Enter the name";
      isValid=false;

    }
    if(empEmail === ""){
      document.getElementById('emp_email_error').textContent="Please Enter the email";
      isValid=false;

    }
    if(!isValid){
      return false;
    }
    else
    {
      $('#myModal').modal('hide');
      addEmployeeToTable(empId, empName, empEmail, "");
      
    }

    
    // let photoUrl = "";
    // if (empPhoto) {
    //     const reader = new FileReader();
    //     reader.onload = function (e) {
    //         photoUrl = e.target.result;
    //         addEmployeeToTable(empId, empName, empEmail, photoUrl);
    //     };
    //     reader.readAsDataURL(empPhoto);
    // } 
    // else {
    //     addEmployeeToTable(empId, empName, empEmail, ""); 
    // }
});


function addEmployeeToTable(empId, empName, empEmail) {
    
    const formData = {
        emp_id: empId,
        emp_name: empName,
        emp_email: empEmail,
        
    };
    

    console.log(JSON.stringify(formData, null, 2));

    users.push(formData);

    displayTableData();
    
    
}
function displayTableData() {
    const tableBody = document.querySelector('#tablestruct tbody');
    tableBody.innerHTML = ""; 

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.emp_id}</td>
            <td>${user.emp_name}</td>
            <td>${user.emp_email}</td>
            
        `;
        tableBody.appendChild(row);
    });
}

function clearFormFields(){
  document.getElementById('emp_id').value="";
  document.getElementById('emp_name').value="";
  document.getElementById('emp_email').value="";
  // document.getElementById('emp_photo').value="";
  document.getElementById('emp_id_error').value="";
  document.getElementById('emp_name_error').value="";
  document.getElementById('emp_email_error').value="";
  // document.getElementById('emp_photo_error').value="";


}
$('#myModal').on('hidden.bs.modal', function () {
  clearFormFields();
});
