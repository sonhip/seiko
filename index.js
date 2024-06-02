function toggleSidebar() {
  const sidebar = document.getElementById('mySidebar');
  const body = document.body;
  const icon = document.querySelector('.toggle-icon');

  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    body.classList.add('body-no-scroll');
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x');
  } else {
    sidebar.style.display = 'none';
    body.classList.remove('body-no-scroll');
    icon.classList.remove('bi-x');
    icon.classList.add('bi-list');
  }
}

function toggleSubMenuSeiko() {}
function toggleSubMenuSeiko() {
  const defaultMenu = document.querySelector('.menu-mobile-default');
  const selectedMenu = document.querySelector('.menu-mobile-selected-seiko');

  defaultMenu.style.display =
    defaultMenu.style.display === 'none' ? 'block' : 'none';
  selectedMenu.style.display =
    selectedMenu.style.display === 'none' ? 'block' : 'none';
}

// toggle submenu
function toggleSubmenu(event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document body
  var subMenu = document.querySelector('.sub-menu');
  subMenu.classList.toggle('sub-menu-open'); // Toggle the class
}

document.body.addEventListener('click', function (event) {
  var seikoLink = document.querySelector('.seiko');
  var subMenu = document.querySelector('.sub-menu');
  if (!event.target.closest('.seiko')) {
    // Check if the clicked element or its ancestors contain the .seiko class
    subMenu.classList.remove('sub-menu-open'); // Remove the class
  }
});

// toggle search box
function toggleSearchBox() {
  const body = document.body;
  const searchComponent = document.querySelector('.search-component');
  const boxHeader = document.querySelector('.box-header');
  const computedStyle = window.getComputedStyle(searchComponent);
  const displayStyle = computedStyle.getPropertyValue('display');

  if (displayStyle === 'none') {
    console.log('xxxx');
    searchComponent.style.display = 'block';
    boxHeader.style.display = 'none';
    body.classList.add('body-no-scroll');
  } else {
    searchComponent.style.display = 'none';
    boxHeader.style.display = 'flex';
    body.classList.remove('body-no-scroll');
  }
}

// prevent close filter on seiko page
document
  .querySelectorAll('.dropdown-menu .item[data-stayopen="true"]')
  .forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });

// counter in cart page
document.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('counter');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');

  if (!counter) return;
  incrementBtn.addEventListener('click', function () {
    counter.textContent = parseInt(counter.textContent) + 1;
  });

  decrementBtn.addEventListener('click', function () {
    counter.textContent = parseInt(counter.textContent) - 1;
  });
});
