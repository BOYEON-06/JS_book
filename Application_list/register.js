function newRegister() {
    var newP = document.createElement("p"); //p요소 만들기
    var userName = document.querySelector("#userName"); //텍스트 필드 내용 가져오기
    var newText = document.createTextNode(userName.value) //새로운 노드 만들기
    newP.appendChild(newText); //newText노드를 newP노드의 자식 노드로 연결함

    // X 버튼을 통해 이름 삭제하기
    var delBtn = document.createElement("span"); // 새 span요소 생성
    var delTxt = document.createTextNode(" X"); //새 텍스트 노드 생성
    delBtn.setAttribute("class", "del"); // 버튼에 class속성 설정
    delBtn.appendChild(delTxt); // 텍스트 노드를 button 요소의 자식요소로 추가
    newP.appendChild(delBtn); // del 버튼을 p요소의 자식 요소로 추가

    var nameList = document.querySelector("#nameList"); //#nameList 가져옴 
    nameList.insertBefore(newP, nameList.childNodes[0]); // p 요소를 #nameList 맨 앞에 추가하기
    userName.value = ""; //다른 이름을 입력할 수 있도록 텍스트 필드 비우기

    var removeBtns = document.querySelectorAll(".del");
    for (var i=0; i<removeBtns.length; i++) { // removeBtns에 있는 요소 전체를 반복
        removeBtns[i].addEventListener("click", function(){ 
            if(this.parentNode.parentNode) // 현재 노드(this)의 부모 노드의 부모 노드가 있을 경우 실행
                this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}
