// Variables
var i = 0;
var appsList = []

function getWebsiteLink(){

    return document.getElementById('urlTextArea').value;

}

function submitLink(){
    let link = getWebsiteLink();

    if(link.includes('https://') == true && link != ''){

        appsList.push(link + '\n');
        console.log(`Added \"${link}\" To appslist.`)
        document.getElementById('appList').innerHTML = appsList;
        document.getElementById('appListTitle').innerHTML = `<strong>Application List (${appsList.length}):</strong>`

    } else {

        console.error(`Link \"${link}\" Is Not A Valid URL. Check it and try again.`);
        alert(`The item you entered is not a URL. Ensure your URL contains \"https://\" or \"http://\" and try again.`);    

    }
}