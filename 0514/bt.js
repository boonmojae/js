let users = [];
    let myModal;

    window.addEventListener('DOMContentLoaded', () => {
      myModal = new bootstrap.Modal(document.getElementById('myModal'));
    });

    add_user = () => {
      // let myModal = new bootstrap.Modal(document.getElementById('myModal'));
      myModal.show();
    }

    save_user = () => {
      // let myModal = new bootstrap.Modal(document.getElementById('myModal'));
      const userName = document.getElementById('userName').value
      const userEmail = document.getElementById('userEmail').value
      if (userName && userEmail) {
        users.push({ name: userName, email: userEmail });
        updateUserList();
        myModal.hide();
      } else {
        alert('이름과 이메일을 모두 입력하세요')
      }
    }

    updateUserList = () => {
      document.getElementById('userList').style.display = 'none'
      const userDisplay = document.getElementById('userDisplayArea');
      const newUser = users[users.length - 1];

      const userDiv = document.createElement('div');
      userDiv.classList.add('user-item');
      userDiv.innerHTML = `이름:${newUser.name} - 이메일 : ${newUser.email}`;
      userDisplay.appendChild(userDiv);

      document.getElementById('user_count').innerText = `총 사용자\n${users.length}명`
    }