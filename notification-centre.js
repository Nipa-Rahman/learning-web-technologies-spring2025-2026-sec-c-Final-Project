
function toggleNotifications() {
  const notificationList = document.getElementById("notificationList");
  notificationList.style.display = (notificationList.style.display === "none" ? "block" : "none");
  
  
  document.querySelectorAll('.notification.unread').forEach(notification => {
    notification.classList.remove('unread');
  });
  
  
  updateUnreadCount();
}


function updateUnreadCount() {
  const unreadNotifications = document.querySelectorAll('.notification.unread').length;
  document.getElementById("unreadCount").textContent = unreadNotifications;
}
