import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;
  if (whatWasClickedOn.dataset.type === "walker") {
    window.alert(`This walker works in ${whatWasClickedOn.dataset.cityid}`);
  }
});

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li data-type="walker" data-id="${walker.id}" data-cityid="${walker.cityId}">${walker.name}</li>`;
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};
