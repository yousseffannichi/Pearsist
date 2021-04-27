const modal2 = document.querySelectorAll(".signin");
const overlay2 = document.querySelectorAll(".overlay2");
const btnClose2 = document.querySelectorAll(".closesignin");
const btnClose22 = document.querySelectorAll(".closesignin2");
const btnOpenModal2 = document.querySelectorAll(".signinbtn");
const modal = document.querySelectorAll(".signup");
const overlay = document.querySelectorAll(".overlay");
const btnClose = document.querySelectorAll(".closesignup");
const btnClose2 = document.querySelectorAll(".closesignup2");
const btnOpenModal = document.querySelectorAll(".signupbtn");

const openModal2 = function () {
  modal2.classList.remove("hidden2");
  overlay2.classList.remove("hidden2");
};

const closeModal2 = function () {
  modal2.classList.add("hidden2");
  overlay2.classList.add("hidden2");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal2.length; i++)
  btnOpenModal2[i].addEventListener("click", openModal2);
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnClose2.addEventListener("click", closeModal2);
btnClose22.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);
btnClose.addEventListener("click", closeModal);
btnClose2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden2")) {
    closeModal2();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
