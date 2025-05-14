function addUser() {
  const usernameInput = document.getElementById("recipient-name");
  const textInput = document.getElementById("message-text");

  const name = usernameInput.value;
  const text = textInput.value;

  // 유효성 검사: 이름과 설명이 비어 있지 않은지 확인
  if (!name || !text) {
    alert("이름과 설명을 입력해주세요.");
    return;  // 입력값이 없으면 이후 코드를 실행하지 않음
  }

  // 사용자 목록 리스트 가져오기
  const userList = document.getElementById("userList");

  // 새로운 li 항목 만들기
  const newList = document.createElement("li");
  newList.classList.add("list-group-item");
  newList.textContent = `${name} - ${text}`;

  // 새로운 li 항목을 사용자 목록에 추가
  userList.appendChild(newList);

  // 입력 필드 초기화
  usernameInput.value = "";
  textInput.value = "";

  // 모달 닫기
  const modal = new bootstrap.Modal(document.getElementById("userAddModal"));
  modal.hide();  // 모달을 닫는다.
}
