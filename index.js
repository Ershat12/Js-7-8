//const accBtns = document.querySelectorAll(".accordeon-btn");

//accBtns.forEach((btn) => {
  //btn.addEventListener("click", () => {
    //let accText = document.querySelector("#" + btn.getAttribute("data-target"));
  //  if (accText.classList.contains("active")) {
    //  accText.classList.remove("active");
    //} else {
     // accText.classList.add("active");
    //}
  //});
//});


// const tabs = document.querySelectorAll(".tab");

// tabs.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         let cont = document.querySelector("#" + btn.getAttribute("data-target"));

//         if (cont.classList.contains("active")) {
//             cont.classList.remove("active");
//         } else {
//             cont.classList.add("active");
//         }
//     });
// });



const accordeonBtns = document.querySelectorAll(".accordeon-btn");
const accordeonTexts = document.querySelectorAll(".accordeon-text");

for (let i = 0; i < accordeonBtns.length; i++) {
  accordeonBtns[i].addEventListener("click", () => {

    //   первый способ

    accordeonTexts.forEach((text) => {
      text.classList.remove("open");

    });

    // Второй способ 

    // for (let j = 0; j < accordeonTexts.length; j++) {
    //   accordeonTexts[j].classList.remove("open");
    // }

    accordeonBtns[i].parentElement
    .querySelector(".accordeon-text")
    .classList.toggle("open");
  });
}




var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


