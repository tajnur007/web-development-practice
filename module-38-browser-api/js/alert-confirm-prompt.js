const viewAlert = () => {
    alert('This is an alert. You can show any message here.');
}

const viewConfirm = () => {
    const check = confirm('Are you sure to view another alert?');

    if (check) {
        alert('You are agree with us that is why this alert appears.');
    }
}

const viewPrompt = () => {
    const enteredValue = prompt('What is your name?');

    if (enteredValue) {
        alert(`Hello ${enteredValue}! Welcome to browser alert, confirm and prompt demo.`);
    }
}