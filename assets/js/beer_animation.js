var bubblePool = [[185, 150, 175], [150, 135, 150], [135, 100, 115]];
var startWidth = [50, 145];
var startHeight = [75, 85];

function assignPosition() {
    return [randomInterval(startWidth[0], startWidth[1]),
            randomInterval(startHeight[0], startHeight[1])];
}

function initiateBubbles(bubbles) {
    bubbles.each(function() {
        animateBubble($(this));
    });
}

function animateBubble(bubble) {
    var position = assignPosition();
    var rand = randomInterval(1500, 3000);
    console.log(rand)
    bubble.css({ "left" : "" + position[0], "bottom" : "" + position[1], "display":"block" });
    bubble.animate({
        bottom: "+=" + getHeight(position[0])
    }, rand, function() {
        animateBubble(bubble);
    });
}

function getHeight(startWidth) {
    for (let i = 0; i < bubblePool.length; i++) {
        if (startWidth <= bubblePool[i][0] && startWidth > bubblePool[i][1])
            return bubblePool[i][2];
    }
    return 100;
}

function randomInterval(value1, value2) {
    return value1 + random(value2 - value1);
}

function random(value) {
    return Math.floor(Math.random() * value);
}
