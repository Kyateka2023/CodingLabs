const bars = document.getElementById("config");
const header = document.getElementById("header");

//create a new element that is for the bars.
const barsIcon = document.createElement("i");
barsIcon.setAttribute("class", "fa-solid fa-bars");

// create new navigational element.
const navigationalBar = document.createElement("div");
header.appendChild(navigationalBar);
navigationalBar.setAttribute("id", "nav-droid");
const navID = document.getElementById("nav-droid");

//create all new links
const home = document.createElement("a");
const about = document.createElement("a");
const services = document.createElement("a"); 
const feedback = document.createElement("a");
const contact = document.createElement("a");

//make all links children to the new nav element.
navigationalBar.appendChild(home);
navigationalBar.appendChild(about);
navigationalBar.appendChild(services);
navigationalBar.appendChild(feedback);
navigationalBar.appendChild(contact);

//create new text nodes for the links respectively'
const homenode = document.createTextNode("Home");
const aboutnode = document.createTextNode("About");
const servicesnode = document.createTextNode("Services");
const feedbacknode = document.createTextNode("Feedback");
const contactnode = document.createTextNode("Contact");

//Let the text nodes become new children to the links
home.appendChild(homenode);
about.appendChild(aboutnode);
services.appendChild(servicesnode);
feedback.appendChild(feedbacknode);
contact.appendChild(contactnode);

//give the new links an ID
home.setAttribute("id", "home-link");
about.setAttribute("id", "about-link");
services.setAttribute("id", "services-link");
feedback.setAttribute("id", "feedback-link");
contact.setAttribute("id", "contact-link");

//give the new href attributes an ID
home.setAttribute("href", "https://www.youtube.com");
about.setAttribute("href", "https://www.youtube.com");
services.setAttribute("href", "https://www.youtube.com");
feedback.setAttribute("href", "https://www.youtube.com");
contact.setAttribute("href", "https://www.youtube.com");

//give the new target attributes an ID
home.setAttribute("target", "_blank");
about.setAttribute("target", "_blank");
services.setAttribute("target", "_blank");
feedback.setAttribute("target", "_blank");
contact.setAttribute("target", "_blank");

//give each of them an ID
const homeID = document.getElementById("home-link");
const aboutID = document.getElementById("about-link");
const servicesID = document.getElementById("services-link");
const feedbackID = document.getElementById("feedback-link");
const contactID =document.getElementById("contact-link");

//Make them invisible
homeID.style.visibility = "hidden";
aboutID.style.visibility = "hidden";
servicesID.style.visibility = "hidden";
feedbackID.style.visibility = "hidden";
contactID.style.visibility = "hidden";

//position the header element
header.style.position = "relative";

//position the new nav element
navID.style.position = "absolute";
navID.style.width = "15rem"
navID.style.top = "5rem";  
navID.style.right = "0.5rem";  

//Child to the bars element.
bars.appendChild(barsIcon);

const colors = ["grey", "black"];
let CurrentIndex= 0;
function changeColor()
{
    bars.style.backgroundColor = colors[CurrentIndex];
    barsIcon.setAttribute("class", "fa-solid fa-x");

    if (window.innerWidth <= 768) 
    {
        // navID.style.border = "3px solid lime";
        navID.style.backgroundColor = "rgb(70, 71, 70)";  
        navID.style.height = "100dvh"
        navID.style.visibility = "visible";
        navID.style.display = "flex";
        navID.style.flexDirection = "column";
        navID.style.alignItems = "center";

        //make the links visible when clicked
        homeID.style.visibility = "visible";
        aboutID.style.visibility = "visible";
        servicesID.style.visibility = "visible";
        feedbackID.style.visibility = "visible";
        contactID.style.visibility = "visible";

        //style the home link
        homeID.style.width = "100%";
        homeID.style.padding = "1rem";
        homeID.style.display = "inline-block";
        homeID.style.textAlign = "center";
        homeID.style.fontSize = "1.2rem"

        //style the other link
        aboutID.style.width = "100%";
        aboutID.style.padding = "1rem";
        aboutID.style.display = "inline-block";
        aboutID.style.textAlign = "center";
        aboutID.style.fontSize = "1.2rem";

        //style the other link
        servicesID.style.width = "100%";
        servicesID.style.padding = "1rem";
        servicesID.style.display = "inline-block";
        servicesID.style.textAlign = "center";
        servicesID.style.fontSize = "1.2rem";

        //style the other link
        feedbackID.style.width = "100%";
        feedbackID.style.padding = "1rem";
        feedbackID.style.display = "inline-block";
        feedbackID.style.textAlign = "center";
        feedbackID.style.fontSize = "1.2rem";

        //style the other link
        contactID.style.width = "100%";
        contactID.style.padding = "1rem";
        contactID.style.display = "inline-block";
        contactID.style.textAlign = "center";
        contactID.style.fontSize = "1.2rem";
    }

    CurrentIndex = CurrentIndex + 1;

    if (CurrentIndex > 1) 
    {
        CurrentIndex = 0;
        barsIcon.setAttribute("class", "fa-solid fa-bars");
        navID.style.visibility = "hidden";

        //make the links invisible when clicked
        homeID.style.visibility = "hidden";
        aboutID.style.visibility = "hidden";
        servicesID.style.visibility = "hidden";
        feedbackID.style.visibility = "hidden";
        contactID.style.visibility = "hidden";
    }

}


bars.addEventListener("click", changeColor);

//Alert the user that they have subscribed
const subscribe = document.getElementById("sub-button");

subscribe.addEventListener("click", () => 
{
    alert("You will be redirected to the subscribe page.")
});


const learn = document.getElementById("learn-button");

learn.addEventListener("click", () => 
{
    alert("You will be redirected to the next page.")
});



