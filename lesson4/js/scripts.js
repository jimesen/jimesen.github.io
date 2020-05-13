function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById("currentdate").textcontent = new Date().toLocaleDateString ('en-US', options);

