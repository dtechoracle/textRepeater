function execute () {
    const repeated = document.getElementById("repeated")
    const text = document.getElementById("text").value;
    const number = document.getElementById("number").value;
    // console.log(text);
    // console.log(number);
    let output = text.repeat(number);
    console.log(output);

    repeated.textContent = output;
}
