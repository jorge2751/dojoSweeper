var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {

    // FIRST ANSWER
    var count = 0;
    var rows = theDojo.length;
    var cols = theDojo[0].length;

    // Check the square above
    if (i > 0) {
        count += theDojo[i - 1][j];
    }

    // Check the top-right corner
    if (i > 0 && j < cols - 1) {
        count += theDojo[i - 1][j + 1];
    }

    // Check the square to the right
    if (j < cols - 1) {
        count += theDojo[i][j + 1];
    }

    // Check the bottom-right corner
    if (i < rows - 1 && j < cols - 1) {
        count += theDojo[i + 1][j + 1];
    }

    // Check the square below
    if (i < rows - 1) {
        count += theDojo[i + 1][j];
    }

    // Check the bottom-left corner
    if (i < rows - 1 && j > 0) {
        count += theDojo[i + 1][j - 1];
    }

    // Check the square to the left
    if (j > 0) {
        count += theDojo[i][j - 1];
    }

    // Check the top-left corner
    if (i > 0 && j > 0) {
        count += theDojo[i - 1][j - 1];
    }

    //SECOND ANSWER
    var count = 0;
    for (var x = Math.max(0, i - 1); x <= Math.min(theDojo.length - 1, i + 1); x++) {
        for (var y = Math.max(0, j - 1); y <= Math.min(theDojo[x].length - 1, j + 1); y++) {
            if (x !== i || y !== j) {
                count += theDojo[x][y];
            }
        }
    }

    //THIRD ANSWER (DOESNT WORK)
    var count = top + sides + bottom;
    var top = theDojo[i-1][j-1] + theDojo[i-1][j] + theDojo[i-1][j+1];
    var sides = theDojo[i][j-1] + theDojo[i][j+1];
    var bottom = theDojo[i+1][j-1] + theDojo[i-1][j] + theDojo[i+1][j+1];
    console.log(top);
    console.log(sides);
    console.log(bottom);
    console.log(count);



    // Display the result
    element.innerHTML = count
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

