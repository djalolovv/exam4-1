const form = document.querySelector("#site-form");
input = document.querySelector("#form-input");
btn = document.querySelector("#form-btn");
content = document.querySelector(".site-content");

function fordate(userText) {
  userText = input.value;
  let link = `https://api.dictionaryapi.dev/api/v2/entries/en/${userText}`;
  fetch(link)
    .then((value) => value.json())
    .then((result) => data(result, userText));
}
function easy() {
  fordate();
}

function data(javob) {
  let text = javob[0].word,
    fonetiki = javob[0].phonetic,
    manosi = javob[0].meanings[0].definitions[0].definition,
    masalan = javob[0].meanings[0].definitions[0].example,
    foydalanilishi = javob[0].meanings[0].definitions[0].definition,
    masalan2 = javob[0].meanings[0].definitions[0].example,
    foydalanilishi2 = javob[0].meanings[0].definitions[0].definition,
    audiosi = javob[0].phonetics[0].audio;
  javob[0].meanings[1].definitions[0].definition;
  audiosi = javob[0].phonetics[1].audio;
  content.innerHTML = "";
  content.innerHTML = `
        <h3 class="form-title">
            ${text} - ${fonetiki}
        </h3>
        <p class="texts">
            ${manosi}
        </p>
        <p class="texts for-example">
           Example:  "${masalan}"
        </p>
        <p class="texts">
            "${foydalanilishi}"
        </p>
        <p class="texts for-example">
            Example:  "${masalan2}"
        </p>
        <p class="texts">
            "${foydalanilishi2}"
        </p>
        <audio controls autoplay src="${audiosi}" class="user-audiosi"></audio>
        `;
  console.log(javob);
}
