document.getElementById("short-break").addEventListener("click", function() {
    document.getElementById("short-break").classList.remove("active");
    document.getElementById("long-break").classList.remove("active");
    document.getElementById("pomodoro").classList.remove("active");

    document.getElementById("short-break").classList.add("active");

    document.body.style.backgroundColor = "rgb(56, 133, 138)";
    document.getElementById("message").innerText = "Time for a break!";
    document.getElementById("start").style.color = "rgb(56, 133, 138)";
    document.getElementById("time").innerText = "05:00";
});

document.getElementById("long-break").addEventListener("click", function() {
    document.getElementById("short-break").classList.remove("active");
    document.getElementById("long-break").classList.remove("active");
    document.getElementById("pomodoro").classList.remove("active");
    
    document.getElementById("long-break").classList.add("active");

    document.body.style.backgroundColor = "rgb(57, 112, 151)";
    document.getElementById("message").innerText = "Time for a long break!";
    document.getElementById("start").style.color = "rgb(57, 112, 151)";
    document.getElementById("time").innerText = "15:00";

});

document.getElementById("pomodoro").addEventListener("click", function() {
    document.getElementById("short-break").classList.remove("active");
    document.getElementById("long-break").classList.remove("active");
    document.getElementById("pomodoro").classList.remove("active");
    
    document.getElementById("pomodoro").classList.add("active");

    document.body.style.backgroundColor = "#bb4949";
    document.getElementById("message").innerText = "Time to focus!";
    document.getElementById("start").style.color = "#bb4949";
    document.getElementById("time").innerText = "30:00";

});