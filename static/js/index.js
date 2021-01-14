$(function () {
    const scrollBody = $("html, body");
    $("#nav-about").click(() => scrollBody.animate({ scrollTop: $("#about").offset().top }, 1000));
    $("#nav-seminar").click(() => scrollBody.animate({ scrollTop: $("#seminar").offset().top }, 1000));
    $("#nav-project").click(() => scrollBody.animate({ scrollTop: $("#project").offset().top }, 1000));
    $("#nav-edu-exp").click(() => scrollBody.animate({ scrollTop: $("#edu-exp").offset().top }, 1000));
    $("#nav-skill").click(() => scrollBody.animate({ scrollTop: $("#skill").offset().top }, 1000));
    $("#nav-pub-award").click(() => scrollBody.animate({ scrollTop: $("#pub-award").offset().top }, 1000));
    $("#back-to-top").click(() => scrollBody.animate({scrollTop: 0}, 1500));
});