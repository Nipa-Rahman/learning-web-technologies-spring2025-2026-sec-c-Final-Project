function validateUserForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value;

  // Name cannot be empty
  if (name.length === 0) {
    alert("Name field cannot be empty.");
    return false;
  }

  // Name must have at least 2 words
  const words = name.split(" ").filter(Boolean);
  if (words.length < 2) {
    alert("Please enter at least two words for your full name.");
    return false;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Role validation
  if (!role) {
    alert("Please select a role.");
    return false;
  }

  // Redirect based on role
  if (role === "admin") {
    window.location.href = "Admin-admin.html";
  } else if (role === "user") {
    window.location.href = "Admin-user.html";
  }

  return true;
}
