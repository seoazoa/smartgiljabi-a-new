document.addEventListener("DOMContentLoaded", function() {
    var menuList = document.querySelector(".login-menu ul");
    var listItems = menuList.querySelectorAll("li");

    listItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            // 두 번째 요소는 회원가입이므로 두 번째 요소를 클릭했을 때만 처리
            if (index === 1) {
                window.location.href = "login.html"; // 두 번째 li를 클릭하면 login.html로 이동
            } else if (index === 2) {
                window.location.href = "join.html"; // 세 번째 li를 클릭하면 join.html로 이동
            }
        });
    });
});
// ========================================================================
$(document).ready(function() {
    $('#login_Btn').click(function() { // 로그인 버튼에 대한 클릭 이벤트 바인딩
        const id = $('#login-Id').val(); // 필드 아이디 값 가져오기
        const pw = $('#login-Pwd').val(); // 필드 비밀번호 값 가져오기

        const storedPw = localStorage.getItem(id); // 필드 아이디 값을 토대로 저장된 비밀번호 가져오기

        if(!id || !pw) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
        } else if(pw === storedPw) {
            alert('로그인 성공');
            localStorage.setItem('loginUser' , id); // 로그인한 사용자 아이디 로컬 스토리지에 저장
            $(location).attr('href' , 'index.html'); // 로그인 성공 페이지로 이동
        } else {
            alert('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    });

    // 회원가입 페이지로 이동하는 이벤트 버튼
    $('#signUp_Btn').click(function() {
        $(location).attr('href' , 'signUp.html');
    });
});