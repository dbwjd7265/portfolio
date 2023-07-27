//로고
let logo = `<a class="css-loslz5" aria-label="오늘의집 로고" href="/"><svg class="css-bsbra5" width="74" height="30" viewBox="0 0 74 30" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M14.2 25.17H9.28V20.7a1.45 1.45 0 0 0-2.9 0v4.47H1.44a1.45 1.45 0 1 0 0 2.9H14.2a1.45 1.45 0 0 0 0-2.9M4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.19 6.24 8.19zm25.54-7.34H17.81a1.45 1.45 0 0 0 0 2.9h15.56a1.45 1.45 0 1 0 0-2.9m-1.55 15.5c-7.08 1.83-9.45.79-10.14.25-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.66-1.45-1.46-1.45h-11.7a1.45 1.45 0 1 0 0 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 0 0 1.78 3.78c1.2.93 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 1 0-.73-2.82M20.3 7.83h10.8a1.45 1.45 0 1 0 0-2.9h-9.35V1.45a1.45 1.45 0 1 0-2.9 0v4.93c0 .8.65 1.45 1.45 1.45"></path><rect width="3" height="15" x="70" fill="#000" rx="1.5"></rect><path fill="#000" d="M64.5 13.28a1.45 1.45 0 0 0 2.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 0 0-1.09-2.42h-9.05a1.45 1.45 0 1 0 0 2.9h5.8l-6.88 7.64a1.45 1.45 0 1 0 2.16 1.95l3.41-3.8a8 8 0 0 1 2.6 3.33M69.56 26.52h-7.01a.82.82 0 0 1-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82m2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 1 0-2.9 0v7.1a3.73 3.73 0 0 0 3.72 3.72h7.01a3.73 3.73 0 0 0 3.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45M42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.08 0-.86.11-5.09 2.32-5.09m0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.36s-.39-4.02-1.1-5.37A4.6 4.6 0 0 0 42.46.97c-1.76 0-3.22.93-4.13 2.62-.72 1.35-1.1 3.2-1.1 5.37s.38 4.01 1.1 5.36a4.59 4.59 0 0 0 4.13 2.62"></path><path fill="#000" d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.13-10.38 1.13h-2.2a1.45 1.45 0 0 0 0 2.9h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 0 0 2.9 0V1.94c0-.8-.65-1.45-1.45-1.45"></path></g></svg></a>`;
document.querySelector(".logo").insertAdjacentHTML("beforeend", logo);

document
  .querySelector(".event-list")
  .addEventListener("mouseover", function () {
    const buttons = document.querySelectorAll(".event-list button");
    buttons.forEach((button) => {
      button.style.opacity = "1";
    });
  });

document.querySelector(".event-list").addEventListener("mouseout", function () {
  const buttons = document.querySelectorAll(".event-list button");
  buttons.forEach((button) => {
    button.style.opacity = "0";
  });
});

