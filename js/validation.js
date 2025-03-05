function switchToSignup() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
}

function switchToLogin() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#login-form form").addEventListener("submit", function (event) {
        event.preventDefault();
        validateLoginForm();
    });

    document.querySelector("#signup-form form").addEventListener("submit", function (event) {
        event.preventDefault();
        validateSignupForm();
    });
});

function validateLoginForm() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (username === "") {
        alert("نام کاربری را وارد کنید");
        return;
    }
    if (password === "") {
        alert("رمز عبور را وارد کنید");
        return;
    }
    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
        alert("نام کاربری یا رمز عبور اشتباه است");
        return;
    }
    alert("ورود موفقیت‌آمیز بود");
    window.location.href = "dashboard.html";
}

function validateSignupForm() {
    const name = document.getElementById("signup-name").value.trim();
    const lastname = document.getElementById("signup-lastname").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (name === "") {
        alert("نام را وارد کنید");
        return;
    }
    if (lastname === "") {
        alert("نام خانوادگی را وارد کنید");
        return;
    }
    if (email === "" || !validateEmail(email)) {
        alert("ایمیل معتبر وارد کنید");
        return;
    }
    if (username === "") {
        alert("نام کاربری را وارد کنید");
        return;
    }
    if (password.length < 6) {
        alert("رمز عبور باید حداقل ۶ کاراکتر باشد");
        return;
    }
    
    const user = { name, lastname, email, username, password };
    localStorage.setItem("user", JSON.stringify(user));
    
    alert("ثبت‌نام موفقیت‌آمیز بود، حالا می‌توانید وارد شوید");
    switchToLogin();
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function switchToLogin() {
    document.getElementById("signup-form").classList.remove("active");
    document.getElementById("login-form").classList.add("active");
}
