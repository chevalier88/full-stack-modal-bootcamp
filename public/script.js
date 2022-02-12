console.log('hi from script.js');

const showHideDescription = (btnId) => {
  // change id to "div-xx"
  // we are slicing to get the characters after the
  const divId = `div-${btnId.slice(4)}`;
  console.log(divId);
  const divToHide = document.querySelector(`#${divId}`);

  if (divToHide.classList.contains('hide')) {
    divToHide.classList.remove('hide');
  } else {
    divToHide.classList.add('hide');
  }
};

const btnArray = document.querySelectorAll('button');
btnArray.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.currentTarget.id);
    showHideDescription(event.currentTarget.id); // id is "btn-xx"
  });
});
