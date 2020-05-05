let ready = function () {

};

// Load Docuemnt
if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    ready();
}
else {
    document.addEventListener("DOMContentLoaded", ready);
}