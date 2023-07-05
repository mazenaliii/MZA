const toggleBtn = document.querySelector(".bars")
const toggleBtnIcon = document.querySelector(".bars i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.addEventListener ('click' , () => {
    dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")

  toggleBtnIcon.classList = isOpen 
    ? "fa-solid fa-xmark" : 
  "fa-solid fa-bars";
}) 
  
