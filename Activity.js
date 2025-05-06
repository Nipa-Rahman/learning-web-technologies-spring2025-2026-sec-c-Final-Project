// Sample logs (you would fetch from a database in a real scenario)
const logs = [
  { user: "Alice", action: "Login", date: "2025-05-01" },
  { user: "Bob", action: "View Profile", date: "2025-05-02" },
  { user: "Alice", action: "Change Password", date: "2025-05-03" },
  { user: "Charlie", action: "Login", date: "2025-05-04" },
  { user: "Bob", action: "Logout", date: "2025-05-05" }
];

// Function to filter logs based on user input
function filterLogs() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const userFilter = document.getElementById("userFilter").value.toLowerCase();
  const actionFilter = document.getElementById("actionFilter").value.toLowerCase();

  const filteredLogs = logs.filter(log => {
    const matchesDate = (!startDate || log.date >= startDate) && (!endDate || log.date <= endDate);
    const matchesUser = log.user.toLowerCase().includes(userFilter);
    const matchesAction = log.action.toLowerCase().includes(actionFilter);
    return matchesDate && matchesUser && matchesAction;
  });

  displayLogs(filteredLogs);
}

// Function to display filtered logs
function displayLogs(filteredLogs) {
  const logList = document.getElementById("logList");
  logList.innerHTML = "";

  if (filteredLogs.length === 0) {
    logList.innerHTML = "<li>No logs found.</li>";
  } else {
    filteredLogs.forEach(log => {
      const li = document.createElement("li");
      li.textContent = `${log.date} | ${log.user} | ${log.action}`;
      logList.appendChild(li);
    });
  }
}

// Function to export logs as CSV
function exportLogs() {
  let csvContent = "Date,User,Action\n";

  logs.forEach(log => {
    csvContent += `${log.date},${log.user},${log.action}\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "audit_logs.csv");
  link.click();
}
