document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 模擬登入邏輯
    if (username === 'user' && password === 'password') {
        document.getElementById('message').textContent = '登入成功！';
        document.getElementById('message').style.color = 'green';

        // 設置延遲，然後重定向到主頁面
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // 重定向到新的頁面
        }, 1000); // 1 秒後重定向
    } else {
        document.getElementById('message').textContent = '使用者名稱或密碼錯誤！';
    }
});