var dict = {
    "nav-home-button": "home.html",
    "nav-dog-button": "dog.html",
    "nav-travel-button": "travel.html",
    "nav-sun-button": "sun.html",
    "nav-beer-button": "beer.html",
    "nav-eddy-button": "eddy.html"
};


$("a").click(function(e) {
    var temp = e.target.id;
    console.log(temp);
    $.get("assets/content/"+ dict[temp], function(data) {
        $("#pagecontent").html(data)
        if (temp == "nav-beer-button") {
            initiateBubbles($(".beer-bubble"));
        }
    });
}) ;