//글쓰기 아이콘
let writeIcon = [
  `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36"><rect x="6.54" y="3.59" width="27" height="29" rx="2.5" transform="rotate(4 6.54 3.6)" fill="#DBDBDB" stroke="#000" stroke-linejoin="round"></rect><rect x="2.5" y="1.5" width="27" height="29" rx="2.5" fill="#fff" stroke="#000" stroke-linejoin="round"></rect><rect x="5" y="4" width="22" height="22" rx="1" fill="#FFE2C7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7l5 .45v3.5l-5-.45V7zm0 4.5V15l5 .45v-3.5l-5-.45zm6 .55v3.5l5 .45v-3.5l-5-.45zm5-.55V8l-5-.45v3.5l5 .45z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 19l22 2v7L5 26v-7z" fill="#E6A87C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.45h5v16l-5 4v-20z" fill="#F1C8A3"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z"></path><path fill="#FFF6E6" d="M27.2 29.31H4.8V14.38h22.4"></path><path fill="#EDE2CD" d="M27.2 17.18H4.8v-2.8h22.4"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4.8 29.31V14.38h22.4v14.93H4.8z"></path><path fill="#FFF" d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"></path><path fill="#fff" d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"></path><path stroke="#000" d="M16 19.05a4.67 4.67 0 014.67 4.66v5.6h-9.34v-5.6A4.67 4.67 0 0116 19.05z"></path><path fill="#FBDEC1" d="M2.94 14.38a.9.9 0 01-.81-1.3l3.25-6.6a.9.9 0 01.8-.5h19.64c.34 0 .65.2.8.5l3.25 6.6a.9.9 0 01-.8 1.3H2.93z"></path><path fill="#E9C39D" d="M2.94 14.38a.9.9 0 01-.81-1.3l.74-1.5h26.26l.74 1.5a.9.9 0 01-.8 1.3H2.92z"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.94 14.38a.9.9 0 01-.81-1.3l3.25-6.6a.9.9 0 01.8-.5h19.64c.34 0 .65.2.8.5h0l3.25 6.6a.9.9 0 01-.8 1.3h0H2.93z"></path><g transform="translate(26 9)"><path fill="#fff" d="M0 5h8.07v12H0z"></path><path fill="#ffdb92" d="M0 0h8v4H0z"></path><path d="M8.5 17.43H-.52 8.5L4 23.8l-4.52-6.37H8.5" fill="#fff6e6"></path><path d="M8.5 1v0A1.49 1.49 0 007-.5H1v0A1.5 1.5 0 00-.5 1l-.02 16.43L4 23.8l4.5-6.37z" stroke="#000"></path><path fill="#000" d="M4 23l2-2H2z"></path><rect width="6" height="2" x="-14" y="3" stroke="#000" rx="1" transform="rotate(-90)" ry="1"></rect><rect width="5" height="1" x="-13.5" y="3.5" fill="#ffdb92" rx=".5" transform="rotate(-90)" ry=".5"></rect><path fill="#000" d="M0 4h8v1H0z" opacity=".9"></path><path d="M-.52 17.43H8.5" stroke="#000"></path></g><path fill="#000" d="M30 32l2-2h-4z"></path></g></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z"></path><path fill="#EDEDED" d="M17 10h2v22h-2z"></path><path fill="#FFF" d="M3 10.2c3.65-1.07 6.98-1.07 10 0h10.16c2.98-1 6.26-1 9.84 0v21c-5.79-1.62-10.79-1.29-15 1-4.21-2.37-9.21-2.7-15-1z"></path><path fill="#EDEDED" d="M16.5 15h3v16c-.66.8-1.16 1.2-1.5 1.2-.34 0-.84-.4-1.5-1.2V15z"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3 10.2c3.65-1.07 6.98-1.07 10 0h10.16c2.98-1 6.26-1 9.84 0h0v1.97h0V31.2c-5.79-1.62-10.79-1.29-15 1-4.21-2.37-9.21-2.7-15-1z"></path><g transform="translate(11 3)"><path fill="#FFDB92" stroke="#000" d="M7 0a7 7 0 013 13.33V17H4v-3.67A7 7 0 017 0z"></path><path stroke="#000" stroke-linecap="square" d="M7 15.68V8.5"></path><circle cx="7" cy="7.5" r="1.5" fill="#000"></circle><path fill="#FFF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3 16h8v7H3z"></path><path stroke="#000" stroke-linecap="square" d="M3 18.5h8m-8 2h8"></path></g></g></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z"></path><g stroke-linejoin="round" transform="translate(2 3)"><rect width="4" height="8" x="3" y="21" fill="#FFB787" stroke="#000" rx="2"></rect><rect fill="#FFE2C7" width="24" height="25" rx="3"></rect><rect fill="#ffe2c7" width="24" height="25" rx="3"></rect><rect stroke="#000" width="24" height="25" rx="3" stroke-width="1.2"></rect><rect width="6" height="3" x="9" y="5" fill="#DB9F77" stroke="#FFF" rx="1.5"></rect><rect width="6" height="3" x="9" y="17" fill="#DB9F77" stroke="#FFF" rx="1.5"></rect><path fill="#FFDB92" stroke="#EDC29B" d="M1.5 12.5h21"></path></g><path fill="#35C5F0" d="M26.25 31.53l-3.7 1.32a1 1 0 01-1.34-.97l.1-3.93a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.51-1.57l3.77-1.12a1 1 0 00.55-.39l2.22-3.24a1 1 0 011.65 0l2.22 3.24a1 1 0 00.55.4l3.77 1.1a1 1 0 01.5 1.58l-2.4 3.11a1 1 0 00-.2.64l.11 3.93a1 1 0 01-1.33.97l-3.71-1.32a1 1 0 00-.67 0z"></path><path fill="#9AE2F7" d="M27.15 17.61a1 1 0 01.26.26l2.22 3.25c.06.09.13.16.22.23l-8.59 8.58.06-1.98a.99.99 0 00-.21-.64l-2.4-3.11a1 1 0 01.51-1.57l3.77-1.12a1 1 0 00.55-.39l2.22-3.24a1 1 0 011.39-.26z"></path><path stroke="#000" d="M26.29 30.85l-3.31 1.17a.9.9 0 01-1.2-.86l.1-3.51c0-.2-.06-.4-.18-.57l-2.14-2.78a.9.9 0 01.45-1.4l3.37-.99a.9.9 0 00.48-.35l1.99-2.9a.9.9 0 011.47 0l1.99 2.9c.11.17.28.3.48.35l3.37 1a.9.9 0 01.45 1.4l-2.14 2.77a.89.89 0 00-.18.57l.1 3.5a.9.9 0 01-1.2.87l-3.3-1.17a.9.9 0 00-.6 0z" stroke-width="1.2"></path></g></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z"></path><path fill="#FFDB92" d="M13.75 3.52h1.9a8.1 8.1 0 018.1 8.1v1.9H5.65v-1.9a8.1 8.1 0 018.1-8.1z"></path><path fill="#FFDB92" d="M12 3h5v2h-5z"></path><path fill="#FFF" d="M12.2 23.92h5.4a7.2 7.2 0 017.2 7.2v2.8H5v-2.8a7.2 7.2 0 017.2-7.2z"></path><path fill="#EDEDED" fill-opacity=".14" d="M17.6 23.92c1.2 0 2.33.3 3.32.8a10.84 10.84 0 01-6.19 1.78c-2.28 0-4.38-.57-6.04-1.67a7.15 7.15 0 013.51-.91h5.4z"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5 33.59V30.9a6.59 6.59 0 015.47-6.37"></path><path d="M10.64 24.6v3.19" fill-rule="nonzero" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></path><path fill="#B1C0CB" fill-rule="nonzero" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8.9 33.92l.98-6H21.9l.98 6"></path><path fill="#FFF6E6" fill-rule="nonzero" d="M22.04 14.29c.31.9.48 2.3.48 3.31 0 4.65-3.49 7.2-7.79 7.2s-7.78-2.55-7.78-7.2c0-1.02.17-2.4.48-3.31"></path><path fill="#EDE2CD" fill-rule="nonzero" d="M22.04 14.29c.16.48.29 1.09.37 1.71H7.06c.08-.62.2-1.23.37-1.71h14.6z"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22.04 14.29c.31.9.48 2.3.48 3.31 0 4.65-3.49 7.2-7.79 7.2s-7.78-2.55-7.78-7.2c0-1.02.17-2.4.48-3.31"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16.29 20.9c-.23.46-.84.79-1.56.79-.72 0-1.33-.33-1.56-.78"></path><path d="M12 17.55V17m5.46.55V17" fill-rule="nonzero" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"></path><path fill="#EFC570" d="M9.5 5l2.88 4.72v-5.9zM19.94 5l-2.89 4.72v-5.9z"></path><g stroke="#000" stroke-linecap="round"><path stroke-linejoin="round" d="M5.75 11.76c0-4.08 2.9-7.45 6.63-7.94v-.3c0-.55.43-1 .95-1h2.84c.53 0 .95.45.95 1v.3c3.74.5 6.63 3.86 6.63 7.94"></path><path d="M12.38 5.52v-2c0-.55.43-1 .95-1h2.84c.53 0 .95.45.95 1v2"></path><path fill="#F5F5F5" fill-rule="nonzero" d="M4.2 14.02h20.7"></path></g><g><path fill="#35C5F0" d="M26.25 33.1l-3.71 1.31a1 1 0 01-1.34-.97l.11-3.93a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.5-1.57L23 23.07a1 1 0 00.54-.39l2.23-3.24a1 1 0 011.65 0l2.22 3.24a1 1 0 00.54.4l3.78 1.1a1 1 0 01.5 1.58l-2.4 3.11a1 1 0 00-.2.64l.1 3.93a1 1 0 01-1.33.97l-3.7-1.32a1 1 0 00-.67 0z"></path><path fill="#9AE2F7" d="M27.15 19.18a1 1 0 01.26.26l2.22 3.24c.06.09.13.16.21.23l-8.58 8.58.05-1.98a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.5-1.57L23 23.07a1 1 0 00.54-.39l2.23-3.24a1 1 0 011.39-.26z"></path><path stroke="#000" d="M26.25 33.1l-3.71 1.31a1 1 0 01-1.34-.97l.11-3.93a.99.99 0 00-.2-.64l-2.4-3.11a1 1 0 01.5-1.57L23 23.07a1 1 0 00.54-.39l2.23-3.24a1 1 0 011.65 0l2.22 3.24a1 1 0 00.54.4l3.78 1.1a1 1 0 01.5 1.58l-2.4 3.11a1 1 0 00-.2.64l.1 3.93a1 1 0 01-1.33.97l-3.7-1.32a1 1 0 00-.67 0z"></path></g></g></svg>`,
];

