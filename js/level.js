window.addEventListener("load", function() {
    window.addEventListener('scroll', function() {
      var headerWrap = document.querySelector('.header-wrap');
      if (window.scrollY > 0) {
        headerWrap.classList.add('scrolled'); // ��ũ�ѵ� ��� scrolled Ŭ���� �߰�
      } else {
        headerWrap.classList.remove('scrolled'); // ��ũ���� ��ܿ� ��ġ�� ��� scrolled Ŭ���� ����
      }
    });
  
    // ������ (1024px) �ܹ��Źٰ� ��������
    // �ܹ��Ź�ư�� Ŭ��������
    const navMb = document.querySelector(".nav-mb");
    const htmlRoot = document.querySelector("html");
    const mbt = document.querySelector(".mbt");
  
    mbt.addEventListener("click", function() {
      const state = this.classList.contains("ani");
      if (state) {
        // �ܹ��� ��ư��  �������� x�� �ٲ�� �ڵ�
        this.classList.remove("ani");
        // ����Ͽ� �޴��� ��Ÿ���� �ڵ�
        navMb.classList.remove("active");
        // ��ũ���� �Ȼ���� �ϴ� �ڵ�
        htmlRoot.classList.remove("active");
      } else {
        // �ܹ��� ��ư��  �������� x�� �ٲ�� �ڵ�
        this.classList.add("ani");
        // ����Ͽ� �޴��� ��Ÿ���� �ڵ�
        navMb.classList.add("active");
        // ��ũ���� �Ȼ���� �ϴ� �ڵ�
        htmlRoot.classList.add("active");
      }
    });
    var menu1 = document.querySelector('.hd-menu1 > a');
  var menu2 = document.querySelector('.hd-menu2');
  menu1.addEventListener("click" ,function(e){
    e.preventDefault()
    menu2.classList.toggle("active")
    
  })
  var menu3 = document.querySelector('#volunteer-apply > a');
  var menu4 = document.querySelector('.hd-menu3');
  menu3.addEventListener("click" ,function(e){
    e.preventDefault()
    menu4.classList.toggle("active")
    
  })
  const pgNaviContainer = document.querySelector(".pg-navi .inner");
  const nowPg = document.title;

  function renderPgNavi() {
    let html = `
          <div class="home">
            <i class="fa-solid fa-house"></i>
          </div>
          <span class="chevron"></span>
          <span class="now-pg">${nowPg}</span>
        `;
    pgNaviContainer.innerHTML = html;
  }

  renderPgNavi();
  });