"use Strict"
let originalString = "I love my country, Pakistan.<br> I like my city, Faisalabad. <br> I love my homeland." 
let cities = ["faisalabad", "lahore", "islamabad", "karachi", "multan", "murree"]
//To CLEAR INPUT
function clear() {
    document.getElementById("inputText").value = ""
}
// Transforming to LOWER CASE
function toLowerCase() {
    
    let lowerCaseString = originalString.toLowerCase()
    document.getElementById("results").innerHTML = lowerCaseString
}
// Transforming to UPPER CASE
function upperCase() {
    
    let upperCaseString = originalString.toUpperCase()
    document.getElementById("results").innerHTML = upperCaseString
}
// Transforming to CAPITALIZE
function capitalize() {
    
    let capitalizeString = '<span style ="text-transform: capitalize;">' + originalString + '</span>'
    document.getElementById("results").innerHTML = capitalizeString
}
// Transforming to BETTER FORMATTING
function betterFormatting() {
    let text = document.getElementById('inputText').value
    text = text.toLowerCase()
    
    if(!text){
        alert("Please Type Some Text")
        return
    }
    document.getElementById("results").style.textTransform = "capitalize"
    document.getElementById("results").innerHTML = text
}
//Printing All The Cities
function printAllCities() {
    document.getElementById("results").innerHTML = ""
    for(let i = 0; i < cities.length; i++){
        let num = i + 1;
        document.getElementById("results").style.textTransform = "capitalize"
        document.getElementById("results").innerHTML += num + ")"+ cities[i] + "<br>"
    }
}

//Adding Your Own CITY
function addCity() {
    let city = document.getElementById('inputText').value
    if (!city) {
        alert("Please Write Your City Name To Add It In The List...")
        return
    }
    cityToLowerCase = city.toLowerCase()
    cityFirstLetter = city.charAt(0).toUpperCase()
    cityAllLetters = city.slice(1).toLowerCase()
    cityWordCapitalize = cityFirstLetter + cityAllLetters
    
    let cityFound = false
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityToLowerCase) {
            cityFound = true
            let html = '<p style="color: red;font-size: 30px;">'+ cityWordCapitalize + '</p> is already in the list.'
            document.getElementById("results").innerHTML = html
            return
        }
    }
    if (cityFound === false) {
        cities.push(cityToLowerCase)
        let html = '<p style="color: Green; font-size: 30px;">' + cityWordCapitalize + '</p> has been successfully added into the list.' 
        document.getElementById("results").innerHTML = html
    }
}
//Checking your city in List
function chkCity(){
    let city = document.getElementById('inputText').value
    if (!city) {
        alert("Please Write Your City Name To Add It In The List...")
        return
    }
    cityToLowerCase = city.toLowerCase()
    cityFirstLetter = city.charAt(0).toUpperCase()
    cityAllLetters = city.slice(1).toLowerCase()
    cityWordCapitalize = cityFirstLetter + cityAllLetters
    for (let i = 0; i < cities.length; i++) {
        cityToLowerCase = city.toLowerCase()
        
        if(cityToLowerCase === cities[i]){
            
            let html = 'Congratulations! <span style="color: green;font-size: 25px;">'+ cityWordCapitalize + '</span>' + ' is in the list.'
            document.getElementById("results").innerHTML = html
        }else{
            let html = 'Oops! <span style="color: red;font-size: 25px;">'+ cityWordCapitalize + '</span>' + ' is not in the list.'
            document.getElementById("results").innerHTML = html
        }
    }
}

//Finding a WORD
function findWord() {
    let newOriginalString = originalString.toLowerCase()
    let findWord = document.getElementById('inputText').value
    if (!findWord) {
        alert("Please Write some Word To Search")
        return
    }
    findWord = findWord.toLowerCase()
    let word = newOriginalString.indexOf(findWord)
    if (word !== -1) {
        let html = 'Your word <span style="color:green; font-size:25px;"> "'+ findWord +'"</span> is found at index: '+ word
        document.getElementById('results').innerHTML = html
    }else{
        let html = 'Your word <span style="color:green; font-size:25px;"> "'+ findWord +'"</span> is not found.'
        document.getElementById('results').innerHTML = html
    }
    
}
//Replacing the WORD
function replaceWord() {
    let newOriginalString = originalString.toLowerCase()
    let word =document.getElementById('inputText').value
    
    if (!word) {
        alert("Please Write Some Word To Replace")
        return
    }
    let replaceWith = prompt('Write a word you want to replace with "' + word + '".')
    
    if (!replaceWith) {
        alert('Please Write Some Word To Replace With "' + word + '" .')
        return
    }
    word = word.toLowerCase()
    word = new RegExp(word, 'g')
    replaceWith = replaceWith.toLowerCase()
    let replaceWord = originalString.replace(word,replaceWith)
    document.getElementById('results').innerHTML = replaceWord
}