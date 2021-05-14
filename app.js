const button = document.querySelector(".link-1");
const popup = document.querySelector(".modal-container");

button.addEventListener("click", () => {
  popup.style.display = "flex";
});

popup.addEventListener("click", (event) => {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ["link-2", "popup-link", "modal-container"];
  const shouldClosePopup = classNames.some(
    (className) => className === classNameOfClickedElement
  );

  if (shouldClosePopup) {
    popup.style.display = "none";
  }
});

// const button = document.querySelector("button");
// const popup = document.querySelector(".popup-wrapper");

// button.addEventListener("click", () => {
//   popup.style.display = "block";
// });

// popup.addEventListener('click', event => {
// 	const classNameOfClickedElement = event.target.classList[0];
// 	const classNames = ['popup-close', 'popup-link', 'popup-wrapper'];
// 	const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

// 	if (shouldClosePopup) {
// 		popup.style.display = 'none';
// 	}
// });
