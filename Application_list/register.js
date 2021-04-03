function newRegister() {
    var newP = document.createElement("p"); //p요소 만들기
    var userName = document.querySelector("#userName"); //텍스트 필드 내용 가져오기
    var newText = document.createTextNode(userName.value) //새로운 노드 만들기
    newP.appendChild(newText); //newText노드를 newP노드의 자식 노드로 연결함
    var nameList = document.querySelector("#nameList"); //#nameList 가져옴 
    nameList.appendChild(newP); //newP노드를 nameList 노드의 자식 노드로 연결
    userName.value = ""; //다른 이름을 입력할 수 있도록 텍스트 필드 비우기
}