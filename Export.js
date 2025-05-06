
function updateExportPreview() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const format = document.getElementById("format").value;
  
    console.log(`Previewing export: From ${startDate} to ${endDate}, Format: ${format}`);
  }
  
  
  function toggleScheduledExport() {
    const scheduledExport = document.getElementById("scheduledExport").checked;
    if (scheduledExport) {
      alert("Scheduled export is enabled! The report will be automatically generated at the set time.");
    } else {
      alert("Scheduled export is disabled.");
    }
  }
  
  
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
  
  
  function downloadCSV(startDate, endDate) {
    let csvContent = "Date,User,Action\n";
    
    csvContent += `${startDate},Alice,Login\n`;
    csvContent += `${endDate},Bob,Logout\n`;
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `report_${startDate}_to_${endDate}.csv`);
    link.click();
  }
  
 
  function downloadPDF(startDate, endDate) {
    alert(`PDF download for report from ${startDate} to ${endDate} is triggered!`);
    
  }
  
