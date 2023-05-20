// Array of employees
var employees = [
  { id: 1, name: "John", age: 18, profession: "developer" },
  { id: 2, name: "Jack", age: 20, profession: "developer" },
  { id: 3, name: "Karen", age: 19, profession: "admin" }
];

// Function to filter employees based on profession
function filterEmployees() {
  var selectedProfession = document.getElementById("professionSelect").value;

  if (selectedProfession === "") {
    alert("Please select a profession before clicking the button.");
    return;
  }

  var filteredEmployees = employees.filter(function (employee) {
    return employee.profession === selectedProfession;
  });

  console.log(filteredEmployees); // Replace with your own code to display the filtered employees
}

// Add event listener to the filter button
document.getElementById("filterButton").addEventListener("click", filterEmployees);



// Array to store user data
var users = [];

// Function to add a new user
function addUser() {
  var name = document.getElementById("nameInput").value;
  var profession = document.getElementById("professionInput").value;
  var age = document.getElementById("ageInput").value;

  // Validate inputs
  if (name === "" || profession === "" || age === "") {
    alert("Please fill in all the user details.");
    return;
  }

  // Create a new user object
  var user = {
    name: name,
    profession: profession,
    age: age
  };

  // Add the user to the array
  users.push(user);

  // Update the user list in the UI
  var userList = document.getElementById("userList");
  var listItem = document.createElement("li");
  listItem.textContent = `${name} - ${profession} (${age} years old)`;

  userList.appendChild(listItem);
  userList.appendChild(listItem);
}

// Add event listener
document.getElementById("addButton").addEventListener("click", addUser);
