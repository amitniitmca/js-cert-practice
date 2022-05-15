const xhr = new XMLHttpRequest();
const url = 'https://open.er-api.com/v6/latest/USD';
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const jsonObject = JSON.parse(xhr.responseText);
        console.log(jsonObject);
        // generateHtml(jsonObject);
    }
};

