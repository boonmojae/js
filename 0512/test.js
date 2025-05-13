document.querySelector(".btn.btn-primary").addEventListener('click', function(event) {
    event.preventDefault();

    const list = document.getElementById("messageList");

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const username = usernameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    console.log(username);
    console.log(email);
    console.log(message);

    if (!username || !email || !message) {
      alert("정보를 입력해주세요");
      return;
    }

    const newMes = document.createElement("li");
    newMes.classList.add("list-group-item");
    newMes.style.position = "relative";

    // li안에 x버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");

    // x버튼 위치
    deleteBtn.style.position = "absolute";
    deleteBtn.style.top = "5px";
    deleteBtn.style.right = "20px";//position 사용할때 위치 지정

    deleteBtn.addEventListener("click", function () {
        list.removeChild(newMes);
    });

    newMes.innerText = `${message} ${username} ${email}`;
    newMes.append(deleteBtn);

    list.append(newMes);

    usernameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});

function clearForm() {
    const list = document.getElementById("messageList");
    list.innerHTML = "";
}
