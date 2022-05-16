
(function () {
    const time = document.getElementById('elapsedTime');
    const btn = document.getElementById('btnTime');
    const startTime = new Date();
    const getSeconds = () => Math.floor((new Date() - startTime) / 1000);
    btn.addEventListener('click', function () {
        time.innerHTML = `A total of ${getSeconds()} seconds used.`;
    });
})();