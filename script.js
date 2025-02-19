function checkPin() {
    const pinInput = document.getElementById("pinInput").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // 핀 번호와 방 번호 매핑
    const pinDatabase = {
        "박주은김성찬": "소망101",
        "우주황강한이": "소망102",
        "이아름최정욱": "소망103"
    };

    if (pinDatabase[pinInput]) {
        // success.html로 이동하면서 방 번호를 URL 파라미터로 전달
        window.location.href = `success.html?room=${encodeURIComponent(pinDatabase[pinInput])}`;
    } else {
        errorMessage.innerText = "잘못된 핀 번호입니다!";
    }
}

// ✅ 엔터(Enter) 키 입력 감지하여 checkPin() 실행
document.getElementById("pinInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작(폼 제출 등) 방지
        checkPin();
    }
});

function goHome() {
    window.location.href = "index.html";
}