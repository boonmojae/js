function newList() {
  const songList = [
    "너에게 닿기를",
    "like JENNIE",
    "Drowning",
    "모르시나요(PROD.로코베리)",
    "TOO BAD",
    "HOME SWEET HOME",
    "나는 반딧불",
    "Whiplash",
    "REBEL HEART",
    "HOT",
  ];

  const ol = document.querySelector(".new-list-group");


  if (ol.style.display === "none" || ol.style.display === "") {
    ol.style.display = "block";
  } else {
    ol.style.display = "none";
  }

  ol.innerHTML = "";

  // foreach -----------------------------------------
  songList.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${song}`;
    li.classList.add("list-group-item");
    ol.appendChild(li);
    console.log(`${index + 1}. ${song}`);
  })



  // while ------------------------------------
  // let index = 0;
  // while (index < songList.length) {
  //   const li = document.createElement("li");
  //   li.textContent = `${index + 1}. ${songList[index]}`;
  //   li.classList.add("list-group-item");
  //   ol.appendChild(li);
  //   index++;
  // }


  // for of -----------index가 필요 없을때 사용(필요하면 증감식 추가)
  // let index = 0;
  // for (const song of songList) {
  //   const li = document.createElement("li");
  //   li.textContent = `${index + 1}. ${song}`;
  //   li.classList.add("list-group-item");
  //   ol.appendChild(li);
  //   console.log(`${index + 1}. ${song}`);
  //   index++;
  // }


  // for -----------------------------------------
  // for (let i = 0; i < songList.length; i++) {
  //   const li = document.createElement('li');
  //   li.textContent = `${i + 1} ${songList[i]}`;
  //   li.classList.add("list-group-item");
  //   ol.appendChild(li);
  // }


  // map -----------------------------------------
  // songList.map((song, index) => {
  //   const li = document.createElement("li");
  //   li.textContent = `${index + 1}. ${song}`;
  //   li.classList.add("list-group-item");
  //   ol.appendChild(li);
  // })

}


const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  Drowning: { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  Whiplash: { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  HOT: { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};


function songInfo() {
  const ol = document.querySelector(".song-info-list");
  ol.innerHTML = "";

  let isFiltered = false;

  const btn = document.createElement("div");
  btn.textContent = "정렬";
  btn.classList.add("bbtn");
  ol.appendChild(btn);

  function renderSongs() {
    ol.innerHTML = "";
    ol.appendChild(btn);

    for (let song in songDetails) {
      const { artist, likes } = songDetails[song];

      if (!isFiltered || likes >= 60000) {
        const li = document.createElement("li");
        li.innerHTML = `${song}, ${artist}, ${likes}`;
        li.classList.add("list-group-item");
        ol.appendChild(li);
      }
    }
    // forIn();
  }


  //조건문이 있어서 함수로 사용할 수가 없다
  // function forIn() {
  // for (let song in songDetails) {
  //     const { artist, likes } = songDetails[song];

  //     if (!isFiltered || likes >= 60000) {
  //       const li = document.createElement("li");
  //       li.innerHTML = `${song}, ${artist}, ${likes}`;
  //       li.classList.add("list-group-item");
  //       ol.appendChild(li);
  //     }
  //   }
  //   }


  btn.addEventListener('click', () => {
    isFiltered = !isFiltered;
    btn.textContent = isFiltered ? "전체" : "정렬";
    renderSongs();
  });

  renderSongs();

  if (ol.style.display === "none" || ol.style.display === "") {
    ol.style.display = "block";
  } else {
    ol.style.display = "none";
  }
}


document.getElementById("plusBtn").addEventListener('click', plusBtn);

function plusBtn() {
  const songInput = document.getElementById("song");
  const singerInput = document.getElementById("singer");
  const likeCountInput = document.getElementById("likeCount");

  const song = songInput.value;
  const singer = singerInput.value;
  const likeCount = parseInt(likeCountInput.value) || 0;

  if (!song || !singer) {
    alert("곡명과 가수명을 모두 입력해 주세요.");
    return;
  }

  songDetails[song] = {
    artist: singer,
    likes: likeCount
  };

  const ol = document.querySelector(".song-info-list");
  ol.innerHtml = "";

  // forIn()
  for (let song in songDetails) {
    const { artist, likes } = songDetails[song];
    const li = document.createElement("li");
    li.innerHTML = `${song}, ${artist}, ${likes}`;
    li.classList.add("list-group-item");
    ol.appendChild(li);
  }

  songInput.value = "";
  singerInput.value = "";
  likeCountInput.value = "";
}

