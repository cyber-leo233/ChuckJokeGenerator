document.getElementById('get-joke').addEventListener('click',getRandomJoke);









function getRandomJoke (e)  {
  e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://api.icndb.com/jokes/random',true);

    xhr.onload = function () {
      if(this.status === 200){
          const joke = JSON.parse(this.responseText);
          displayJoke(joke.value.joke);
                
      }

    }
    xhr.send();
}


function displayJoke(joke){
      document.getElementById('output').innerHTML = `<strong>${joke}</strong>`
}


