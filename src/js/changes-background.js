const input = document.querySelector('.theme-switch__toggle');

const onInputClick = event => {
  event.preventDefault();
  //   console.log(localStorage.setItem('theme', 'kkkk'));

  const darkTheme = document.body.classList.contains('dark-theme');
  if (!darkTheme) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    // localStorage.removeItem('theme');
    localStorage.setItem('theme', document.body.classList);
  } else if (darkTheme) {
    // localStorage.removeItem('theme');
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');

    localStorage.setItem('theme', document.body.classList);
  }
};

export const changesTheme = input.addEventListener('click', onInputClick);
// JSON.stringify(document.body.classList);
