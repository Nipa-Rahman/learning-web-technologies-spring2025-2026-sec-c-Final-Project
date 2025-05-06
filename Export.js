// Function to update export preview based on selections
function updateExportPreview() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const format = document.getElementById("format").value;
  
    console.log(`Previewing export: From ${startDate} to ${endDate}, Format: ${format}`);
  }
  
  // Function to toggle scheduled export
  function toggleScheduledExport() {
    const scheduledExport = document.getElementById("scheduledExport").checked;
    if (scheduledExport) {
      alert("Scheduled export is enabled! The report will be automatically generated at the set time.");
    } else {
      alert("Scheduled export is disabled.");
    }
  }
  
  // Function to download the report
  function downloadReport() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const format = document.getElementById("format").value;
  
    if (!startDate || !endDate) {
      alert("Please select both start and end date.");
      return;
    }
  
    if (format === "csv") {
      downloadCSV(startDate, endDate);
    } else if (format === "pdf") {
      downloadPDF(startDate, endDate);
    }
  }
  
  // Function to download CSV
  function downloadCSV(startDate, endDate) {
    let csvContent = "Date,User,Action\n";
    // Generate the CSV content (replace with real data fetching)
    csvContent += `${startDate},Alice,Login\n`;
    csvContent += `${endDate},Bob,Logout\n`;
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `report_${startDate}_to_${endDate}.csv`);
    link.click();
  }
  
  // Function to simulate PDF download (you can integrate with a PDF library)
  function downloadPDF(startDate, endDate) {
    alert(`PDF download for report from ${startDate} to ${endDate} is triggered!`);
    // You can replace this with actual PDF generation logic using a library like jsPDF
  }
  