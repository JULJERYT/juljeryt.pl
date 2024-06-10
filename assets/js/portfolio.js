alert(lang[currentLang].intro.adblockInfo);
let username = prompt(lang[currentLang].intro.usernamePrompt);

const matches = ["juljeryt", "jujer", "juljer", "jujer wtf", "julek", "juleczek wtf"];

async function checkName(a) {

    var fmt = 0;

    if (!a) return "";

    if (matches.some(match => a.toLowerCase().includes(match))) {
        fmt = "personalMatch";
    }

    var test = await fetch("https://www.purgomalum.com/service/containsprofanity?text=" + a)
    var res = await test.text();

    if (res == "true") {
        fmt = "profanityMatch";
    }
    else {
        fmt = "success";
    }

    return `<i style='color: ${lang[currentLang].username.formats[fmt].color}'>${resetPlaceholders(lang[currentLang].username.formats[fmt].text, [["%a", a]])}</i>`;
}

function resetPlaceholders(source, placeholders) {

    var output = source;

    for (const el of placeholders) {

        output = output.replace(el[0], el[1]);
    }
    return output;

}


// Yes I know this is leaked, and I don't care since this is IP based ratelimit
const ipgeolocation = "https://api.ipgeolocation.io/ipgeo?apiKey=bc15d999af6b473fb6282d9bd8e539de";
const timeouts = [];

document.body.onkeyup = (event) => {
    if (event.keyCode == 32 && app.skippedIntro) {
        return (app.backgroundToggler = !app.backgroundToggler);
    }
};

$(".skip").click(() => {
    skipIntro();
});

$.fn.extend({

    animateCss: function (animationName) {

        const animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        this.addClass(`animated ${animationName}`).one(animationEnd, () => {
            $(this).removeClass(`animated ${animationName}`);
        });
        return this;
    },

});

function writeLine(text, speed, timeout, callback) {

    timeout = typeof timeout === "number" ? timeout : [0, (callback = timeout)];
    const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

    setTimeout(() => {
        const typed = new Typed(`#line${lineNumber}`, { strings: text, typeSpeed: speed, onComplete: callback });
    }, timeout);

};

function skipIntro() {

    if (app.skippedIntro) return;
    app.skippedIntro = true;

    timeouts.forEach((timeout) => {
        clearTimeout(timeout);
    });

    $(".top-right").remove();
    $("#start").fadeOut(100, () => {

        $("#start").remove();
        $("#marquee").marquee({ duration: 15000, gap: 420, delayBeforeStart: 1000, direction: "left", duplicated: true });

        setTimeout(() => {
            $(".brand-header").animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
        }, 200);

        setTimeout(() => {
            const typed = new Typed("#brand", {
                strings: app.brandDescription,
                typeSpeed: 100,
                loop: true
            });
        }, 1350);

        setTimeout(() => {

            $("#hiddenBox").fadeIn();
            $("#description").html(lang[currentLang].portfolio.description);
            $("#copyInfo").text(lang[currentLang].portfolio.clickToCopy);
            $("#social-title").text(lang[currentLang].portfolio.socialTitle);
            $("#whoami-title").text(lang[currentLang].portfolio.whoamiTitle);
            $("#copyright").text(lang[currentLang].portfolio.copyright);

        }, 200);

    });

    tick();
};

const clearCursor = () => {
    return $("span").siblings(".typed-cursor").css("opacity", "0");
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [],
    FPS = 60,
    x = 100,
    mouse = { x: 0, y: 0 };

for (var i = 0; i < x; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 1 + 1, vx: Math.floor(Math.random() * 50) - 25, vy: Math.floor(Math.random() * 50) - 25 });
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {

        var s = stars[i];
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
    }

    ctx.beginPath();

    for (var i = 0, x = stars.length; i < x; i++) {

        var starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);

        for (var j = 0, x = stars.length; j < x; j++) {

            var starII = stars[j];

            if (distance(starI, starII) < 150) {
                ctx.lineTo(starII.x, starII.y);
            }
        }
    }

    ctx.lineWidth = 0.05;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

function distance(point1, point2) {

    var xs = point2.x - point1.x;
    var ys = point2.y - point1.y;

    xs *= xs;
    ys *= ys;

    return Math.sqrt(xs + ys);
}

function update() {

    for (var i = 0, x = stars.length; i < x; i++) {

        var s = stars[i];
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
}

canvas.addEventListener("mousemove", function (e) {
    
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function tick() {

    draw();
    update();
    requestAnimationFrame(tick);
}

checkName(username).then(result => {

    username = result;

    $("#skip-intro").text(lang[currentLang].intro.skipIntro);

    $.getJSON(ipgeolocation)
    .done((data) => {

        writeLine([lang[currentLang].intro.loading, resetPlaceholders(lang[currentLang].intro.loadingAccess, [["%username", username]])], 30, () => {
        if (app.skippedIntro) return;

        if(data.ip === 'undefined'){
            skipIntro();
        }

        clearCursor();

        const usernames = lang[currentLang].username.variants;
        const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
        const country = data.country_name ? data.country_name : lang[currentLang].intro.defaultCountry;
        const city = data.city ? data.city : lang[currentLang].intro.defaultCity;

        writeLine([lang[currentLang].intro.accessGranted, resetPlaceholders(lang[currentLang].intro.welcomeBack, [["%ip", ip], ["%city", city], ["%country", country]])], 30, 500, () => {

            if (app.skippedIntro) return;
            clearCursor();
            writeLine([`<i style='color: #F62459'>root@juljeryt.pl:~$ </i>`], 120, 500, () => {
                timeouts.push(
                    setTimeout(() => {

                        if (app.skippedIntro) return;
                        clearCursor();

                        setTimeout(skipIntro, 500);

                    }, 1000)
                );
            });
        });
    });
    })
    .fail(skipIntro);

});
