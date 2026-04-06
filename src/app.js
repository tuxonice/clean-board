// ============================================================
// CleanBoard – shared scripts
// ============================================================

// Forms submenu chevron rotation
const formsSubmenu = document.getElementById("forms-submenu");
if (formsSubmenu) {
  formsSubmenu.addEventListener("show.bs.collapse", () => {
    document.querySelector("[href='#forms-submenu'] .submenu-arrow").style.transform = "rotate(180deg)";
  });
  formsSubmenu.addEventListener("hide.bs.collapse", () => {
    document.querySelector("[href='#forms-submenu'] .submenu-arrow").style.transform = "rotate(0deg)";
  });
}

// Mobile sidebar toggle
const menuBtn = document.getElementById("menu-btn");
const sidebar  = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebar-backdrop");

if (menuBtn && sidebar && backdrop) {
  function openSidebar()  { sidebar.classList.add("open");    backdrop.classList.add("show"); }
  function closeSidebar() { sidebar.classList.remove("open"); backdrop.classList.remove("show"); }
  menuBtn.addEventListener("click", () => sidebar.classList.contains("open") ? closeSidebar() : openSidebar());
  backdrop.addEventListener("click", closeSidebar);
}

// Notifications: mark all as read
const markAllRead = document.getElementById("mark-all-read");
if (markAllRead) {
  markAllRead.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".notif-item.unread").forEach(el => el.classList.remove("unread"));
    const badge = document.getElementById("notif-badge");
    badge.textContent = "0";
    badge.classList.add("d-none");
  });
}
