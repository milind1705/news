let nationalNews = document.getElementById('national');
nationalNews.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('button')
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8b43e2b44bfc42558e47f7716084f0a4')
   
    xhr.onload = function () {
        console.log(this.responseText)
    }

    xhr.send();
}