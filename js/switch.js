document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll('.slider');
  const buttons = document.querySelectorAll('.button-container button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      sliders.forEach(slider => slider.style.display = 'none'); // すべてのスライダーを非表示にする
      sliders[index].style.display = 'block'; // クリックされたボタンに対応するスライダーを表示する
    });
  });

  // 最初のスライダーを表示する（初期表示）
  sliders[0].style.display = 'block';
});


function changeSlide(n, sliderNumber) {
  const slider = document.getElementById(`slider${sliderNumber}`);
  const slides = slider.querySelector('.slides');
  const slideWidth = slides.offsetWidth; // 1枚の画像の幅を取得
  let newPosition = slides.scrollLeft + slideWidth * n;

  // スクロール位置が最後の画像よりも右にある場合、最初の画像に戻る
  if (newPosition > slides.scrollWidth - slideWidth) {
    newPosition = 0;
  }

  slides.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.prev, .next').forEach(function(button) {
    button.addEventListener('click', function() {
      const direction = this.classList.contains('prev') ? -1 : 1;
      const sliderNumber = this.closest('.slider').id.replace('slider', '');
      changeSlide(direction, sliderNumber);
    });
  });
});
