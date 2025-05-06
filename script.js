function validateMeasurements(event) {
    event.preventDefault();
    let isValid = true;
  
    const weight = document.getElementById("weight").value;
    const waist = document.getElementById("waist").value;
    const date = document.getElementById("date").value;
  
    document.getElementById("weight-error").textContent = "";
    document.getElementById("waist-error").textContent = "";
    document.getElementById("date-error").textContent = "";
  
    if (weight < 1 || weight > 300) {
      document.getElementById("weight-error").textContent = "Weight must be between 1 and 300.";
      isValid = false;
    }
  
    if (waist < 40 || waist > 200) {
      document.getElementById("waist-error").textContent = "Waist must be between 40 and 200.";
      isValid = false;
    }
  
    if (new Date(date) > new Date()) {
      document.getElementById("date-error").textContent = "Date cannot be in the future.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Measurements logged successfully!");
    }
  
    return isValid;
  }
  
  function validatePhoto(event) {
    event.preventDefault();
    let isValid = true;
  
    const photoInput = document.getElementById("photo");
    const file = photoInput.files[0];
    document.getElementById("photo-error").textContent = "";
  
    if (!file) {
      document.getElementById("photo-error").textContent = "Please select a photo.";
      isValid = false;
    } else {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        document.getElementById("photo-error").textContent = "Only JPG or PNG allowed.";
        isValid = false;
      }
      if (file.size > 5 * 1024 * 1024) {
        document.getElementById("photo-error").textContent = "Max file size is 5MB.";
        isValid = false;
      }
    }
  
    if (isValid) {
      alert("Photo uploaded successfully!");
    }
  
    return isValid;
  }
  
  function validateTrend(event) {
    event.preventDefault();
    let isValid = true;
  
    const start = new Date(document.getElementById("start-date").value);
    const end = new Date(document.getElementById("end-date").value);
    document.getElementById("trend-error").textContent = "";
  
    if (start > end) {
      document.getElementById("trend-error").textContent = "Start date can't be after end date.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Trend range valid!");
    }
  
    return isValid;
  }
  