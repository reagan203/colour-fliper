const colors =["The Earth is the third planet from the Sun",
"A group of owls is called a parliament",
"The Eiffel Tower in Paris, France, was completed in 1889",
"Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible",
"The human brain is approximately 75% water",
"The Great Wall of China is over 13,000 miles long",
"The fastest land animal is the cheetah, capable of reaching speeds up to 60-70 miles per hour",
"Bees can see ultraviolet light, which helps them find nectar in flowers",
"Octopuses have three hearts",
"The moon's gravity is about 1/6th of Earth's gravity"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn . addEventListener("click",function(){
    // get randon number between0-3
    
    const randomFacts = getRandomFacts();
    document.body.style.backgroundcolor = colors[randomFacts];
    color.textContent=colors[randomFacts]


});

function getRandomFacts(){
    return Math.floor( Math.random()*colors.length );
}

 // Get the form element
 const form = document.getElementById('contentForm');

 // Get the div where submitted content will be displayed
 const submittedContentDiv = document.getElementById('submittedContent');

 // Add a submit event listener to the form
 form.addEventListener('submit', function (event) {
     event.preventDefault(); // Prevent the default form submission

     // Get the content from the textarea
     const content = document.getElementById('content').value;

     // Create a new element to display the submitted content
     const contentElement = document.createElement('p');
     contentElement.textContent = content;

     // Append the content element to the submittedContentDiv
     submittedContentDiv.appendChild(contentElement);

     // Clear the textarea
     document.getElementById('content').value = '';
 });