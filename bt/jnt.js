
// ẤN thanh phản ứng responsive
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const menuItems = document.querySelectorAll('.header_navbar-item a'); // Chọn tất cả các mục menu (liên kết)

// Mở hoặc đóng menu và overlay khi nhấn vào nút toggle
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
    overlay.classList.toggle('show'); // Hiển thị hoặc ẩn overlay
});

// Đóng menu và overlay khi nhấn vào overlay
overlay.addEventListener('click', function() {
    closeMenu();
});

// Đóng menu khi nhấn ngoài menu và overlay
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// Đóng menu và overlay khi nhấn vào một mục trong menu
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        closeMenu(); // Đóng menu và overlay khi nhấn vào menu item
    });
});

// Hàm đóng menu và overlay
function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('show');
}

