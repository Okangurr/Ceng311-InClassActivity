var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus(); 
};

function displayResults() {
    if (scores.length === 0) return;

    let total = 0;
    let highScore = scores[0];
    let highName = names[0];

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highScore) {
            highScore = scores[i];
            highName = names[i];
        }
    }

    let average = total / scores.length;

    let html = `<h2>Results</h2>
                <p>Average score = ${average.toFixed(2)}</p>
                <p>High score = ${highScore} (${highName})</p>`;

    $("results").innerHTML = html;
}

function displayScores() {
    let table = `<h2 style="color: blue;">Scores</h2>`;
    table += "<table><tr><th>Name</th><th>Score</th></tr>";

    for (let i = 0; i < names.length; i++) {
        table += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
    }

    table += "</table>";

    $("scores_table").innerHTML = table;
}


function addScore() {
    let name = $("name").value.trim();
    let score = parseFloat($("score").value);

    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
    }

    names.push(name);
    scores.push(score);

    $("name").value = "";
    $("score").value = "";
    $("name").focus();
}
