import { getPets, getWalkers } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
  let petWalker = null;

  for (const walker of allWalkers) {
    if (walker.id === pet.walkerId) {
      petWalker = walker;
    }
  }

  return petWalker;
};

export const Assignments = () => {
  let assignmentHTML = "";
  assignmentHTML = "<ul>";

  for (const currentPet of pets) {
    const currentPetWalker = findWalker(currentPet, walkers);
    if (currentPetWalker) {
      assignmentHTML += `<li>${currentPet.name} is being walked by ${currentPetWalker.name} in ${currentPetWalker.cityId}</li>`;
    } else {
      assignmentHTML += `<li>${currentPet.name} has no walker assigned</li>`;
    }
  }

  assignmentHTML += "</ul>";

  return assignmentHTML;
};
