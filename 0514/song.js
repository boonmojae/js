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

  const ul = document.querySelector(".list_1");

  if (ul.style.display === "none" || ul.style.display === "") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }

  ul.innerHTML = "";
  
  songList.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song;
    ul.appendChild(li);
    // console.log(li);
  });
}




function songDetails() {

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

const ul = document.querySelector(".list_2");

if (ul.style.display === "none" || ul.style.display === "") {
  ul.style.display = "block";
} else {
  ul.style.display = "none";
}

ul.innerHTML = "";

songDetails.forEach((song) => {
  const li = document.createElement("li");
  li.textContent(song);
  ul.appendChild(li);
  console.log(li);
});

}


// function songDetails() {
//   const songDetails = {
//     "너에게 닿기를": { artist: "10CM", likes: 58471 },
//     "like JENNIE": { artist: "제니", likes: 76168 },
//     Drowning: { artist: "WOODZ", likes: 189248 },
//     "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
//     "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
//     "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
//     "나는 반딧불": { artist: "황가람", likes: 141198 },
//     Whiplash: { artist: "aespa", likes: 132606 },
//     "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
//     HOT: { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
//   };

//   const ul = document.querySelector(".list_2");

//   // 토글로 보이기/숨기기
//   if (ul.style.display === "none" || ul.style.display === "") {
//     ul.style.display = "block";
//   } else {
//     ul.style.display = "none";
//   }

//   // 기존 내용 비우기
//   ul.innerHTML = "";

//   // 객체를 순회하여 노래 정보 추가
//   Object.keys(songDetails).forEach((songName) => {
//     const li = document.createElement("li");

//     // 노래 이름과 아티스트/좋아요 수 출력
//     const songInfo = songDetails[songName];
//     li.textContent = `${songName} - 아티스트: ${songInfo.artist}, 좋아요 수: ${songInfo.likes}`;

//     // 리스트에 추가
//     ul.appendChild(li);
//   });
// }
