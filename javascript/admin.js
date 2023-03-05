const category_buttons = document.getElementsByClassName("Category-Buttons");

for(let i=0; i< category_buttons.length; i++){
    category_buttons[i].addEventListener("click", () => {
        let button = category_buttons[i];
        TurnOffEveryButton();
        TurnOnTheSelectedButton(button);
    });
}

const TurnOffEveryButton = () => {
    for(let i=0; i<category_buttons.length; i++){
        category_buttons[i].classList.remove("Button-enabled");
    }
}

const TurnOnTheSelectedButton = (button) => button.classList.add("Button-enabled");
