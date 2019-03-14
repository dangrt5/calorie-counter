window.onload = () => {
    const calorieCount = new calorieCounter;
    calorieCount.init();
}

class calorieCounter {

    constructor() {
        this.totalCalories = 0;
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
        this.calculateAverage(item);
    }

    calculateAverage = food => {
        this.totalCalories += parseInt(food.calories);
        console.log("food list", this.foodList);
        document.querySelector(".label-default").textContent = parseInt(this.totalCalories / this.foodList.length);
    }

}