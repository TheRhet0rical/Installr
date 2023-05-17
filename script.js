// Elements

const urlTextbox = document.getElementById('urlTextbox');
const submitButton = document.getElementById('submitButton');
const linkHandlerTitle = document.getElementById('linkHandlerTitle');
const linkHolder = document.getElementById('linkHolder');

// Buttons
const undoButton = document.getElementById('undoButton');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const runButton = document.getElementById('runButton');
const footerButton = document.getElementById('footerButton');

var linkList = [];

// Functions
function renderList(){
    linkHolder.value = linkList.join('');
    linkHandlerTitle.innerHTML = `<b>Currently Mounted Links <i>(${linkList.length})</i></b> :`
}

submitButton.addEventListener('click', function(){
    let submittedURL = urlTextbox.value;
    
    // Check If URL Has 'https://' and domain segway.
    if (submittedURL.includes('https://') == true){
        linkList.push(`• ${submittedURL}\n`);
        console.log(`Added: \"${submittedURL}\" To linkList.`)
    } else {
        console.log(`Failed To Add: \"${submittedURL}\" To linkList. No HTTPS Protocol Was Entered.`);
        alert(`Failed To Add: \"${submittedURL}\" To linkList. No HTTPS Protocol Was Entered.`);
    }
    renderList();

})

undoButton.addEventListener('click', function(){
    console.log(`Undid ${linkList.pop()}.`);
    renderList();
})

saveButton.addEventListener('click', function(){
    try {
        if (linkList.length > 0){
            localStorage.setItem('StorageLinkList', JSON.stringify(linkList));

            console.log(`Saved Preset: ${JSON.stringify(linkList)}.`);
            alert(`Saved Preset: ${JSON.stringify(linkList)}.`);
        } else {
            console.log('Error Saving Preset: Empty List.')
            alert('Error Saving Preset: Empty List.');
        }
    } catch (error) {
        console.log(`Error Saving Preset: ${error}`);
        alert(`Error Saving Preset: ${error}`);
    }
})

loadButton.addEventListener('click', function(){
    try {
        linkList = JSON.parse(localStorage.getItem('StorageLinkList'));
        console.log(linkList);
        renderList();
        
        console.log(`Loaded Preset: ${linkList}.`);
        alert(`Loaded Preset: ${linkList}.`);
    } catch (error) {
        console.log(`Error Loading Preset: ${error}`);
        alert(`Error Loading Preset: ${error}`);
    }
})

runButton.addEventListener('click', function(){
    
    for (i = 0; i < linkList.length; i++){

        try {
            console.log(`Attempting To Open: ${linkList[i]}...`)
            window.open(linkList[i].replace('•', ''));
        } catch (error) {
            console.log(`Failed To Open: ${linkList[i]}, ${error}`)
        }

    }

})

footerButton.addEventListener('click', function(){
    window.open('https://github.com/TheRhet0rical/installr');
})