const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search_box"),
      modeSwitch = body.querySelector(".toggle_switch"),
      modeText = body.querySelector(".mode_text");

// 
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
