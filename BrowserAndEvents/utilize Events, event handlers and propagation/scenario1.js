const finishBtn = document.getElementById('finish-quiz');
finishBtn.onclick = () => {
    const ce = new CustomEvent("finish");
    window.dispatchEvent(ce);
};

window.addEventListener("finish", function (){
    console.log("Quiz Finised");
});
