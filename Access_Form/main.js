var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

// onchange: 필드안의 내용이 바뀔 때 발생
userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

// 아이디 제한
function checkId(){
    if (userId.value.length < 4 || userId.value.length > 15){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select();
    }
}

// 비밀번호 제한
function checkPw(){
    if(pw1.value.length < 8){
            alert("비밀번호는 8자리 이상이어야 합니다.");
            pw1.value = "";
            pw1.focus();
    }
}

// pw1 pw2 비교
function comparePw(){
    if(pw1.value != pw2.value){
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value="";
        pw2.focus();
    }
}