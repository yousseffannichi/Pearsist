function configureForClicks(
  modalName,
  btnCloseName,
  btnCloseName2,
  btnOpenModalName
) {
  const modal = document.querySelector(modalName);
  const overlay = document.querySelector(".overlay");
  const btnClose = document.querySelector(btnCloseName);
  const btnClose2 = document.querySelector(btnCloseName2);
  const btnOpenModals = document.querySelectorAll(btnOpenModalName);

  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  for (let i = 0; i < btnOpenModals.length; i++) {
    btnOpenModals[i].addEventListener("click", openModal);
  }

  btnClose.addEventListener("click", closeModal);
  btnClose2.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

configureForClicks(".signin", ".closesignin", ".closesignin2", ".signinbtn");
configureForClicks(
  ".haveaccount",
  ".closesignin",
  ".closesignin2",
  ".signinbtn"
);
configureForClicks(".signup", ".closesignup", ".closesignup2", ".signupbtn");
