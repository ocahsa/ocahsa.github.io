// do nothing for now.
window.addEventListener(("DOMContentLoaded"), () => {
    const openSeq = document.querySelector(".openSeq");
    setTimeout(() => {
        openSeq.innerHTML= ``;
        console.log('Removed openSeq')
    }, 9500);

    const mainContent = document.querySelector(".mainContent");
    setTimeout(() => {
        mainContent.style.display="block";
        console.log("Initialized main site")
    }, 10000);
})