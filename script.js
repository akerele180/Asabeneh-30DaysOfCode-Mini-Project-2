document.querySelector('body').style.fontFamily = 'poppins, sans-serif'

//--------------Styling the wrapper--------------
document.querySelector('.wrapper').style.margin = '0px auto'
document.querySelector('.wrapper').style.width = '60vw';
document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h2').style.textAlign = 'center'
document.querySelector('.wrapper').style.cursor = 'pointer'

/**---------------------------STYLING THE HEADERS---------------------------*/
document.querySelector('h2').style.textDecoration = 'underline';
const head = document.querySelector('h1');
head.innerHTML = `Asabeneh Yetayeh challenges in <span>2020</span>`

let modifiedYear = document.getElementsByTagName('span')[0]
modifiedYear.style.fontSize = '60px';
let h1Colors = ['green', 'red', 'pink', 'purple', 'teal'];

function modifiedYearColor(){
    modifiedYear.style.color = h1Colors[Math.floor(Math.random()*5)]
    period.style.backgroundColor = h1Colors[Math.floor(Math.random()*5)]
}
setInterval(modifiedYearColor, 1000);//An interval of one seconds to change the color of the year 2020 in the h1 element.

/**-----------------------CREATING THE DATE AND TIME OBJECT-----------------------*/
let period = document.createElement('h4'); //create the element
period.id = 'calender' //Giving an id attribute to the h4 element.
let body = document.querySelector('body');
body.appendChild(period); //Going into the HTML DOM
period.style.cssText = 'text-align:center; background-color: orange; margin: 0 auto; width: 20vw; padding: 10px; font-weight: lighter; border-radius: 10px'
document.querySelector('h2').after(period)//Placing the period element to the exact location or spot intended to be.

