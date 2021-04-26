const modal2 = document.querySelector(".signup");
const overlay2 = document.querySelector(".overlay2");
const btnClose2 = document.querySelector(".closesignup");
const btnClose22 = document.querySelector(".closesignup2");
const btnOpenModal2 = document.querySelectorAll(".signupbtn");

const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal2.length; i++)
  btnOpenModal2[i].addEventListener("click", openModal2);

btnClose2.addEventListener("click", closeModal2);
btnClose22.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});
