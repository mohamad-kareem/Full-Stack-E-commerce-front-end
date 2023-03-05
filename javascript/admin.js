const category_buttons = document.getElementsByClassName("Category-Buttons");
const category_list = document.getElementsByClassName("List-block");

for(let i=0; i< category_buttons.length; i++){
    category_buttons[i].addEventListener("click", () => {
        let button = category_buttons[i];;
        TurnOffEveryButton();
        TurnOnTheSelectedButton(button);
        ActivateTheCorrespondingTable(button);
    });
}

const TurnOffEveryButton = () => {
    for(let i=0; i<category_buttons.length; i++){
        category_buttons[i].classList.remove("Button-enabled");
    }
}

const TurnOnTheSelectedButton = (button) => button.classList.add("Button-enabled");

const ActivateTheCorrespondingTable = (button) => {
    if (button.textContent == "List of Users") {
        DisableEveryTable();
        category_list[0].classList.remove("List-disabled");
    }else if (button.textContent == "List of Phones") {
        DisableEveryTable();
        category_list[1].classList.remove("List-disabled");
    }else if (button.textContent == "List of Laptops") {
        DisableEveryTable();
        category_list[2].classList.remove("List-disabled");
    }else if (button.textContent == "List of Accessories") {
        DisableEveryTable();
        category_list[3].classList.remove("List-disabled");
    }
}

const DisableEveryTable = () => {
    for(let i=0; i<category_list.length; i++){
        category_list[i].classList.add("List-disabled");
    }
}


axios.get('http://localhost/-Full-Stack-E-commerce--back-end-/getallusers.php').then(function (res) {
    let users = res.data;
    PrintEachRowInTheTable(users);
}).catch(function (err) {
    console.log(err);
})


