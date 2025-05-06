function validateSettings() {
    const emailChecked = document.getElementById("emailToggle").checked;
    const pushChecked = document.getElementById("pushToggle").checked;
    const errorMsg = document.getElementById("errorMsg");
  
    if (!emailChecked && !pushChecked) {
      errorMsg.style.display = "block";
      return false; 
    }
  
    errorMsg.style.display = "none";
    alert("Notification settings saved!");
    return true;
  }
  