function checkPin() {
    const pinInput = document.getElementById("pinInput").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // 핀 번호와 방 번호 매핑
    const pinDatabase = {
        16383: "예배당 1",
        6291: "예배당 1",
        9982: "예배당 2",
        11564: "예배당 2",
        10339: "예배당 3",
        10784: "예배당 3",
        9559: "예배당 4",
        7526: "예배당 4",
        9841: "벚나무관 1층 1",
        18458: "벚나무관 1층 1",
        10882: "벚나무관 1층 2",
        6599: "벚나무관 1층 2",
        13128: "벚나무관 1층 3",
        16541: "벚나무관 1층 3",
        11325: "벚나무관 1층 4",
        13938: "벚나무관 1층 4",
        16217: "벚나무관 1층 5",
        7329: "벚나무관 1층 5",
        5974: "벚나무관 1층 6",
        9707: "벚나무관 1층 6",
        5941: "벚나무관 1층 7",
        17114: "벚나무관 1층 7",
        2885: "돌아다녀요",
        16306: "빵애에요",
        7252: "진수성찬하세요",
        9302: "화이팅하세요",
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