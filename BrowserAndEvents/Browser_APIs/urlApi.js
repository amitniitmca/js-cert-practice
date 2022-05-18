const urlString = "http://example.com:3000/path/page?name=Adam&age=31#profile";
const urlDiv = document.getElementById("urlDiv");
const urlObject = new URL(urlString);

let message = `hash = ${urlObject.hash} <br />
host = ${urlObject.host} <br />
hostname = ${urlObject.hostname} <br />
href = ${urlObject.href} <br />
origin = ${urlObject.origin} <br />
password = ${urlObject.password} <br />
pathname = ${urlObject.pathname} <br />
port = ${urlObject.port} <br />
protocol = ${urlObject.protocol} <br />
search = ${urlObject.search} <br />
searchParams = ${urlObject.searchParams} <br />
username = ${urlObject.username}`;

urlDiv.innerHTML = message;

