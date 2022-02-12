console.log('hi from script.js');

const changeBgColour = (div) => {
  if (div.classList.contains('grey-bg')) {
    div.classList.remove('grey-bg');
  } else {
    div.classList.add('grey-bg');
  }
};

const divArray = document.querySelectorAll('div');
divArray.forEach((div) => {
  div.addEventListener('click', (event) => {
    changeBgColour(event.currentTarget);
  });
});
