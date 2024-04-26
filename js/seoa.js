// =============================================================
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/kiosk0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/kiosk.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/app0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/app.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage2");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/AI0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/grandma.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage3");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const originalImageSrc = "images/recommend/smartphone0.png"; // 원본 이미지 경로
  const hoverImageSrc = "images/recommend/smartphone.png"; // 호버 시 이미지 경로

  const imageElement = document.getElementById("changeableImage4");

  imageElement.addEventListener("mouseover", function () {
    this.src = hoverImageSrc; // 마우스 호버 시 이미지 변경
  });

  imageElement.addEventListener("mouseout", function () {
    this.src = originalImageSrc; // 마우스가 벗어났을 때 원래 이미지로 변경
  });
});
//   ================================================================
document.addEventListener("DOMContentLoaded", function () {
  // .gangbox 요소에 대한 클릭 이벤트 리스너를 추가합니다.
  const gangbox = document.querySelector(".gangbox");
  gangbox.addEventListener("click", function () {
    // 원하는 URL로 리디렉션합니다.
    window.location.href = "https://example.com";
  });
});
// ===================================================================
$(document).ready(function () {
  $(".topbtn img").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0, // 페이지 최상단으로 스크롤
      },
      "slow"
    ); // "slow"는 애니메이션 속도를 의미하며, 숫자(밀리초)로도 지정할 수 있습니다.
  });
});
// =============================================
document.addEventListener("scroll", function () {
  var footer = document.querySelector(".footer"); // footer 선택
  var sideBtn = document.querySelector(".sidebtn"); // sideBtn 선택
  var footerRect = footer.getBoundingClientRect(); // footer의 위치와 크기 정보
  var sideBtnHeight = sideBtn.offsetHeight; // sideBtn의 높이

  // window.innerHeight는 화면의 높이, footerRect.top은 뷰포트 상단부터 footer까지의 거리
  if (window.innerHeight - footerRect.top > 0) {
    // footer가 화면에 보일 때
    // footer가 sideBtn과 겹치지 않도록 조정
    sideBtn.style.bottom = window.innerHeight - footerRect.top + 10 + "px";
  } else {
    // 기본 위치로 돌아감
    sideBtn.style.bottom = "-10%";
  }
});
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
  // 모든 span 요소에 대한 클릭 이벤트 리스너를 추가합니다.
  document.querySelectorAll('.allmenu li span').forEach(item => {
    item.addEventListener('click', function() {
      // 클릭한 span에만 active 클래스를 추가하고, 나머지는 active 클래스를 제거합니다.
      document.querySelectorAll('.allmenu li span').forEach(span => {
        span.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
});