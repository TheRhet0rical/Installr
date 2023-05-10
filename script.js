// Misc Variables
var i = 0;
var allLinks = [];

// Objects
let submitButton = document.getElementById('submitButton');
let saveButton = document.getElementById('saveButton');
let loadButton = document.getElementById('loadButton');
let runButton = document.getElementById('runButton');

let linkArea = document.getElementById('linkArea');
let linkHandler = document.getElementById('linkHandlerText');
let allLinksArea = document.getElementById('allLinksArea');

let homepageButton = document.getElementById('homepageButton');
let githubButton = document.getElementById('githubButton');

// Render Link Counter
function renderLinks(){
    linkHandler.innerHTML = `<b>All Currently Loaded Links (${allLinks.length})<b>`
    console.log('Successfully Rendered Link Counter:' + allLinks.length);
}

// Submit Button Code
submitButton.addEventListener('click', function(){

    let submittedURL = linkArea.value;

    if (submittedURL.includes('https://') == true && submittedURL.includes('.')){
        allLinks.push(submittedURL);
        console.log(`Added \"${submittedURL}\" To Links List.`);

        allLinksArea.innerHTML = allLinks;
        linkArea.value = '';
    } else {
        console.log(`Failed To Add \"${submittedURL}\" To Links List.`);
        alert(`The item you entered is invalid. Ensure your link contains an \"https://\" and try again.`);
    }
    renderLinks();

});

// Save Button Code
saveButton.addEventListener('click', function(){
    console.log(`Attempting To Save ${allLinks} To LocalStorage...`);
    
    try {
        localStorage.setItem('links', allLinks);
        alert(`Successfully Saved Data To LocalStorage.`);
        console.log(`Successfully Saved Data To LocalStorage.`);
    } catch (error) {
        alert(`Failed To Save Data To LocalStorage: ${error}`)
        console.error(`Failed To Save Data To LocalStorage: ${error}`);
    }
    renderLinks();

});

// Load Button
loadButton.addEventListener('click', function(){
    console.log(`Attempting To Load From LocalStorage...`);

    try {
        allLinks = localStorage.getItem('links');
        allLinksArea.innerHTML = allLinks;

        alert('Successfully Loaded Data From LocalStorage.');
        console.log(`Successfully Fetched Data From LocalStorage: ${allLinks}`);
    } catch (error) {
        alert(`Failed To Load Data From LocalStorage: ${error}`);
        console.error(`Failed To Pull Data From LocalStorage: ${error}`);
    }
    renderLinks();

});

// Run Button
runButton.addEventListener('click', function(){

    if (allLinks.length > 0){

        console.log(`Attempting To Open ${allLinks.length} Links...`)
        try {
            for (var i = 0; i < allLinks.length; i++){
                console.log(`Opening ${allLinks[i]}...`);
                window.open(allLinks[i]);
            }
        } catch (error) {
            alert(`Failed To Run: ${error}`);
            console.log(`Failed To Run: ${error}`);
        }

    } else {
        alert('Failed To Run: No links are loaded.');
        console.error('Failed To Run: No links are loaded');
    }
    renderLinks();

});

// Homepage Button
homepageButton.addEventListener('click', function(){
    window.open('https://rhet0rical.dev/');
})

// Alternate GitHub Button
githubButton.addEventListener('click', function(){
    window.open('https://github.com/TheRhet0rical');
})