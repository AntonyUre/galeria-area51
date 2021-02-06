// import "./style/modal.css";

let app = document.getElementById("app");
let btn = document.getElementById("btn_img");

btn.addEventListener("click", () => {
  app.innerHTML = `
  <div class="box-modal">
    <div class="modal m_N1">
    <div><span id="close">X</span></div>
    </div>
  </div>`
});

// Codigo para cerrar el modal
//let close = document.getElementById("close");

//close.addEventListener("click", () => {
//  alert("cerrar")
//  app.style.display = "none";
//});

// Segundo modal
let btn2 = document.getElementById("btn_img2");
btn2.addEventListener("click", () => {
  app.innerHTML = `
  <div class="box-modal">
    <div class="modal m_N2">
    <div><span id="close">X</span></div>
    </div>
  </div>`
});

// Tercer modal
let btn3 = document.getElementById("btn_img3");
btn3.addEventListener("click", () => {
  app.innerHTML = `
  <div class="box-modal">
    <div class="modal m_N3">
    <div><span id="close">X</span></div>
    </div>
  </div>`
});