let count = 1;

const doSomething = () => {
    console.log("This did something in the console, " +count+" times.");
    document.getElementById('jsDiv').innerHTML = "Something happened in the DOM "+count+" times. (also check the console)";
    count++;
}
