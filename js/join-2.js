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
//   ============================================================================================
$(document).ready(function() {
    //중복 확인 여부 추적
    var isIdChecked = false;
    // 중복 확인 결과 저장 (true: 사용 가능 , false: 사용 불가)
    var isIdAvailable = false;

    //회원가입 함수
    function signUp() {
        const id = $('#signUp-Id').val();
        const pw = $('#signUp-Pwd').val();
        // 중복 확인을 하지 않았거나, 아이디가 사용 불가일 경우
        if(!isIdChecked || !isIdAvailable) {
            alert('아이디 중복 확인이 필요합니다.');
            return;
        }
        if (!id || !pw){
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }
        localStorage.setItem(id, pw);
        alert('회원가입');
        $(location).attr('href' , 'login.html'); // 로그인 페이지로 이동
    }
    
    //ID 중복 확인 함수
    function double_Check() {
        const id = $('#signUp-Id').val();
        if(!id) {
            alert('아이디를 입력하세요.');
            isIdChecked = false;
            return;
        }
        if(localStorage.getItem(id) !== null) {
            alert('이미 존재하는 ID입니다.');
            isIdAvailable = false;
        } else {
            alert('사용 가능한 아이디 입니다.');
            isIdAvailable = true;
        }
        isIdChecked = true;
    }

    // 회원가입 버튼 클릭 이벤트
    $('#signUp_Btn').click(function() {
        signUp();
    });

    // 중복 확인 버튼 클릭 이벤트
    $('#double_Check_Btn').click(function() {
        double_Check();
    });

    // 로그인 페이지로 이동 클릭 이벤트
    $('#login_Btn').click(function() {
        $(location).attr('href' , 'login.html');
    });
});