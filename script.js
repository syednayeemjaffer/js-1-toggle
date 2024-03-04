var plus1 = document.getElementById("plus1");
var art = document.getElementById("art");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var plus2 = document.getElementById("plus2");
var plus3 = document.getElementById("plus3");
var plus4 = document.getElementById("plus4");

// Variable to track the currently open section
var currentSection = null;

function toggleHeight(element, button) {
    if (art.style.height !== "34rem" || currentSection !== element) {
        // If the clicked section is different from the currently open section
        if (currentSection !== null) {
            currentSection.style.height = "5rem";
        }

        button.style.backgroundImage = "url('assets/images/icon-minus.svg')";
        element.style.height = "230px";
        element.style.transition = "0.5s";
        art.style.height = "34rem";

        // Update the currently open section
        currentSection = element;
    } else {
        // If the clicked section is the same as the currently open section, close it
        resetHeights();
    }
}

function resetHeights() {
    plus1.style.backgroundImage = "url('assets/images/icon-plus.svg')";
    plus2.style.backgroundImage = "url('assets/images/icon-plus.svg')";
    plus3.style.backgroundImage = "url('assets/images/icon-plus.svg')";
    plus4.style.backgroundImage = "url('assets/images/icon-plus.svg')";

    one.style.height = "5rem";
    two.style.height = "5rem";
    three.style.height = "5rem";
    four.style.height = "5rem";

    art.style.height = "23rem";

    // Reset the currently open section
    currentSection = null;
}

function neg() {
    toggleHeight(one, plus1);
}

function neg1() {
    toggleHeight(two, plus2);
}

function neg2() {
    toggleHeight(three, plus3);
}

function neg3() {
    toggleHeight(four, plus4);
}
