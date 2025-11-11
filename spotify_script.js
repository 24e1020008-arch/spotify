"use strict";

// Đợi cho đến khi toàn bộ cây DOM được tải xong
document.addEventListener("DOMContentLoaded", function() {

    // Lấy các phần tử DOM
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    const logoutButton = document.getElementById('logout-button');

    // == Xử lý Đăng nhập ==
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Ngăn chặn form gửi đi
            event.preventDefault();

            // Lấy giá trị (đảm bảo các phần tử tồn tại)
            const username = usernameInput ? usernameInput.value : '';
            const password = passwordInput ? passwordInput.value : '';

            // Kiểm tra tài khoản
            if (username === 'admin' && password === '123') {
                // Đăng nhập thành công
                
                // Ẩn trang đăng nhập
                if (loginPage) {
                    loginPage.classList.add('hidden');
                    // Bỏ các lớp căn giữa của trang đăng nhập
                    loginPage.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen');
                }

                // Hiển thị trang chủ
                if (homePage) {
                    homePage.classList.remove('hidden');
                }

                // Xóa thông báo lỗi (nếu có)
                if (errorMessage) {
                    errorMessage.classList.add('hidden');
                }
            } else {
                // Đăng nhập thất bại
                if (errorMessage) {
                    errorMessage.classList.remove('hidden');
                }
            }
        });
    }

    // == Xử lý Đăng xuất ==
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Ẩn trang chủ
            if (homePage) {
                homePage.classList.add('hidden');
            }

            // Hiển thị lại trang đăng nhập
            if (loginPage) {
                loginPage.classList.remove('hidden');
                // Thêm lại các lớp căn giữa
                loginPage.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen');
            }

            // Xóa mật khẩu đã nhập
            if (passwordInput) {
                passwordInput.value = '';
            }
        });
    }
});