const aElements = [...document.querySelectorAll(".write-box a")];
for (let i = 0; i < writeIcon.length; i++) {
  const svgString = writeIcon[i];
  const aElement = aElements[i];

  // <span class="img"></span> 요소에 SVG 코드 추가
  const imgElement = aElement.querySelector(".img");
  imgElement.innerHTML = svgString;
}

const writeButton = document.querySelector(".write");
const writeBox = document.querySelector(".write-box");

// 버튼 클릭 시 write-box 보이기/숨기기
writeButton.addEventListener("click", function () {
  writeBox.classList.toggle("on");
});

// 다른 곳을 클릭하면 write-box 숨기기
document.addEventListener("click", function (event) {
  const target = event.target;
  if (!writeButton.contains(target) && !writeBox.contains(target)) {
    writeBox.classList.remove("on");
  }
});

//아이콘 링크 모음
let iconlink = [
  "쇼핑하기",
  "여름초특가",
  "오늘의딜",
  "오늘의발견",
  "장보기",
  "집들이",
  "취향의발견",
  "빠른배송",
  "쉬운이사",
  "리모델링",
];

for (i = 0; i < iconlink.length; i++) {
  let icon = `
    <div class="icon">
        <a href="">
            <img src="./public/img/${i + 1}.png" alt="${iconlink[i]}아이콘">
            <p>${iconlink[i]}</p>
        </a>
    </div>`;
  document.querySelector(".icon-link").insertAdjacentHTML("beforeend", icon);
}

