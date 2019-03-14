window.onload = () => {
    const sgt = new SGT;
    sgt.init();
}

class SGT {

    constructor() {
        this.totalCalories = null;
        this.foodList = [];
    }

    init = () => {
        this.addEventHandlers();
    }

    addEventHandlers = () => {
        document.querySelector(".add-button").addEventListener("click", this.addButtonHandler);
    }

    addButtonHandler = () => {
        const foodName = document.querySelector(".food-name").value;
        const portionSize = document.querySelector(".portion-size").value;
        const calories = document.querySelector(".calories-input").value;

        const item = { foodName, portionSize, calories };
        this.foodList.push(item);

    }



}