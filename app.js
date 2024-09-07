// TypeScript for handling form submission and toggling section visibility
// Select form and sections
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var displayPersonalInfo = document.getElementById('display-personal-info');
var displayEducation = document.getElementById('display-education');
var displayWorkExperience = document.getElementById('display-work-experience');
var displaySkills = document.getElementById('display-skills');
// Select toggle buttons and sections
var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var toggleEducationButton = document.getElementById('toggle-education-btn');
var toggleWorkExperienceButton = document.getElementById('toggle-work-experience-btn');
var skillsSection = document.getElementById('skills-section');
var educationSection = document.getElementById('education-section');
var workExperienceSection = document.getElementById('work-experience-section');
// Toggle visibility for sections
toggleSkillsButton.addEventListener('click', function () {
    toggleVisibility(skillsSection, toggleSkillsButton, "Skills");
});
toggleEducationButton.addEventListener('click', function () {
    toggleVisibility(educationSection, toggleEducationButton, "Education");
});
toggleWorkExperienceButton.addEventListener('click', function () {
    toggleVisibility(workExperienceSection, toggleWorkExperienceButton, "Work Experience");
});
// Function to toggle visibility
function toggleVisibility(section, button, sectionName) {
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.textContent = "Hide ".concat(sectionName, " Section");
    }
    else {
        section.style.display = 'none';
        button.textContent = "Show ".concat(sectionName, " Section");
    }
}
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePicture = document.getElementById('profile-picture').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    /*   // Display resume
       resumeDisplay.style.display = 'block';
       displayPersonalInfo.innerHTML = `
           <img src="${profilePicture}" alt="Profile Picture">
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
       `;
       displayEducation.innerHTML = `<h3>Education</h3><p>${education}</p>`;
       displayWorkExperience.innerHTML = `<h3>Work Experience</h3><p>${workExperience}</p>`;
       displaySkills.innerHTML = `<h3>Skills</h3><p>${skills}</p>`;
   }); 
});
/*   // Display resume
   resumeDisplay.style.display = 'block';
   displayPersonalInfo.innerHTML = `
       <img src="${profilePicture}" alt="Profile Picture">
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
   `;
   displayEducation.innerHTML = `<h3>Education</h3><p>${education}</p>`;
   displayWorkExperience.innerHTML = `<h3>Work Experience</h3><p>${workExperience}</p>`;
   displaySkills.innerHTML = `<h3>Skills</h3><p>${skills}</p>`;
}); 
