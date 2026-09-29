// Dữ liệu User lưu trong LocalStorage
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Đăng ký
function handleRegister(e) {
  e.preventDefault();
  const username = document.getElementById('regUser').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPass').value;

  const users = getUsers();
  if (users[username]) {
    alert("Tên đăng nhập đã tồn tại!");
    return;
  }

  users[username] = { email, password };
  saveUsers(users);

  alert("Đăng ký thành công! Trang web sẽ làm mới lại.");
  window.location.reload(); // Reload trang khi đăng ký thành công
}

// Đăng nhập
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;

  const users = getUsers();
  // Cho phép đăng nhập Demo hoặc dùng Account đã đăng ký
  if ((username === 'demo' && password === '123') || (users[username] && users[username].password === password)) {
    localStorage.setItem('currentUser', username);
    checkAuth();
  } else {
    alert("Tài khoản hoặc mật khẩu không đúng!");
  }
}

// Quên mật khẩu - Gửi OTP qua Email
let generatedOTP = null;
let resetUser = null;

function sendOTP(e) {
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim();
  const users = getUsers();
  
  const foundUser = Object.keys(users).find(u => users[u].email === email);
  if (!foundUser) {
    alert("Email này chưa được đăng ký trong hệ thống!");
    return;
  }

  resetUser = foundUser;
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Giả lập gửi Email
  alert(`[MÔ PHỎNG EMAIL] Mã OTP gửi tới ${email} là: ${generatedOTP}`);
  
  document.getElementById('otpStep').style.display = 'block';
  document.getElementById('sendOtpBtn').style.display = 'none';
}

function verifyOTPAndReset(e) {
  e.preventDefault();
  const inputOTP = document.getElementById('otpInput').value.trim();
  const newPass = document.getElementById('newPassInput').value;

  if (inputOTP !== generatedOTP) {
    alert("Mã OTP không đúng!");
    return;
  }

  const users = getUsers();
  users[resetUser].password = newPass;
  saveUsers(users);

  alert("Đổi mật khẩu thành công! Hãy đăng nhập lại.");
  switchAuthForm('login');
}

function logout() {
  localStorage.removeItem('currentUser');
  checkAuth();
}

function checkAuth() {
  const user = localStorage.getItem('currentUser');
  const authSec = document.getElementById('authSection');
  const appSec = document.getElementById('appSection');
  const userNav = document.getElementById('userNav');

  if (user) {
    authSec.style.display = 'none';
    appSec.style.display = 'block';
    userNav.innerHTML = `<span>👤 ${user}</span> <button class="btn-logout" onclick="logout()">Đăng xuất</button>`;
  } else {
    authSec.style.display = 'block';
    appSec.style.display = 'none';
    userNav.innerHTML = '';
  }
}
