const App = ((_) => {
  const $choice = document.querySelectorAll(".quiz__choice");
  const $next = document.querySelector('.quiz__next')
  let arr =[...$choice]
  
  const $choices = document.querySelector(".quiz__choices");
  const listeners = () => {
    $choices.addEventListener("click", (e) => {
    if(e.target.classList.contains('quiz__choice')){
        for (let item of arr) {
            console.log(item)
            item.classList.remove('active');
        }
        e.target.classList.add('active')
        e.target.lastElementChild.checked = true    
    }
    });

    $next.addEventListener('click',()=>{
      let selectedOption;
      selectedOption = document.querySelector('input[name="choice"]:checked')
    console.log(Number(selectedOption?.value
    ))
    })

  };













  const renderAll = () => {
    
  };
  return {
    listeners,
    renderAll,
  };
})();


App.listeners()
App.renderAll()