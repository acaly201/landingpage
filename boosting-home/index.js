
//left-content-faq
const listBtn = document.querySelectorAll(".box-left-content-faq");
for (let i = 0; i < listBtn.length; i++) {
    const element = listBtn[i];
    element.addEventListener("click", statusClick);
  }
function statusClick(event) { 
  for (let i = 0; i < listBtn.length; i++) {
    const element = listBtn[i];
    element.classList.remove('click-content-faq');
  }
  event.target.classList.add('click-content-faq');
}
