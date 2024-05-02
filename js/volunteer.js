window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    var headerWrap = document.querySelector(".header-wrap");
    if (window.scrollY > 0) {
      headerWrap.classList.add("scrolled"); // 스크롤된 경우 scrolled 클래스 추가
    } else {
      headerWrap.classList.remove("scrolled"); // 스크롤이 상단에 위치한 경우 scrolled 클래스 제거
    }
  });

  // 반응형 (1024px) 햄버거바가 생겼을때
  // 햄버거버튼을 클릭했을때
  const navMb = document.querySelector(".nav-mb");
  const htmlRoot = document.querySelector("html");
  const mbt = document.querySelector(".mbt");

  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.remove("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.remove("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.remove("active");
    } else {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active");
    }
  });
  var menu1 = document.querySelector(".hd-menu1 > a");
  var menu2 = document.querySelector(".hd-menu2");
  menu1.addEventListener("click", function (e) {
    e.preventDefault();
    menu2.classList.toggle("active");
  });
  var menu3 = document.querySelector("#volunteer-apply > a");
  var menu4 = document.querySelector(".hd-menu3");
  menu3.addEventListener("click", function (e) {
    e.preventDefault();
    menu4.classList.toggle("active");
  });

  // 페이지 내비게이션 렌더링
  const pgNaviContainer = document.querySelector(".pg-navi .inner");
  const nowPg = document.title;

  function renderPgNavi() {
    let html = `
          <div class="home">
            <i class="fa-solid fa-house"></i>
          </div>
          <span class="chevron"></span>
          <span class="cate">교육봉사신청</span>
          <span class="chevron"></span>
          <span class="now-pg">${nowPg}</span>
        `;
    pgNaviContainer.innerHTML = html;
  }

  renderPgNavi();
});

// 스와이퍼 제이쿼리
$(document).ready(function () {
  // json data
  $.getJSON("data.json")
    .done(function (data) {
      if (data && data.lecture_list && data.lecture_list.length > 0) {
        LECTURE_ARRAY = data.lecture_list;
        showLecture();
      } else {
        console.error("No review data found.");
      }
    })
    .fail(function (jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.error("Fetch error:", err);
    });

  let LECTURE_ARRAY;
  let lectureSlide = $("#data-swEnrol");
  function showLecture() {
    let html = "";
    $.each(LECTURE_ARRAY, function (idx, item) {
      var tag = `
      <div class="swiper-slide">
      <div class = "enroll-list-li">
          <div class="enroll-info-left">
            <img src="${item.imgSrc}" alt="${item.kiosk}" />
          </div>
          <div class="enroll-info-right">
            <h2 class="erinfo-title">${item.lecture_title}</h2>
            <div class="study-info">
              <p class="erinfo-subtitle">교육내용</p>
              <p class="erinfo">${item.erinfo}</p>
            </div>
          </div>
        </div>
      </div>
      `;
      html += tag;
    });
    lectureSlide.html(html);
  }

  let swLecture = new Swiper(".sw-enrol", {
    slidesPerView: 1.2,
    spaceBetween: 35,
    centeredSlides: true,
    allowTouchMove: false,
  });

  // 슬라이드 변경 이벤트 리스너
  swLecture.on("slideChange", function () {
    updateButtonStatus();
  });

  // 초기 버튼 상태 설정
  updateButtonStatus();

  // 버튼 상태 업데이트 함수
  function updateButtonStatus() {
    // 현재 슬라이드의 인덱스 가져오기
    let currentIndex = swLecture.realIndex;

    // 이전 버튼 상태 업데이트
    if (currentIndex === 0) {
      $(".sw-enrol-prev").addClass("disabled"); // 이전 버튼 비활성화
    } else {
      $(".sw-enrol-prev").removeClass("disabled"); // 이전 버튼 활성화
    }

    // 다음 버튼 상태 업데이트
    if (currentIndex === swLecture.slides.length - 1) {
      $(".sw-enrol-next").addClass("disabled"); // 다음 버튼 비활성화
    } else {
      $(".sw-enrol-next").removeClass("disabled"); // 다음 버튼 활성화
    }
  }

  // 이전 버튼 클릭 이벤트 핸들러
  $(".sw-enrol-prev").on("click", function () {
    swLecture.slidePrev(); // 이전 슬라이드로 이동
  });

  // 다음 버튼 클릭 이벤트 핸들러
  $(".sw-enrol-next").on("click", function () {
    swLecture.slideNext(); // 다음 슬라이드로 이동
  });
});
