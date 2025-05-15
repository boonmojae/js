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
  })


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

  const ol = document.querySelector(".song-info-list");
  ol.innerHTML = "";

  const btn = document.createElement("div");
  btn.textContent = "정렬";
  btn.classList.add("bbtn");
  ol.appendChild(btn);

  let isFiltered = false;


  const render = (entries) => {
    const existingLis = ol.querySelectorAll("li");
    existingLis.forEach(li => li.remove());

    entries.forEach(([title, info]) => {
      const li = document.createElement("li");
      li.textContent = `${title} - ${info.artist} ${info.likes.toLocaleString()}likes`
      li.classList.add("list-group-item");
      ol.appendChild(li);
    });
  };

  render(Object.entries(songDetails));

  btn.addEventListener('click', () => {
    if (!isFiltered) {
      const filter = Object.entries(songDetails)
      .filter(([, info]) => info.likes >= 60000)
      .sort((a,b) => b[1].likes - a[1].likes);

      render(filter);
      btn.textContent = "전체";
    } else {
      render(Object.entries(songDetails));
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

