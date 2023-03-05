const category_buttons = document.getElementsByClassName("Category-Buttons");
const category_list = document.getElementsByClassName("List-block");

for(let i=0; i< category_buttons.length; i++){
    category_buttons[i].addEventListener("click", () => {
        let button = category_buttons[i];;
        TurnOffEveryButton();
        TurnOnTheSelectedButton(button);
        CheckTheCorrespondingTable(button);
    });
}

const TurnOffEveryButton = () => {
    for(let i=0; i<category_buttons.length; i++){
        category_buttons[i].classList.remove("Button-enabled");
    }
}

const TurnOnTheSelectedButton = (button) => button.classList.add("Button-enabled");

const CheckTheCorrespondingTable = (button) => {
    if (button.textContent == "List of Phones") {
        category_list[1].classList.remove("List-disabled");
    }
}