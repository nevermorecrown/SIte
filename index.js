let btn = document.getElementById("inform");
let infoContainer = -1;

btn.addEventListener("click", function () {

    let ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'games.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            let ourData = JSON.parse(ourRequest.responseText);
            btn.insertAdjacentHTML('beforebegin', ourData[infoContainer].content);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    }

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
    infoContainer++;
    if (infoContainer >= 4) {
        btn.classList.add("hide-me");
    }
});

