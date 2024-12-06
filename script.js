// Select form input elements
var nameInput = document.getElementById('name');
var imageInput = document.getElementById('image');
var phoneInput = document.getElementById('number');
var emailInput = document.getElementById('email');
var addressInput = document.getElementById('Adress');
var profileInput = document.getElementById('profile');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Select resume display elements
var resumeImage = document.getElementById('resumeImage');
var resumeName = document.getElementById('resumeName');
var resumeContact = document.getElementById('resumeContact');
var resumeEmail = document.getElementById('resumeEmail');
var resumeAddress = document.getElementById('resumeAdress');
var resumeProfile = document.getElementById('resumeDiscription');
var resumeEducation = document.getElementById('resumeEducation');
var resumeExperience = document.getElementById('resumeExperience');
var resumeSkills = document.getElementById('resumeSkills');
// Add event listener to button
var generateButton = document.querySelector('button');
generateButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    updateResume(); // Update resume details
});
// Function to update resume with user input
function updateResume() {
    resumeName.innerHTML = "<h1>".concat(nameInput.value, "</h1>");
    resumeContact.innerHTML = "<b>Phone number:</b> ".concat(phoneInput.value);
    resumeEmail.innerHTML = "<b>Email:</b> ".concat(emailInput.value);
    resumeAddress.innerHTML = "<b>Address:</b> ".concat(addressInput.value);
    resumeProfile.innerText = profileInput.value;
    resumeEducation.innerText = educationInput.value;
    resumeExperience.innerText = experienceInput.value;
    resumeSkills.innerText = skillsInput.value;
    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                resumeImage.src = e.target.result;
            }
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
}
