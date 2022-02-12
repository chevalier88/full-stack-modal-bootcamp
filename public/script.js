console.log('hi from script.js');

const openDescription = (btnId) => {
  // change id to "div-xx"
  // we are slicing to get the characters after the
  const divId = `div-${btnId.slice(4)}`;
  console.log(divId);
  const divToHide = document.querySelector(`#${divId}`);

  if (divToHide.classList.contains('hide')) {
    divToHide.classList.remove('hide');
  }
};

const closeDescription = (btnId) => {
  // change id to "div-xx"
  // we are slicing to get the characters after the
  const divId = `div-${btnId.slice(6)}`;
  console.log(divId);
  const divToHide = document.querySelector(`#${divId}`);

  divToHide.classList.add('hide');
};

const btnArray = document.querySelectorAll('.open'); // search for all buttons w class "open"
console.log(btnArray);
btnArray.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.currentTarget.id);
    openDescription(event.currentTarget.id); // id is "btn-xx"
  });
});

const btnArray2 = document.querySelectorAll('.close'); // search for all buttons w class "close"
console.log(btnArray2);
btnArray2.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.currentTarget.id);
    closeDescription(event.currentTarget.id); // id is "close-xx"
  });
});