function displayTime() {
    let timePeriod = new Date();
    let hour = timePeriod.getHours();
    let minute = timePeriod.getMinutes();
    let seconds = timePeriod.getSeconds();
    let day = timePeriod.getDate()
    let month = timePeriod.getMonth() + 1;
    let year = timePeriod.getFullYear();
    let months = {1:'January', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December',}
    
    hour = hour < 10 ? "0" + hour : hour; 
    minute = minute < 10 ? "0" + minute : minute; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 
    
    let calendar = `${months[month]} ${day}, ${year} ${hour}:${minute}:${seconds}`;    
    period.innerHTML = calendar; //assing the value calendar to the period variable(element).
}
displayTime();
setInterval(displayTime, 1000);

//----------------------------Styling the Lists----------------------------
document.querySelector('ul').style.padding = '0'
let lists = document.querySelectorAll('li');
lists.forEach((element, index)=>{
    element.style.cssText = 'list-style: none; padding: 10px; margin-bottom: 2px; background-color: red'
    if(index === 0){
        element.style.backgroundColor = 'green'
    }
    else if(index === 1){
        element.style.backgroundColor = 'yellow';
    }
})

/*--------------------------------------FOOTER BIO--------------------------------------*/
/* CREATING THE ELEMENTS FOR THE FOOTER DEM */
let footer = document.createElement('footer');

let bio_1 = document.createElement('div');
bio_1.className = 'profile-name';
let bio_1a = document.createElement('h4');
bio_1a.id = 'fullName';
let socialLinks = document.createElement('div');
socialLinks.className = 'social-icons';
for(let j = 0; j <=2; j++){
    let images = ['<i class="fab fa-linkedin">',
    '<i class="fab fa-twitter-square"></i>',
    '<i class="fab fa-github-square"></i>',]
    let url = asabenehChallenges2020['author']['socialLinks'][j]['url']
    let img = document.createElement('span');
    let a = document.createElement('a')
    a.href = url;
    socialLinks.append(a);
    a.appendChild(img);
    img.innerHTML = images[j]
    img.style.margin = '4px'
    img.style.fontSize = '28px'
    img.style.color = 'black'
}

let bio_2 = document.createElement('div');
bio_2.className = 'profile-intro';

let bio_3 = document.createElement('div');
bio_3.className = 'portfolio';

let bio_3Titles_1 = document.createElement('section');
let bio_3Titles_2 = document.createElement('section');
let bio_3Titles_3 = document.createElement('section');

let ul_1 = document.createElement('ul');
let ul_2 = document.createElement('ul');
let ul_3 = document.createElement('ul');

let bio_3Titles_H1 = document.createElement('h4');
let bio_3Titles_H2 = document.createElement('h4');
let bio_3Titles_H3 = document.createElement('h4');

let bio_4 = document.createElement('div');
bio_4.className = 'keywords';
let spans = document.createElement('span');
asabenehChallenges2020['keywords'].forEach(element => {
    spans.innerHTML = '#' + element;
    bio_4.appendChild(spans);
    return spans;
});
console.log(asabenehChallenges2020['keywords'])


// APPENDING THE CREATED FOOTERS TO THE DOM AND GIVING IT ELEMENTS
document.body.appendChild(footer);
footer.appendChild(bio_1);
bio_1.appendChild(bio_1a);
bio_1.appendChild(socialLinks);

footer.appendChild(bio_2);
footer.appendChild(bio_3);

bio_3.appendChild(bio_3Titles_1);
bio_3.appendChild(bio_3Titles_2);
bio_3.appendChild(bio_3Titles_3);

bio_3Titles_1.appendChild(bio_3Titles_H1);
bio_3Titles_1.appendChild(ul_1);
for(let i=0; i<asabenehChallenges2020['author']['titles'].length; i++){
    let li = document.createElement('li');
    ul_1.appendChild(li);
    li.innerHTML = asabenehChallenges2020['author']['titles'][i][1];
    if (i==0){
    li.style.listStyleImage = "url('./images/seedling-1.png')"}
    else if (i==1){
        li.style.listStyleImage = "url('./images/personal computer-1.png')"
    }
    else if (i==2){
        li.style.listStyleImage = "url('./images/Globe with meridians-1.png')"
    }
    else if (i==3){
        li.style.listStyleImage = "url('./images/fire-1.png')"
    }
    else {
        li.style.listStyleImage = "url('./images/notebook-1.png')"
    }
}

bio_3Titles_2.appendChild(bio_3Titles_H2);
bio_3Titles_2.appendChild(ul_2);
for(let i=0; i<asabenehChallenges2020['author']['skills'].length; i++){
    let li = document.createElement('li');
    ul_2.appendChild(li);
    li.innerHTML = asabenehChallenges2020['author']['skills'][i];
    li.style.listStyleImage = "url('./images/check mark-1.png')"
}

bio_3Titles_3.appendChild(bio_3Titles_H3);
bio_3Titles_3.appendChild(ul_3);
for(let i=0; i<asabenehChallenges2020['author']['qualifications'].length; i++){
        let li = document.createElement('li');
        ul_3.appendChild(li);
        li.innerHTML = asabenehChallenges2020['author']['qualifications'][i];
        li.style.listStyle = "url('./images/graduation cap-1.png')"
        if(i==0){
            li.style.listStyle = "url('./images/notebook-1.png')"   
        }
    }
footer.appendChild(bio_4);

bio_1a.innerHTML = asabenehChallenges2020['author']['firstName'] + ' ' + asabenehChallenges2020['author']['lastName'];
// socialLinks.textContent = 'Akerele Tosin James'

bio_2.innerHTML = asabenehChallenges2020['author']['bio'];

bio_3Titles_H1.innerHTML = 'Titles';
bio_3Titles_H2.innerHTML = 'Skills';
bio_3Titles_H3.innerHTML = 'Qualifications';
bio_4.textContent = 'Keywords'

// ----------------------------STYLING THE FOOTER--------------------------------
bio_1.style.cssText = 'text-align: center; font-weight: bold; font-size: 20px; text-transform: capitalize; margin-bottom: 40px';
bio_2.style.cssText = 'text-align: center; font-size: 15.55px; margin-bottom: 40px;'
bio_3.style.cssText = 'display: flex; flex-direction: row; justify-content: space-between';
ul_1.style.cssText = 'padding: 0; margin: 0';
ul_2.style.cssText = 'padding: 0; margin: 0';
ul_3.style.cssText = 'padding: 0; margin: 0';
footer.style.cssText = 'width: 60vw; margin: 0 auto';
document.getElementById('fullName').style.marginBottom = '3px';
bio_3Titles_H1.style.cssText = 'margin:  0 0 5px -20px;'
bio_3Titles_H2.style.cssText = 'margin:  0 0 5px -20px;'
bio_3Titles_H3.style.cssText = 'margin:  0 0 5px -20px;';
bio_4.style.fontWeight = 'bold'