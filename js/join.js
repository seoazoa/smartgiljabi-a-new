$(document).ready(function() {
    $('#btn1').click(function(event){
        //체크박스 체크 상태 확인
        if(!$('#check1').is(":checked") || !$('#check2').is(":checked")) {
            alert("두 체크박스 모두 체크해야 합니다.");
            event.preventDefault();
        }
    });
});