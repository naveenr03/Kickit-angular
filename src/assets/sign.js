function validateForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phnum").value;
  const password = document.getElementById("pass").value;

  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    alert("All fields are required.");
    return flase;
  } else if (phoneNumber.length != 10) {
    alert("Invalid Phone number");
    return false;
  }

  alert("Created your Account Successfully");
}
