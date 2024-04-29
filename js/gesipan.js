document.addEventListener('DOMContentLoaded', () => {
  // 'allmenu' 클래스를 가진 <ul> 요소 선택
  const allMenuList = document.querySelector('.allmenu');

  // 첫 번째 <span> 요소에 'active' 클래스 추가
  allMenuList.querySelector('span').classList.add('active');
});

// 첫 번째 <span> 요소에 'active' 클래스 추가
allSpans[0].classList.add("active");

allMenuList.querySelectorAll('span').forEach((span, index) => {
  span.addEventListener('click', () => {
    // 이전에 'active' 클래스가 있던 요소에서 제거
    allMenuList.querySelectorAll('span').forEach(s => s.classList.remove('active'));
    // 현재 클릭한 요소에 'active' 클래스 추가
    span.classList.add('active');
  });
});