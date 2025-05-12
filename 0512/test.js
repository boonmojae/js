 document.querySelector(".btn.btn-primary").addEventListener('click', function(event) {
    event.preventDefault();

    const list = document.getElementById("messageList");

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(username);
    console.log(email);
    console.log(message);

    if (!username || !email || !message) {
      alert("입력해주세요");
      return;
    }

    const newMes = document.createElement("li");
    newMes.innerText = `${message} ${username} ${email}`;

    list.append(newMes);

    
  })
  
  function clearForm() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  username.value = "";
  email.value = "";
  message.value = "";
}