// Select form input elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const imageInput = document.getElementById('image') as HTMLInputElement;
const phoneInput = document.getElementById('number') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const addressInput = document.getElementById('Adress') as HTMLInputElement;
const profileInput = document.getElementById('profile') as HTMLTextAreaElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Select resume display elements
const resumeImage = document.getElementById('resumeImage') as HTMLImageElement;
const resumeName = document.getElementById('resumeName') as HTMLHeadingElement;
const resumeContact = document.getElementById('resumeContact') as HTMLParagraphElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLParagraphElement;
const resumeAddress = document.getElementById('resumeAdress') as HTMLParagraphElement;
const resumeProfile = document.getElementById('resumeDiscription') as HTMLParagraphElement;
const resumeEducation = document.getElementById('resumeEducation') as HTMLParagraphElement;
const resumeExperience = document.getElementById('resumeExperience') as HTMLParagraphElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLParagraphElement;

// Add event listener to button
const generateButton = document.querySelector('button') as HTMLButtonElement;

generateButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    updateResume(); // Update resume details
});

// Function to update resume with user input
function updateResume() {
    resumeName.innerHTML = `<h1>${nameInput.value}</h1>`;
    resumeContact.innerHTML = `<b>Phone number:</b> ${phoneInput.value}`;
    resumeEmail.innerHTML = `<b>Email:</b> ${emailInput.value}`;
    resumeAddress.innerHTML = `<b>Address:</b> ${addressInput.value}`;
    resumeProfile.innerText = profileInput.value;
    resumeEducation.innerText = educationInput.value;
    resumeExperience.innerText = experienceInput.value;
    resumeSkills.innerText = skillsInput.value;

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                resumeImage.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
}
