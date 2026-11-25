function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        if (display.value === "") {
            return;
        }

        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Cannot divide by zero";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}