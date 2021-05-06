let navContainer = document.getElementById('navbar-container');
let open = document.getElementById('open');

function openNavbar() {
  navContainer.style.width = '100%';
  document.body.style.backgroundColor = 'gray';
}

function closeNavbar() {
  navContainer.style.width = '0';
  document.body.style.backgroundColor = 'hotpink';
}