//데이터에 new있으면 new표시 보이게 하기
fetch(
  "https://raw.githubusercontent.com/dbwjd7265/portfolio/dev/public/js/post_data.json"
)
  .then((response) => response.json())
  .then((data) => {
    const postListElements = document.querySelectorAll(".post-list");
    const postLn = postListElements.length;

    for (j = 0; j < postLn; j++) {
      //4개씩 끊어서 카운트
      const startIndex = j * 4;
      const endIndex = startIndex + 4;
      for (i = startIndex; i < endIndex; i++) {
        if (i >= data.length) break; // 데이터 배열 범위를 벗어나면 종료
        let postlist = `
              <article>
                  <a href="#">
                      <div class="img" style="background-image: url('./public/img/${data[i].img}')">
                          <span class="new">NEW</span>
                          <span class="mark"><i class='bx bxs-bookmark' ></i></span>
                      </div>
                      <div class="text">
                          <p><span>${data[i].strong}</span>${data[i].title}</p>
                      </div>
                  </a>
              </article>`;
        postListElements[j].insertAdjacentHTML("beforeend", postlist);
      }
    }
  })
  .catch((error) => {
    console.log("데이터를 불러오는데 실패했습니다.");
  });

const markSpans = document.querySelectorAll(".mark");
markSpans.forEach((markSpan) => {
  markSpan.addEventListener("click", function (e) {
    e.preventDefault(); // 기본 동작인 페이지 이동 막음
    const iconElement = markSpan.querySelector("i");
    iconElement.classList.toggle("save");
  });
});

console.log(postLn);
