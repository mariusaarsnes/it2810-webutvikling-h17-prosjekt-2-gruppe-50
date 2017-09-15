var bubblePool = [[185, 159, 175], [159, 156, 170], [156, 153, 168],
                  [153, 150, 162], [150, 147, 155], [147, 145, 150],
                  [145, 145, 140], [140, 135, 140], [135, 133, 133],
                  [133, 110, 121], [110, 95, 110]];
var startWidth = [100, 185];
var startHeight = [220, 230];
var bubbleWidth = 10;

function assignPosition() {
    return [randomInterval(startWidth[0], startWidth[1]),
            randomInterval(startHeight[0], startHeight[1])];
}

function initiateBubbles(bubbles) {
    bubbles.each(function(index) {
        animateBubble($(this), index);
    });
}

function animateBubble(bubble, index) {
    var position = assignPosition();
    bubble.css({ "right" : "" + (position[0] + (index * bubbleWidth)) + "px", "top" : "" + position[1] + "px", "display":"block" });
    bubble.animate({
        top: "-=" + (position[1] - getHeight(position[0]))
    }, randomInterval(1500, 3000), function() {
        animateBubble(bubble, index);
    });
}

function getHeight(startWidth) {
    for (let i = 0; i < bubblePool.length; i++) {
        if (startWidth <= bubblePool[i][0] && startWidth > bubblePool[i][1])
            return bubblePool[i][2];
    }
    return undefined;
}

function randomInterval(value1, value2) {
    return value1 + random(value2 - value1);
}

function random(value) {
    return Math.floor(Math.random() * value);
}
