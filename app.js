// const getHeader = document.getElementsByTagName('h1')

//change header to "hacked"
const getHeader = document.querySelector('h1')
getHeader.textContent = "HACKED!"
console.log('changed header text', getHeader)

//Change all links to badguys.com
 const getLinks = document.querySelectorAll('a');
for (let e of getLinks) {e.href = 'https://thebadguys.com'}

// OTHER SOLUTION:
// getLinks.forEach(link => link.href="https://thebadguys.com}"})

 console.log('change links', getLinks)

 //Create picture and put at beginning of body
 const newPicture = document.createElement('img')
 newPicture.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"
 document.body.prepend(newPicture)

 //Delete the paragraph tags who are direct children of main

const mainChildren = document.querySelectorAll('main > p')
mainChildren.forEach(element => element.remove())

//Add p tag to end of document

const compromise = document.createElement('p');
compromise.textContent = "Your account has been compromised."
document.body.append(compromise)

//reset the days counter to 0
const counter = document.querySelector('main > div > p > span')
counter.textContent = 0

