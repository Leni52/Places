

    
//new XMLHttpRequest instance to read what is in JSON file
let xhr = new XMLHttpRequest();

xhr.onload= function () {

      if(this.readyState == 4 && this.status == 200){
        let myObj = JSON.parse(xhr.responseText);
        //document.getElementById('p').innerText = myObj.places[1].city;

        var newContent = "";
        //iterate through json objects and display them in newContent

        for(var i = 0; i< myObj.places.length; i++){

          newContent += '<div class="place">';
          newContent += '<img src="'
          +myObj.places[i].coverImage+'"';

          newContent += 'alt="'
          +myObj.places[i].city+ '">';

          newContent += '<p class="p1">'+
          myObj.places[i].city+'<br>';

          newContent += '<button class="b1">'+
          'Delete'+'<br>'+'</button>';
      
          newContent += '<p class ="p2">'+
          myObj.places[i].country+'<br>';

          newContent+= '<p class="p3">'+
          myObj.places[i].description+'<br>';

          newContent+='</p>';
          newContent+='</div>';

        }
     }

      document.getElementById('place-container').innerHTML = newContent;
 
      var myBtns = document.getElementsByClassName('b1');
      for(var i=0; i<myBtns.length; i++){
        myBtns[i].addEventListener('click', function(event){
           //event.target --> button,
           //event.target.parentNode -->p1
           //event.target.parentNode.parentNode -->div
            var x =  event.target.parentNode.parentNode;
            x.remove();
        
     
        })
      }

    }

  xhr.open('GET', 'places.json', true);
  xhr.send();

/////////////////////////////////////////////////////////

var cityInput = document.getElementById('city').value;
var countryInput = document.getElementById('country').value;
var coverImageInput = document.getElementById('coverImage').value;
var descriptionInput =document.getElementById('description').value;

//doing the post method as event listener do to add button

document.getElementById('btn').addEventListener('click', function(){

  var data = JSON.stringify({
    "city" : cityInput.innerHTML,
    "country" : country.innerHTML,
    "coverImage": coverImage.innerHTML,
    "description": description.innerHTML
  });
  


localStorage.setItem('city', cityInput);
console.log(localStorage.getItem('city'));

localStorage.setItem('country', countryInput);
console.log(localStorage.getItem('country'));

localStorage.setItem('coverImage', coverImageInput);
console.log(localStorage.getItem('coverImage'));

localStorage.setItem('description', descriptionInput);
console.log(localStorage.getItem('description'));

//temporarily saving the inputed values so we can show them 

// new XMLHttpRequest instance, open connection, send serialized data
let xhr2= new XMLHttpRequest();
let url = "places.json";

xhr2.open('POST', url, true);

xhr2.setRequestHeader("Content-Type", "application/json");

xhr2.send(JSON.stringify({
  "city" : cityInput.innerHTML,
  "country" : country.innerHTML,
  "coverImage": coverImage.innerHTML,
  "description": description.innerHTML
}))})

///////////////////////////////////

//present the entered values as new div 

var newDiv = document.createElement('div');

var newPCity = document.createElement('p');
newPCity.textContent = cityInput;
newPCity.setAttribute('class', 'p1');
newDiv.appendChild(newPCity);



var newPCountry = document.createElement('p');
newPCountry.textContent = countryInput;
newPCountry.setAttribute('class', 'p2');
newDiv.appendChild(newPCountry);

var brLine = document.createElement('br'); 
newPCity.appendChild(brLine);

var newButton = document.createElement('button');
var t = document.createTextNode("Delete");
newButton.setAttribute('class', 'b1');
newButton.appendChild(t);
newPCity.appendChild(newButton);



var newPcoverImage = document.createElement('p');
newPcoverImage.textContent = coverImageInput;
newDiv.appendChild(newPcoverImage);


var newPDescription = document.createElement('p');
newPDescription.textContent = descriptionInput;
newPDescription.setAttribute('class', 'p3');
newDiv.appendChild(newPDescription);


document.body.appendChild(newDiv);

//////////////////////////////////////////////////////////
