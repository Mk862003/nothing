// TypeScript for handling form submission and toggling section visibility

// Select form and sections
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const displayPersonalInfo = document.getElementById('display-personal-info') as HTMLDivElement;
const displayEducation = document.getElementById('display-education') as HTMLDivElement;
const displayWorkExperience = document.getElementById('display-work-experience') as HTMLDivElement;
const displaySkills = document.getElementById('display-skills') as HTMLDivElement;

// Select toggle buttons and sections
const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const toggleEducationButton = document.getElementById('toggle-education-btn') as HTMLButtonElement;
const toggleWorkExperienceButton = document.getElementById('toggle-work-experience-btn') as HTMLButtonElement;

const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
const educationSection = document.getElementById('education-section') as HTMLDivElement;
const workExperienceSection = document.getElementById('work-experience-section') as HTMLDivElement;

// Toggle visibility for sections
toggleSkillsButton.addEventListener('click', () => {
    toggleVisibility(skillsSection, toggleSkillsButton, "Skills");
});

toggleEducationButton.addEventListener('click', () => {
    toggleVisibility(educationSection, toggleEducationButton, "Education");
});

toggleWorkExperienceButton.addEventListener('click', () => {
    toggleVisibility(workExperienceSection, toggleWorkExperienceButton, "Work Experience");
});

// Function to toggle visibility
function toggleVisibility(section: HTMLElement, button: HTMLButtonElement, sectionName: string) {
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.textContent = `Hide ${sectionName} Section`;
    } else {
        section.style.display = 'none';
        button.textContent = `Show ${sectionName} Section`;
    }
}

// Handle form submission
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profilePicture = (document.getElementById('profile-picture') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
