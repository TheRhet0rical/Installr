// Objects

const urlTextBox = document.getElementById('urlTextBox');
const linksBox = document.getElementById('linksBox');
const linksListTitle = document.getElementById('linksListTitle');

// Buttons

const submitButton = document.getElementById('submitButton');
const libraryButton = document.getElementById('libraryButton');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const runButton = document.getElementById('runButton');

// Misc 

var i = 0;
var linksList = [];

function renderList(){
    linksListTitle.innerHTML = `Currently Mounted Links (${linksList.length})`;
    linksBox.value = linksList.join('');
}

// Check For Mobile Devices
if (screen.width <= 480){
    location.href = 'https://rhet0rical.dev/mobile.html';
}

// Events

submitButton.addEventListener('click', function(){

    let submittedURL = urlTextBox.value;

    console.log(`Attempting To Mount \"${submittedURL}\" Onto linksList...`);
    if (submittedURL.includes('https://') == true){
        linksList.push(`• ${submittedURL}\n`);
        console.log('Added Successfully.');
    } else {
        console.error('Failed To Add Item. Check To Make Sure It Contains An \"https://\" And Try Again.');
        alert('Failed To Add Item. Check To Make Sure It Contains An \"https://\" And Try Again.');
    }

    renderList();

});

saveButton.addEventListener('click', function(){
    
    console.log(`Attempting To Save \"${linksList}\" To LocalStorage...`);
    try {
        localStorage.setItem('storedLinksList', JSON.stringify(linksList));
        console.log('Successfully Saved To LocalStorage.');
    } catch (error) {
        console.error(`Failed To Save To LocalStorage: ${error}.`);
        alert(`Failed To Save To LocalStorage: ${error}.`);
    }
    renderList();

})

loadButton.addEventListener('click', function(){

    console.log(`Attempting To Load List From LocalStorage...`);
    try {
        linksList = JSON.parse(localStorage.getItem('storedLinksList'));
        console.log(`Loaded Data From LocalStorage Successfully: ${linksList}.`);
    } catch (error) {
        console.error(`Failed To Load From LocalStorage: ${error}.`);
        alert(`Failed To Get Data From LocalStorage. You May Have Nothing Saved. Check Console For More Details.`);
    }
    renderList();

})

runButton.addEventListener('click', function(){

    for(i = 0; i < linksList.length; i++){
        
        try {

            if (linksList[i].includes('https://') == true){
                console.log(`Attempting To Open ${linksList[i]}...`)
                window.open(linksList[i].replace('•', ''));
            } else {
                break;
            }

        } catch (error) {

            console.error(`Failed To Open Page: ${linksList[i]}`);

        }

    }

})

libraryButton.addEventListener('click', function(){
    window.open('/library.html');
})