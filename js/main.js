//added event listener for button click
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('keypress', getFetch)

//fetching data via single name search option w/ input for lowercase
//connected search criteria to input
function getFetch(){
    const choice = document.querySelector('input').value.toLowerCase()
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${choice}`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name //displays show name
        document.querySelector('img').src = data.image.medium //medium image         
        document.querySelector('h4').innerText = data.rating.average//shows rating
        
        //summary included tags w/in DOM; added regex to remove them
        const regex = /<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|<[^>]*>/gi;
        document.querySelector('h3').innerText = data.summary.replace(regex, (x,y) => y ? ' & ' : '')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}























