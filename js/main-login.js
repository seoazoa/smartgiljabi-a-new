document.addEventListener("DOMContentLoaded", function() {
    // UI 업데이트 함수
    function updateUI() {
        var isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn) {
            // 로그인 상태일 때
            document.getElementById("login-section").style.display = "none";
            document.getElementById("dashboard-section").style.display = "block";
            document.getElementById("signup-section").style.display = "none";

            // 유저네임 표시
            var username = localStorage.getItem("username");
        } else {
            // 로그아웃 상태일 때
            document.getElementById("login-section").style.display = "block";
            document.getElementById("dashboard-section").style.display = "none";
            document.getElementById("signup-section").style.display = "block";
        }
    }

    // 페이지 로드 시 UI 업데이트
    updateUI();

    // 로그인 버튼 클릭 시
    document.getElementById("login-button").addEventListener("click", function() {

        // UI 업데이트
        // localStorage.setItem("isLoggedIn", true);
        updateUI();
    });

    // 로그아웃 버튼 클릭 시
    document.getElementById("logout-button").addEventListener("click", function() {
        // 로그아웃 후의 추가 작업 (예: 유저네임 제거 등)
        // ...

        // UI 업데이트
        localStorage.removeItem("isLoggedIn");
        updateUI();
    });
});
