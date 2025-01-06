const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// 開啟選單時禁止背景滾動
function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // 禁止背景滾動
}

// 關閉選單時恢復背景滾動
function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // 恢復背景滾動
}

// 點擊漢堡圖示開啟選單，並阻止預設行為
// hamburger.addEventListener('click', function(event) {
//   event.preventDefault(); // 阻止預設行為
//   openMenu();
// });

// 點擊遮罩關閉選單
overlay.addEventListener('click', closeMenu);

// 點擊關閉按鈕關閉選單
closeBtn.addEventListener('click', closeMenu);

// 平滑滾動到指定區域
document.querySelectorAll('.sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // 阻止預設行為

      const targetId = this.getAttribute('href'); // 獲取 href 中的 ID
      const targetElement = document.querySelector(targetId); // 獲取對應的元素

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth' // 平滑滾動效果
          });
      }

      closeMenu(); // 選單關閉
  });
});

// GoToTop
// 獲取回到頂部的按鈕
const backToTopButton = document.getElementById('backToTop');

// 當用戶滾動頁面時，顯示或隱藏按鈕
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show'); // 添加顯示類
    } else {
        backToTopButton.classList.remove('show'); // 移除顯示類
    }
};

// 點擊按鈕時，平滑滾動到頁面頂部
backToTopButton.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止預設行為

    window.scrollTo({
        top: 0, // 滾動到頁面的最上方
        behavior: 'smooth' // 平滑滾動
    });
});

// FAQ
function toggleAccordion(header) {
    const content = header.nextElementSibling; // 獲取對應的內容部分

    if (content.style.display === "block") {
        content.style.display = "none"; // 隱藏內容
    } else {
        content.style.display = "block"; // 顯示內容
    }
}


function openPopup(cardElement) {
    const title = cardElement.getAttribute('data-title');
    const subtitle = cardElement.getAttribute('data-subtitle');
    const content = cardElement.getAttribute('data-content');
    const additionalImg = cardElement.getAttribute('data-additional-img');

    // 设置弹窗内容
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-subtitle').textContent = subtitle;
    document.getElementById('popup-text').textContent = content;

    // 设置附加图片
    const additionalImgElement = document.getElementById('popup-additional-img');
    additionalImgElement.src = additionalImg || ''; // 动态设置图片路径
    additionalImgElement.style.display = additionalImg ? 'block' : 'none'; // 如果没有路径隐藏图片

    // 显示弹窗
    document.getElementById('popup').style.display = 'block';
    document.body.classList.add('no-scroll'); // 禁用滚动
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // 隐藏弹窗
    document.body.classList.remove('no-scroll'); // 恢复滚动
}

function checkClosePopup(event) {
    const popupContent = document.querySelector('.popup-content');
    // 如果点击的不是内容区域，关闭弹窗
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
}


