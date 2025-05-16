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
  
    // ol에 연결
    const ol = document.querySelector(".song-info-list");
  
    // ol안에 있는 목록을 제거
    ol.innerHTML = "";
  
    // ol안에 div 버튼을 생성후 추가
    const btn = document.createElement("div");
    btn.textContent = "정렬";
    btn.classList.add("bbtn");
    ol.appendChild(btn);
  
    // 현재 상태값을 저장 => 필터가 적용되지 않음
    let isFiltered = false;
  
  
    const renderSongs = (entries) => {
      const existingLis = ol.querySelectorAll("li");// oi안에 있는 li에 접근
      existingLis.forEach(li => li.remove());
      
  
      entries.forEach(([title, info], index) => {
        const li = document.createElement("li");
        li.textContent = `${title} - ${info.artist} (${info.likes.toLocaleString()} likes)`;
        li.classList.add("list-group-item");
        ol.appendChild(li);
      });
    };
  
    renderSongs(Object.entries(songDetails));// renderSongs에 key,value형태의 배열 변환 한 인자를 넣음
  
    btn.addEventListener('click', () => {
      if (!isFiltered) {
        const filter = Object.entries(songDetails)
        .filter(([, info]) => info.likes >= 60000)
        .sort((a,b) => b[1].likes - a[1].likes);//sort 내림차순, ab => [title, info]
  
        renderSongs(filter);
        btn.textContent = "전체";
      } else {
        renderSongs(Object.entries(songDetails));
        btn.textContent = "정렬";
      }
  
      isFiltered = !isFiltered;
    });
  
    if (ol.style.display === "none" || ol.style.display === "") {
      ol.style.display = "block";
    } else {
      ol.style.display = "none";
    }
  
  }






//   function newList() {
//   const songList = [
//     "너에게 닿기를",
//     "like JENNIE",
//     "Drowning",
//     "모르시나요(PROD.로코베리)",
//     "TOO BAD",
//     "HOME SWEET HOME",
//     "나는 반딧불",
//     "Whiplash",
//     "REBEL HEART",
//     "HOT",
//   ];

//   const ol = document.querySelector(".new-list-group");


//   if (ol.style.display === "none" || ol.style.display === "") {
//     ol.style.display = "block";
//   } else {
//     ol.style.display = "none";
//   }

//   ol.innerHTML = "";

//   // while ------------------------------------
//   // let index = 0;
//   // while (index < songList.length) {
//   //   const li = document.createElement("li");
//   //   li.textContent = `${index + 1}. ${songList[index]}`;
//   //   li.classList.add("list-group-item");
//   //   ol.appendChild(li);
//   //   index++;
//   // }


//   // foreach -----------------------------------------
//   songList.forEach((song, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${index + 1}. ${song}`;
//     li.classList.add("list-group-item");
//     ol.appendChild(li);
//     console.log(`${index + 1}. ${song}`);
//   })


//   // for of -----------index가 필요 없을때 사용(필요하면 증감식 추가)
//   // let index = 0;
//   // for (const song of songList) {
//   //   const li = document.createElement("li");
//   //   li.textContent = `${index + 1}. ${song}`;
//   //   li.classList.add("list-group-item");
//   //   ol.appendChild(li);
//   //   console.log(`${index + 1}. ${song}`);
//   //   index++;
//   // }


//   // for -----------------------------------------
//   // for (let i = 0; i < songList.length; i++) {
//   //   const li = document.createElement('li');
//   //   li.textContent = `${i + 1} ${songList[i]}`;
//   //   li.classList.add("list-group-item");
//   //   ol.appendChild(li);
//   // }


//   // map -----------------------------------------
//   // songList.map((song, index) => {
//   //   const li = document.createElement("li");
//   //   li.textContent = `${index + 1}. ${song}`;
//   //   li.classList.add("list-group-item");
//   //   ol.appendChild(li);
//   // })

// }


// const songDetails = {
//   "너에게 닿기를": { artist: "10CM", likes: 58471 },
//   "like JENNIE": { artist: "제니", likes: 76168 },
//   Drowning: { artist: "WOODZ", likes: 189248 },
//   "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
//   "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
//   "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
//   "나는 반딧불": { artist: "황가람", likes: 141198 },
//   Whiplash: { artist: "aespa", likes: 132606 },
//   "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
//   HOT: { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
// };


// function songInfo() {

//   const ol = document.querySelector(".song-info-list");
//   ol.innerHTML = "";

//   const btn = document.createElement("div");
//   btn.textContent = "정렬";
//   btn.classList.add("bbtn");
//   ol.appendChild(btn);

//   let isFiltered = false;

//   const render = (entries) => {
//     const existingLis = ol.querySelectorAll("li");
//     existingLis.forEach(li => li.remove());

//     entries.forEach(([title, info], index) => {
//       const li = document.createElement("li");
//       li.textContent = `${index + 1}. ${title} - ${info.artist} ${info.likes.toLocaleString()}likes`
//       li.classList.add("list-group-item");
//       ol.appendChild(li);
//     });
//   };

//   render(Object.entries(songDetails));

//   btn.addEventListener('click', () => {
//     if (!isFiltered) {
//       const filter = Object.entries(songDetails)
//         .filter(([, info]) => info.likes >= 60000)
//         .sort((a, b) => b[1].likes - a[1].likes);

//       render(filter);
//       btn.textContent = "전체";
//     } else {
//       render(Object.entries(songDetails));
//       btn.textContent = "정렬";
//     }

//     isFiltered = !isFiltered;
//   });

//   if (ol.style.display === "none" || ol.style.display === "") {
//     ol.style.display = "block";
//   } else {
//     ol.style.display = "none";
//   }

// }


// //onclick="plusBtn()" 함수 찾을수 없음 에러
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("plusBtn").addEventListener("click", plusBtn);
// });

// function plusBtn() {

//   const songInput = document.getElementById("song");
//   const singerInput = document.getElementById("singer");
//   const likeCountInput = document.getElementById("likeCount");

//   const song = songInput.value;
//   const singer = singerInput.value;
//   const likeCount = parseInt(likeCountInput.value) || 0;

//   if (!song || !singer) {
//     alert("곡명과 가수명을 모두 입력해 주세요.");
//     return;
//   }

//   songDetails[song] = {
//     artist: singer,
//     likes: likeCount
//   };

//   console.log(`${song} - ${singer} (${likeCount.toLocaleString()}likes)`);

//   //추가하면 리스트 밖에 먼저 생김 => songInfo()
//   // const ol = document.querySelector(".song-info-list");
//   // const li = document.createElement("li");
//   // li.textContent = `${song} - ${singer} (${likeCount.toLocaleString()}likes)`;
//   // li.classList.add("list-group-item");
//   // ol.appendChild(li);

//   songInput.value = "";
//   singerInput.value = "";
//   likeCountInput.value = "";

//   songInfo();
// }
