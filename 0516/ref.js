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