// -- copy-link ------------------------------------------------------------------------------
const copyBtn = document.querySelector('.earn-block__btn');
const copyBtnText = document.querySelector('.earn-block__btn-text');
const linkToCopy = document.querySelector('.earn-block__link');

copyBtn.addEventListener('click', () => {
  const copyText = linkToCopy.innerText;
  if (linkToCopy) {
    navigator.clipboard.writeText(copyText)
      .then(() => {
         copyText.innerText = 'Link copied';
        if (copyBtn.innerText !== 'Link copied') {
         copyBtnText.innerText = 'Link copied';
         copyBtn.classList.add('copied');
         }
      })
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }
});
// -- /copy-link ------------------------------------------------------------------------------
