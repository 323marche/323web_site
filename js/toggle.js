// Clickイベント
  // ページの読み込みが完了したときにスクリプトを実行
  document.addEventListener('DOMContentLoaded', function() {
    // menuボタンのクリックイベント
    document.querySelector('.toggle .menu').addEventListener('click', function() {
      // sp-header要素にactiveクラスを追加する
      document.querySelector('.sp-header').classList.add('active');
    });

    // closeボタンのクリックイベント
    document.querySelector('.toggle .close').addEventListener('click', function() {
      // sp-header要素からactiveクラスを削除する
      document.querySelector('.sp-header').classList.remove('active');
    });
  });  

// Smooth scroll 
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }


// Fade
const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
   } else{
    entries[j].target.classList.remove('active');
   }
  }
 });
 observer.observe(targets[i]);
}

