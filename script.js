document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // 防止表單提交

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 將數據轉換為 x-www-form-urlencoded 格式
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzJVaNy7KzKl662OFB0I9UDJGRgkXPsoApqxNL_BTjMrkEowWaCGyoqlAbidS8zT10P/exec', { // 替換為您的 Google Apps Script URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });

        const result = await response.json();
        const messageElement = document.getElementById('message');

        if (result.success) {
            messageElement.textContent = '登入成功！';
            messageElement.style.color = 'green';
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // 重定向到新的頁面
            }, 1000);
        } else {
            messageElement.textContent = '使用者名稱或密碼錯誤！';
            messageElement.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = '無法連接到伺服器！';
    }
});