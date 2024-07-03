// Function to display skills
function displaySkills() {
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.classList.add('skill-item');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}

// Function to display projects
function displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <i class="fas fa-award"></i>
            <span>${project.name}</span>
        `;
        projectItem.addEventListener('click', () => showAchievement(project));
        projectsList.appendChild(projectItem);
    });
}

// Function to show achievement modal
function showAchievement(project) {
    const modal = document.getElementById('achievement-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = project.name;
    modalImage.src = project.image;
    modal.style.display = 'block';
}

// Close modal when clicking on the close button or outside the modal
window.onclick = function(event) {
    const modal = document.getElementById('achievement-modal');
    if (event.target == modal || event.target.className == 'close') {
        modal.style.display = 'none';
    }
}



// Initialize AOS
AOS.init();

// Skills data
const skills = [
    "Aerospace Engineering", "Aircraft Maintenance", "Project Management",
    "Python", "MATLAB", "C++", "English", "Japanese", "Korean",
    "Microsoft Office", "Adobe Illustrator", "Problem Solving", "Critical Thinking"
];

// Projects data
const projects = [
    { name: "CanSat Competition Korea 2023 - Grand Prize", image: "img/cansat.jpg" },
    { name: "Capstone Design Competition - SASE Award", image: "img/sase_award.jpg" },
    { name: "Academic Achievement Award", image: "img/academic_achievement.jpg" },
    { name: "Model Student Award", image: "img/model_student.jpg" },
    { name: "On Campus Social Big Data Analysis Hackathon - 3rd Place", image: "img/uni_hackathon.jpg" },
    { name: "On Campus Capstone Design Competition - 3rd Place", image: "img/uni_capstone.jpg" }
];

// Call functions to display content
displaySkills();
displayProjects();

// Apply draggable functionality to the modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('achievement-modal');
    if (modal) {
        makeDraggable(modal);
    }
});