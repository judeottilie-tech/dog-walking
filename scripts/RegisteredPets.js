import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "pet") {
            const walkerId = clickTarget.dataset.walkerforeignkey

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`This pet is being walked by ${walker.name}`)
                }
            }
        }
    }
)

export const registeredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
       petHTML += `<li data-type="pet" data-walkerforeignkey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

