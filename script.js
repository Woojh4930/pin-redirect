function checkPin() {
    const pinInput = document.getElementById("pinInput").value;
    const errorMessage = document.getElementById("errorMessage");

    // 핀 번호와 이동할 URL 매핑
    const pinDatabase = {
        "1234": "success.html",
        "5678": "access_granted.html",
        "9012": "secret_code.html"
    };

    // 핀 번호 확인 후 페이지 이동
    if (pinDatabase[pinInput]) {
        window.location.href = pinDatabase[pinInput];
    } else {
        errorMessage.innerText = "잘못된 핀 번호입니다!";
    }
}
