let deathStarHealth = 100;
let attackPower = 25;

let pilots = ["Luke Skywalker", "Wedge Antilles", "Biggs Darklighter", "Jek Porkins"];

let leadXwing = {
    pilot: "Luke Skywalker",
    callSign: "Red Five",
    ship: "X-wing",
    torpedoes: 2,
    laserCharge: 100
};

$(document).ready(function () {
    $("#deathstar").click(function () {
        deathStarHealth = deathStarHealth - attackPower;
        
        $("#messages").html(
            "Attacking Death Star!<br>" +
            "Lead pilot: " + leadXwing.pilot + "<br>" +
            "Squadron: " + pilots.join(", ") + "<br>" +
            "Death Star health: " + deathStarHealth + "%"
        );
        
        $("h1").text("They're attacking!");
        $("p").text("Death Star health: " + deathStarHealth + "%");
        
        if (deathStarHealth <= 0) {
            $("p").text("The Death Star blew up!");
        }
    });
    
    $(".xwing").click(function () {
        let index = $(".xwing").index(this);
        let currentPilot = pilots[index];
        
        $("#messages").html(currentPilot + " ready for attack!");
        
        $(this).animate({ left: "+=50px" }, 500)
            .animate({ left: "-=50px" }, 500);
    });

    $("#messages").html(
        "=== STAR WARS ATTACK SETUP ===<br>" +
        "Death Star Health: " + deathStarHealth + "<br>" +
        "Attack Power: " + attackPower + "<br>" +
        "" + pilots.join(", ") + "<br>" +
        "Lead X-wing Pilot: " + leadXwing.pilot
    );
});