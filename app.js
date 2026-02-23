let button = document.getElementById("btn");
let paragraph = document.getElementById("fact");

button.addEventListener("click", async function () {
    try {
        paragraph.innerHTML = "Loading...";

        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();

        paragraph.innerHTML = data.fact;
    } catch (error) {
        paragraph.innerHTML = "Error getting data!";
    }
});