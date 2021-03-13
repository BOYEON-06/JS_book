var itemList = []; // "itemList" 배열 생성

var addBtn = document.querySelector("#add"); // #add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList); // addBtn을 클릭하면 addList 함수를 

// - 엔터키 이벤트 추가 할 예정
var input = document.getElementById("item");
input.addEventListener("keydown", function(event){
    if(event.keycode === 13){
        addList();
        event.preventDefault();
        document.getElementById("add").click();
    }
});

// 배열에 아이템 추가
function addList(){
    var item = document.querySelector("#item"); 
    if(item.value != null) {
        itemList.push(item.value); // itemList 배열 끝에 item 변수값 추가
        item.value = ""; // id = "item"인 요소 값을 지움
        item.focus(); // 텍스트 필드에 focus() 함수 적용
    }
    showList(); // 목록을 표시하는 showList() 함수 실행
}

// 화면에 표시
function showList() {
    var list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장 
    for(var i=0; i<itemList.length; i++){ // 배열 요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id="+ i +"> X </span></li>"; // 각 요소를 <li>~</li>로 묶음
    }
    list += "</ul>"; //목록을 끝내는 </ul> 태그 저장
    document.querySelector("#itemList").innerHTML = list; // #itemList인 요소에 list 변수값 표시

    var remove = document.querySelectorAll(".close"); // 삭제 버튼을 배열의 형태인 변수로 저장
    for (var i=0; i<remove.length; i++) { // remove 배열의 모든 요소 확인
        remove[i].addEventListener("click", removeList); // 요소 클릭 시 removeList() 실행
    }
}

function removeList() {
    var id = this.getAttribute("id"); // this(누른 삭제 버튼)의 값을 가져와 id 변수에 저장
    itemList.splice(id, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제 
    showList();
}
