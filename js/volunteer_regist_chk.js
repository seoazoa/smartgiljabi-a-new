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

  //   localstorage load
  const volunInfo = JSON.parse(localStorage.getItem("volunInfoList"));
  const storedData = JSON.parse(localStorage.getItem("locationValues"));

  if (volunInfo && volunInfo.length > 0) {
    const dataInit = document.getElementById("volunchk-data");
    let html = "";

    // 첫 번째 객체를 참조하여 센터와 강의 값 가져오기
    const latestInfo = volunInfo[0];

    // 센터와 강의 값이 있는지 확인하고 출력
    if (latestInfo.volunname) {
      html += `
        <li class="info-box-li">
            <p class="chk-info-title">교육봉사자 성함</p>
            <p id="name-info" class="chk-info-data">${latestInfo.volunname}</p>
        </li>
      `;
    }
    if (latestInfo.volunmobile) {
      html += `
        <li class="info-box-li">
            <p class="chk-info-title">교육봉사자 연락처</p>
            <p id="mobile-info" class="chk-info-data">${latestInfo.volunmobile}</p>
        </li>
      `;
    }

    dataInit.innerHTML += html; // 두 번째 정보값을 추가합니다.
  } else {
    console.log("저장된 데이터가 없습니다.");
  }

  if (storedData) {
    const dataInit = document.getElementById("volunchk-data");
    let html = "";

    // 센터와 강의를 저장할 변수 초기화
    let latestArea = "";
    let latestCity = "";

    // 최신 데이터가 존재하는 경우에만 처리
    if (storedData.length > 0) {
      // 모든 데이터를 반복하면서 센터와 강의에 대한 최신 값을 찾음
      storedData.forEach((item) => {
        if (item.volunAreaValue) {
          latestArea = item.volunAreaValue;
        }
        if (item.volunCityValue) {
          latestCity = item.volunCityValue;
        }
      });

      // 센터와 강의에 대한 최신 값을 출력
      if (latestArea, latestCity) {
        html += `
          <li class="info-box-li">
              <p class="chk-info-title">희망지역</p>
              <p id="lecture-info" class="chk-info-data">${latestArea} ${latestCity}</p>
              
          </li>
        `;
      }
    }

    let informaiton = `
    <li class="info-box-last">
    <p class="chk-info-detail">교육전반에 관한 안내사항은 작성해주신 연락처로 안내드립니다.</p>
    <p class="chk-info-detail">교육신청관련 조회는 <a href="#">교육봉사신청 - 신청확인</a> 메뉴에서 확인하실 수 있습니다.</p>
    </li>
    `;

    dataInit.innerHTML += html + informaiton;
  } else {
    console.log("저장된 데이터가 없습니다.");
  }

  // 버튼
  const cancelBtn = document.querySelector("#cancel-btn");
  const chkBtn = this.document.querySelector("#back-btn");

  function cancelAction(e) {
    e.preventDefault();
    localStorage.removeItem("volunInfoList");
    localStorage.removeItem("locationValues");

    // 알림 창 표시
    alert("수강신청이 취소되었습니다. 메인페이지로 이동합니다.");

    // 확인 버튼을 누르면 메인 페이지로 이동
    window.location.href = "index.html"; // 여기에 홈 페이지의 URL을 입력합니다.
  }

  // 버튼에 클릭 이벤트 추가
  cancelBtn.addEventListener("click", cancelAction);

  function chkAction(e) {
    e.preventDefault();
    window.location.href = "index.html";
  }
  // 버튼에 클릭 이벤트 추가
  chkBtn.addEventListener("click", chkAction);
});
