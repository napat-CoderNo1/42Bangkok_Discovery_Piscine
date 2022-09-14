let count = 0;

function scrollPage(id) {
  const page = document.getElementById(id);
  page.scrollIntoView();
}

function randomColor(id) {
  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);

  const element = document.getElementById(id);
  element.style.color = '#' + randomColor;
}

function addCount() {
  count += 1;

  if (count === 10) {
    alertFlag();
    count = 0;
  }
}

function alertFlag() {
  alert('I Love 42Bangkok');
}
