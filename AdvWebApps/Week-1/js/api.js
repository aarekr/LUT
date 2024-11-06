async function getData() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const userPromise = await fetch(url);
    const userJson = await userPromise.json();
    console.log('userJson:', userJson.message);
    const kuvat = document.getElementById("kuvat");
    let kuva_1 = document.createElement("img");
    kuva_1.src = userJson.message;
    kuvat.appendChild(kuva_1);
    const userPromise2 = await fetch(url);
    const userJson2 = await userPromise2.json();
    let kuva_2 = document.createElement("img");
    kuva_2.src = userJson2.message;
    kuvat.appendChild(kuva_2);
    const userPromise3 = await fetch(url);
    const userJson3 = await userPromise3.json();
    let kuva_3 = document.createElement("img");
    kuva_3.src = userJson3.message;
    kuvat.appendChild(kuva_3);
    const userPromise4 = await fetch(url);
    const userJson4 = await userPromise4.json();
    let kuva_4 = document.createElement("img");
    kuva_4.src = userJson4.message;
    kuvat.appendChild(kuva_4);
    const userPromise5 = await fetch(url);
    const userJson5 = await userPromise5.json();
    let kuva_5 = document.createElement("img");
    kuva_5.src = userJson5.message;
    kuvat.appendChild(kuva_5);
}

const fetchBreeds = async() => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
}

const fetchWikipedia = async() => {
    const response = await fetch('https://en.wikipedia.org/api/rest_v1/');
    const data = await response.json();
}

getData()
fetchBreeds()
fetchWikipedia()
