// // Resume data structure
// let resumeData = {
//   personal: {
//       name: "",
//       title: "",
//       email: "",
//       phone: "",
//       location: "",
//       website: "",
//       linkedin: "",
//       github: "",
//       summary: ""
//   },
//   education: [],
//   experience: [],
//   skills: {
//       technical: [],
//       soft: []
//   },
//   projects: []
// };

// let activeTemplate = "modern";

// // DOM Elements
// const tabTriggers = document.querySelectorAll('.tab-trigger');
// const tabContents = document.querySelectorAll('.tab-content');
// const templateOptions = document.querySelectorAll('input[name="template"]');
// const saveButton = document.getElementById('save-button');
// const printButton = document.getElementById('print-button');
// const saveAlert = document.getElementById('save-alert');
// const resumePreview = document.getElementById('resume-preview');

// // Personal info form elements
// const nameInput = document.getElementById('name');
// const titleInput = document.getElementById('title');
// const emailInput = document.getElementById('email');
// const phoneInput = document.getElementById('phone');
// const locationInput = document.getElementById('location');
// const websiteInput = document.getElementById('website');
// const linkedinInput = document.getElementById('linkedin');
// const githubInput = document.getElementById('github');
// const summaryInput = document.getElementById('summary');

// // Add buttons
// const addEducationBtn = document.getElementById('add-education');
// const addExperienceBtn = document.getElementById('add-experience');
// const addProjectBtn = document.getElementById('add-project');
// const addTechnicalSkillBtn = document.getElementById('add-technical-skill');
// const addSoftSkillBtn = document.getElementById('add-soft-skill');

// // Containers
// const educationContainer = document.getElementById('education-container');
// const experienceContainer = document.getElementById('experience-container');
// const projectsContainer = document.getElementById('projects-container');
// const technicalSkillsContainer = document.getElementById('technical-skills-container');
// const softSkillsContainer = document.getElementById('soft-skills-container');

// // Templates
// const educationItemTemplate = document.getElementById('education-item-template');
// const experienceItemTemplate = document.getElementById('experience-item-template');
// const projectItemTemplate = document.getElementById('project-item-template');
// const skillTagTemplate = document.getElementById('skill-tag-template');

// // Initialize the app
// function init() {
//   loadSavedData();
//   setupEventListeners();
//   renderResumePreview();
// }

// // Load saved data from localStorage
// function loadSavedData() {
//   try {
//       const savedData = localStorage.getItem('resumeData');
//       if (savedData) {
//           const parsedData = JSON.parse(savedData);
//           resumeData = parsedData.data || resumeData;
//           activeTemplate = parsedData.template || 'modern';
          
//           // Set the active template radio button
//           document.getElementById(activeTemplate).checked = true;
          
//           // Populate form fields with saved data
//           populateFormFields();
//       }
//   } catch (error) {
//       console.error('Error loading resume data:', error);
//   }
// }

// // Populate form fields with data
// function populateFormFields() {
//   // Personal info
//   nameInput.value = resumeData.personal.name;
//   titleInput.value = resumeData.personal.title;
//   emailInput.value = resumeData.personal.email;
//   phoneInput.value = resumeData.personal.phone;
//   locationInput.value = resumeData.personal.location;
//   websiteInput.value = resumeData.personal.website;
//   linkedinInput.value = resumeData.personal.linkedin;
//   githubInput.value = resumeData.personal.github;
//   summaryInput.value = resumeData.personal.summary;
  
//   // Education
//   educationContainer.innerHTML = '';
//   resumeData.education.forEach((edu, index) => {
//       addEducationItem(edu, index + 1);
//   });
  
//   // Experience
//   experienceContainer.innerHTML = '';
//   resumeData.experience.forEach((exp, index) => {
//       addExperienceItem(exp, index + 1);
//   });
  
//   // Projects
//   projectsContainer.innerHTML = '';
//   resumeData.projects.forEach((proj, index) => {
//       addProjectItem(proj, index + 1);
//   });
  
//   // Skills
//   technicalSkillsContainer.innerHTML = '';
//   resumeData.skills.technical.forEach(skill => {
//       addSkillTag(skill, 'technical');
//   });
  
//   softSkillsContainer.innerHTML = '';
//   resumeData.skills.soft.forEach(skill => {
//       addSkillTag(skill, 'soft');
//   });
// }

// // Setup event listeners
// function setupEventListeners() {
//   // Tab switching
//   tabTriggers.forEach(trigger => {
//       trigger.addEventListener('click', () => {
//           const tabId = trigger.getAttribute('data-tab');
//           switchTab(tabId);
//       });
//   });
  
//   // Template selection
//   templateOptions.forEach(option => {
//       option.addEventListener('change', () => {
//           activeTemplate = option.value;
//           renderResumePreview();
//       });
//   });
  
//   // Personal info form inputs
//   nameInput.addEventListener('input', updatePersonalInfo);
//   titleInput.addEventListener('input', updatePersonalInfo);
//   emailInput.addEventListener('input', updatePersonalInfo);
//   phoneInput.addEventListener('input', updatePersonalInfo);
//   locationInput.addEventListener('input', updatePersonalInfo);
//   websiteInput.addEventListener('input', updatePersonalInfo);
//   linkedinInput.addEventListener('input', updatePersonalInfo);
//   githubInput.addEventListener('input', updatePersonalInfo);
//   summaryInput.addEventListener('input', updatePersonalInfo);
  
//   // Add buttons
//   addEducationBtn.addEventListener('click', () => {
//       const newEducation = {
//           institution: "",
//           degree: "",
//           fieldOfStudy: "",
//           startDate: "",
//           endDate: "",
//           description: ""
//       };
//       resumeData.education.push(newEducation);
//       addEducationItem(newEducation, resumeData.education.length);
//       renderResumePreview();
//   });
  
//   addExperienceBtn.addEventListener('click', () => {
//       const newExperience = {
//           company: "",
//           position: "",
//           location: "",
//           startDate: "",
//           endDate: "",
//           description: ""
//       };
//       resumeData.experience.push(newExperience);
//       addExperienceItem(newExperience, resumeData.experience.length);
//       renderResumePreview();
//   });
  
//   addProjectBtn.addEventListener('click', () => {
//       const newProject = {
//           title: "",
//           technologies: "",
//           link: "",
//           description: ""
//       };
//       resumeData.projects.push(newProject);
//       addProjectItem(newProject, resumeData.projects.length);
//       renderResumePreview();
//   });
  
//   // Add skills
//   addTechnicalSkillBtn.addEventListener('click', () => {
//       addSkill('technical');
//   });
  
//   document.getElementById('technical-skills').addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//           e.preventDefault();
//           addSkill('technical');
//       }
//   });
  
//   addSoftSkillBtn.addEventListener('click', () => {
//       addSkill('soft');
//   });
  
//   document.getElementById('soft-skills').addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//           e.preventDefault();
//           addSkill('soft');
//       }
//   });
  
//   // Save and Print buttons
//   saveButton.addEventListener('click', saveResumeData);
//   printButton.addEventListener('click', printResume);
// }

// // Switch between tabs
// function switchTab(tabId) {
//   tabTriggers.forEach(trigger => {
//       if (trigger.getAttribute('data-tab') === tabId) {
//           trigger.classList.add('active');
//       } else {
//           trigger.classList.remove('active');
//       }
//   });
  
//   tabContents.forEach(content => {
//       if (content.id === tabId + '-tab') {
//           content.classList.add('active');
//       } else {
//           content.classList.remove('active');
//       }
//   });
// }

// // Update personal info in the data object
// function updatePersonalInfo() {
//   resumeData.personal = {
//       name: nameInput.value,
//       title: titleInput.value,
//       email: emailInput.value,
//       phone: phoneInput.value,
//       location: locationInput.value,
//       website: websiteInput.value,
//       linkedin: linkedinInput.value,
//       github: githubInput.value,
//       summary: summaryInput.value
//   };
//   renderResumePreview();
// }

// // Add education item to the form
// function addEducationItem(education, index) {
//   const clone = document.importNode(educationItemTemplate.content, true);
  
//   // Set the item number
//   clone.querySelector('.item-number').textContent = index;
  
//   // Set values if they exist
//   if (education) {
//       clone.querySelector('.institution').value = education.institution;
//       clone.querySelector('.degree').value = education.degree;
//       clone.querySelector('.fieldOfStudy').value = education.fieldOfStudy;
//       clone.querySelector('.startDate').value = education.startDate;
//       clone.querySelector('.endDate').value = education.endDate;
//       clone.querySelector('.description').value = education.description;
//   }
  
//   // Add event listeners for input changes
//   const inputs = clone.querySelectorAll('input, textarea');
//   inputs.forEach(input => {
//       input.addEventListener('input', () => {
//           const itemIndex = index - 1;
//           const field = input.classList[0]; // The first class is the field name
//           resumeData.education[itemIndex][field] = input.value;
//           renderResumePreview();
//       });
//   });
  
//   // Add event listener for delete button
//   const deleteBtn = clone.querySelector('.delete-button');
//   deleteBtn.addEventListener('click', () => {
//       resumeData.education.splice(index - 1, 1);
//       refreshEducationItems();
//       renderResumePreview();
//   });
  
//   educationContainer.appendChild(clone);
// }

// // Refresh all education items (after deletion)
// function refreshEducationItems() {
//   educationContainer.innerHTML = '';
//   resumeData.education.forEach((edu, index) => {
//       addEducationItem(edu, index + 1);
//   });
// }

// // Add experience item to the form
// function addExperienceItem(experience, index) {
//   const clone = document.importNode(experienceItemTemplate.content, true);
  
//   // Set the item number
//   clone.querySelector('.item-number').textContent = index;
  
//   // Set values if they exist
//   if (experience) {
//       clone.querySelector('.company').value = experience.company;
//       clone.querySelector('.position').value = experience.position;
//       clone.querySelector('.location').value = experience.location;
//       clone.querySelector('.startDate').value = experience.startDate;
//       clone.querySelector('.endDate').value = experience.endDate;
//       clone.querySelector('.description').value = experience.description;
//   }
  
//   // Add event listeners for input changes
//   const inputs = clone.querySelectorAll('input, textarea');
//   inputs.forEach(input => {
//       input.addEventListener('input', () => {
//           const itemIndex = index - 1;
//           const field = input.classList[0]; // The first class is the field name
//           resumeData.experience[itemIndex][field] = input.value;
//           renderResumePreview();
//       });
//   });
  
//   // Add event listener for delete button
//   const deleteBtn = clone.querySelector('.delete-button');
//   deleteBtn.addEventListener('click', () => {
//       resumeData.experience.splice(index - 1, 1);
//       refreshExperienceItems();
//       renderResumePreview();
//   });
  
//   experienceContainer.appendChild(clone);
// }

// // Refresh all experience items (after deletion)
// function refreshExperienceItems() {
//   experienceContainer.innerHTML = '';
//   resumeData.experience.forEach((exp, index) => {
//       addExperienceItem(exp, index + 1);
//   });
// }

// // Add project item to the form
// function addProjectItem(project, index) {
//   const clone = document.importNode(projectItemTemplate.content, true);
  
//   // Set the item number
//   clone.querySelector('.item-number').textContent = index;
  
//   // Set values if they exist
//   if (project) {
//       clone.querySelector('.title').value = project.title;
//       clone.querySelector('.technologies').value = project.technologies;
//       clone.querySelector('.link').value = project.link;
//       clone.querySelector('.description').value = project.description;
//   }
  
//   // Add event listeners for input changes
//   const inputs = clone.querySelectorAll('input, textarea');
//   inputs.forEach(input => {
//       input.addEventListener('input', () => {
//           const itemIndex = index - 1;
//           const field = input.classList[0]; // The first class is the field name
//           resumeData.projects[itemIndex][field] = input.value;
//           renderResumePreview();
//       });
//   });
  
//   // Add event listener for delete button
//   const deleteBtn = clone.querySelector('.delete-button');
//   deleteBtn.addEventListener('click', () => {
//       resumeData.projects.splice(index - 1, 1);
//       refreshProjectItems();
//       renderResumePreview();
//   });
  
//   projectsContainer.appendChild(clone);
// }

// // Refresh all project items (after deletion)
// function refreshProjectItems() {
//   projectsContainer.innerHTML = '';
//   resumeData.projects.forEach((proj, index) => {
//       addProjectItem(proj, index + 1);
//   });
// }

// // Add a skill
// function addSkill(type) {
//   const inputElement = document.getElementById(`${type}-skills`);
//   const skill = inputElement.value.trim();
  
//   if (skill === '') return;
  
//   if (!resumeData.skills[type].includes(skill)) {
//       resumeData.skills[type].push(skill);
//       addSkillTag(skill, type);
//       renderResumePreview();
//   }
  
//   inputElement.value = '';
// }

// // Add a skill tag to the UI
// function addSkillTag(skill, type) {
//   const container = document.getElementById(`${type}-skills-container`);
//   const clone = document.importNode(skillTagTemplate.content, true);
  
//   clone.querySelector('.skill-text').textContent = skill;
  
//   // Add event listener for remove button
//   const removeBtn = clone.querySelector('.remove-skill');
//   removeBtn.addEventListener('click', () => {
//       const index = resumeData.skills[type].indexOf(skill);
//       if (index !== -1) {
//           resumeData.skills[type].splice(index, 1);
//           renderResumePreview();
//           refreshSkillTags(type);
//       }
//   });
  
//   container.appendChild(clone);
// }

// // Refresh all skill tags for a type (after deletion)
// function refreshSkillTags(type) {
//   const container = document.getElementById(`${type}-skills-container`);
//   container.innerHTML = '';
//   resumeData.skills[type].forEach(skill => {
//       addSkillTag(skill, type);
//   });
// }

// // Save resume data to localStorage
// function saveResumeData() {
//   try {
//       const saveData = {
//           data: resumeData,
//           template: activeTemplate,
//           lastUpdated: new Date().toISOString()
//       };
//       localStorage.setItem('resumeData', JSON.stringify(saveData));
      
//       // Show save alert
//       saveAlert.classList.remove('hidden');
//       setTimeout(() => {
//           saveAlert.classList.add('hidden');
//       }, 3000);
//   } catch (error) {
//       console.error('Error saving resume data:', error);
//       alert('Failed to save resume data. Please try again.');
//   }
// }

// // Print the resume
// function printResume() {
//   window.print();
// }

// // Render the resume preview based on the selected template
// function renderResumePreview() {
//   switch (activeTemplate) {
//       case 'modern':
//           renderModernTemplate();
//           break;
//       case 'classic':
//           renderClassicTemplate();
//           break;
//       case 'minimal':
//           renderMinimalTemplate();
//           break;
//       case 'executive':
//           renderExecutiveTemplate();
//           break;
//       case 'creative':
//           renderCreativeTemplate();
//           break;
//       default:
//           renderModernTemplate();
//   }
// }

// // Render Modern Template
// function renderModernTemplate() {
//   const { personal, education, experience, skills, projects } = resumeData;
  
//   let html = `
//       <div class="modern-template">
//           <header class="modern-header">
//               <h1 class="modern-name">${personal.name || 'Your Name'}</h1>
//               <h2 class="modern-title">${personal.title || 'Professional Title'}</h2>
              
//               <div class="modern-contact">
//                   ${personal.email ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${personal.email}</div>` : ''}
//                   ${personal.phone ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${personal.phone}</div>` : ''}
//                   ${personal.location ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${personal.location}</div>` : ''}
//                   ${personal.website ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> ${personal.website}</div>` : ''}
//                   ${personal.linkedin ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> ${personal.linkedin}</div>` : ''}  height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> ${personal.linkedin}</div>` : ''}
//                   ${personal.github ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> ${personal.github}</div>` : ''}
//               </div>
              
//               ${personal.summary ? `<p class="mt-3 text-gray-700 leading-relaxed">${personal.summary}</p>` : ''}
//           </header>
          
//           <div class="modern-layout">
//               <div class="modern-main">
//                   <!-- Experience Section -->
//                   ${experience.length > 0 ? `
//                       <section class="modern-section">
//                           <div class="modern-section-title">
//                               <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
//                               <h2>Experience</h2>
//                           </div>
//                           <div class="modern-items">
//                               ${experience.map(exp => `
//                                   <div class="modern-item">
//                                       <h3 class="modern-item-title">${exp.position}</h3>
//                                       <div class="modern-item-subtitle">
//                                           <span class="modern-company">${exp.company}</span>
//                                           ${exp.location ? `<span class="modern-location">, ${exp.location}</span>` : ''}
//                                           <span class="modern-dates">${exp.startDate} - ${exp.endDate}</span>
//                                       </div>
//                                       ${exp.description ? `<p class="modern-description">${exp.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
                  
//                   <!-- Projects Section -->
//                   ${projects.length > 0 ? `
//                       <section class="modern-section">
//                           <div class="modern-section-title">
//                               <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
//                               <h2>Projects</h2>
//                           </div>
//                           <div class="modern-items">
//                               ${projects.map(project => `
//                                   <div class="modern-item">
//                                       <h3 class="modern-item-title">${project.title}</h3>
//                                       ${project.technologies ? `<div class="modern-technologies">${project.technologies}</div>` : ''}
//                                       ${project.link ? `<a href="${project.link}" class="modern-link" target="_blank">${project.link}</a>` : ''}
//                                       ${project.description ? `<p class="modern-description">${project.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
//               </div>
              
//               <div class="modern-sidebar">
//                   <!-- Education Section -->
//                   ${education.length > 0 ? `
//                       <section class="modern-section">
//                           <div class="modern-section-title">
//                               <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
//                               <h2>Education</h2>
//                           </div>
//                           <div class="modern-items">
//                               ${education.map(edu => `
//                                   <div class="modern-item">
//                                       <h3 class="modern-item-title">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</h3>
//                                       <div class="modern-item-subtitle">
//                                           <span class="modern-institution">${edu.institution}</span>
//                                           <span class="modern-dates">${edu.startDate} - ${edu.endDate}</span>
//                                       </div>
//                                       ${edu.description ? `<p class="modern-description">${edu.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
                  
//                   <!-- Skills Section -->
//                   <section class="modern-section">
//                       <div class="modern-section-title">
//                           <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
//                           <h2>Technical Skills</h2>
//                       </div>
//                       ${skills.technical.length > 0 ? `
//                           <div class="modern-skills">
//                               ${skills.technical.map(skill => `<span class="modern-skill">${skill}</span>`).join('')}
//                           </div>
//                       ` : '<p class="modern-empty">No technical skills added yet</p>'}
//                   </section>
                  
//                   <section class="modern-section">
//                       <div class="modern-section-title">
//                           <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
//                           <h2>Soft Skills</h2>
//                       </div>
//                       ${skills.soft.length > 0 ? `
//                           <div class="modern-skills">
//                               ${skills.soft.map(skill => `<span class="modern-skill soft">${skill}</span>`).join('')}
//                           </div>
//                       ` : '<p class="modern-empty">No soft skills added yet</p>'}
//                   </section>
//               </div>
//           </div>
//       </div>
//   `;
  
//   resumePreview.innerHTML = html;
// }

// // Render Classic Template
// function renderClassicTemplate() {
//   const { personal, education, experience, skills, projects } = resumeData;
  
//   let html = `
//       <div class="classic-template">
//           <header class="classic-header">
//               <h1 class="classic-name">${personal.name || 'Your Name'}</h1>
//               <h2 class="classic-title">${personal.title || 'Professional Title'}</h2>
              
//               <div class="classic-contact">
//                   ${personal.email ? `<span>${personal.email}</span>` : ''}
//                   ${personal.phone ? `<span>• ${personal.phone}</span>` : ''}
//                   ${personal.location ? `<span>• ${personal.location}</span>` : ''}
//                   ${personal.website ? `<span>• ${personal.website}</span>` : ''}
//                   ${personal.linkedin ? `<span>• ${personal.linkedin}</span>` : ''}
//                   ${personal.github ? `<span>• ${personal.github}</span>` : ''}
//               </div>
//           </header>
          
//           ${personal.summary ? `
//               <section class="classic-section">
//                   <h2 class="classic-section-title">Professional Summary</h2>
//                   <p>${personal.summary}</p>
//               </section>
//           ` : ''}
          
//           ${experience.length > 0 ? `
//               <section class="classic-section">
//                   <h2 class="classic-section-title">Professional Experience</h2>
//                   ${experience.map(exp => `
//                       <div class="classic-item">
//                           <div class="classic-item-header">
//                               <h3 class="classic-item-title">${exp.position}</h3>
//                               <span class="classic-item-date">${exp.startDate} - ${exp.endDate}</span>
//                           </div>
//                           <div class="classic-item-company">${exp.company}${exp.location ? `, ${exp.location}` : ''}</div>
//                           ${exp.description ? `<p class="classic-item-description">${exp.description}</p>` : ''}
//                       </div>
//                   `).join('')}
//               </section>
//           ` : ''}
          
//           ${education.length > 0 ? `
//               <section class="classic-section">
//                   <h2 class="classic-section-title">Education</h2>
//                   ${education.map(edu => `
//                       <div class="classic-item">
//                           <div class="classic-item-header">
//                               <h3 class="classic-item-title">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</h3>
//                               <span class="classic-item-date">${edu.startDate} - ${edu.endDate}</span>
//                           </div>
//                           <div class="classic-item-institution">${edu.institution}</div>
//                           ${edu.description ? `<p class="classic-item-description">${edu.description}</p>` : ''}
//                       </div>
//                   `).join('')}
//               </section>
//           ` : ''}
          
//           ${projects.length > 0 ? `
//               <section class="classic-section">
//                   <h2 class="classic-section-title">Projects</h2>
//                   ${projects.map(project => `
//                       <div class="classic-item">
//                           <h3 class="classic-item-title">${project.title}</h3>
//                           ${project.technologies ? `<div class="classic-item-technologies"><strong>Technologies:</strong> ${project.technologies}</div>` : ''}
//                           ${project.link ? `<div class="classic-item-link"><a href="${project.link}" target="_blank">${project.link}</a></div>` : ''}
//                           ${project.description ? `<p class="classic-item-description">${project.description}</p>` : ''}
//                       </div>
//                   `).join('')}
//               </section>
//           ` : ''}
          
//           <section class="classic-section">
//               <h2 class="classic-section-title">Skills</h2>
//               <div class="classic-skills-grid">
//                   <div class="classic-skills-column">
//                       <h3 class="classic-skills-subtitle">Technical Skills</h3>
//                       ${skills.technical.length > 0 ? 
//                           `<p class="classic-skills-list">${skills.technical.join(', ')}</p>` : 
//                           '<p class="classic-skills-empty">No technical skills added yet</p>'
//                       }
//                   </div>
//                   <div class="classic-skills-column">
//                       <h3 class="classic-skills-subtitle">Soft Skills</h3>
//                       ${skills.soft.length > 0 ? 
//                           `<p class="classic-skills-list">${skills.soft.join(', ')}</p>` : 
//                           '<p class="classic-skills-empty">No soft skills added yet</p>'
//                       }
//                   </div>
//               </div>
//           </section>
//       </div>
//   `;
  
//   resumePreview.innerHTML = html;
// }

// // Render Minimal Template
// function renderMinimalTemplate() {
//   const { personal, education, experience, skills, projects } = resumeData;
  
//   let html = `
//       <div class="minimal-template">
//           <header class="minimal-header">
//               <h1 class="minimal-name">${personal.name || 'Your Name'}</h1>
//               <h2 class="minimal-title">${personal.title || 'Professional Title'}</h2>
              
//               <div class="minimal-contact">
//                   ${personal.email ? `<span>${personal.email}</span>` : ''}
//                   ${personal.phone ? `<span>${personal.phone}</span>` : ''}
//                   ${personal.location ? `<span>${personal.location}</span>` : ''}
//                   ${personal.website ? `<span>${personal.website}</span>` : ''}
//                   ${personal.linkedin ? `<span>${personal.linkedin}</span>` : ''}
//                   ${personal.github ? `<span>${personal.github}</span>` : ''}
//               </div>
//           </header>
          
//           ${personal.summary ? `
//               <section class="minimal-section">
//                   <h2 class="minimal-section-title">About</h2>
//                   <p class="minimal-summary">${personal.summary}</p>
//               </section>
//           ` : ''}
          
//           ${experience.length > 0 ? `
//               <section class="minimal-section">
//                   <h2 class="minimal-section-title">Experience</h2>
//                   <div class="minimal-items">
//                       ${experience.map(exp => `
//                           <div class="minimal-item">
//                               <div class="minimal-item-header">
//                                   <h3 class="minimal-item-title">${exp.position}</h3>
//                                   <span class="minimal-item-date">${exp.startDate} - ${exp.endDate}</span>
//                               </div>
//                               <div class="minimal-item-subtitle">${exp.company}${exp.location ? `, ${exp.location}` : ''}</div>
//                               ${exp.description ? `<p class="minimal-item-description">${exp.description}</p>` : ''}
//                           </div>
//                       `).join('')}
//                   </div>
//               </section>
//           ` : ''}
          
//           ${education.length > 0 ? `
//               <section class="minimal-section">
//                   <h2 class="minimal-section-title">Education</h2>
//                   <div class="minimal-items">
//                       ${education.map(edu => `
//                           <div class="minimal-item">
//                               <div class="minimal-item-header">
//                                   <h3 class="minimal-item-title">${edu.institution}</h3>
//                                   <span class="minimal-item-date">${edu.startDate} - ${edu.endDate}</span>
//                               </div>
//                               <div class="minimal-item-subtitle">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</div>
//                               ${edu.description ? `<p class="minimal-item-description">${edu.description}</p>` : ''}
//                           </div>
//                       `).join('')}
//                   </div>
//               </section>
//           ` : ''}
          
//           <section class="minimal-section">
//               <h2 class="minimal-section-title">Skills</h2>
//               <div class="minimal-skills">
//                   ${skills.technical.length > 0 ? `
//                       <div class="minimal-skills-group">
//                           <h3 class="minimal-skills-title">Technical:</h3>
//                           <p class="minimal-skills-list">${skills.technical.join(' • ')}</p>
//                       </div>
//                   ` : ''}
                  
//                   ${skills.soft.length > 0 ? `
//                       <div class="minimal-skills-group">
//                           <h3 class="minimal-skills-title">Soft:</h3>
//                           <p class="minimal-skills-list">${skills.soft.join(' • ')}</p>
//                       </div>
//                   ` : ''}
                  
//                   ${skills.technical.length === 0 && skills.soft.length === 0 ? 
//                       '<p class="minimal-skills-empty">No skills added yet</p>' : ''
//                   }
//               </div>
//           </section>
          
//           ${projects.length > 0 ? `
//               <section class="minimal-section">
//                   <h2 class="minimal-section-title">Projects</h2>
//                   <div class="minimal-items">
//                       ${projects.map(project => `
//                           <div class="minimal-item">
//                               <h3 class="minimal-item-title">${project.title}</h3>
//                               ${project.technologies ? `<div class="minimal-item-technologies">${project.technologies}</div>` : ''}
//                               ${project.link ? `<div class="minimal-item-link"><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.link}</a></div>` : ''}
//                               ${project.description ? `<p class="minimal-item-description">${project.description}</p>` : ''}
//                           </div>
//                       `).join('')}
//                   </div>
//               </section>
//           ` : ''}
//       </div>
//   `;
  
//   resumePreview.innerHTML = html;
// }

// // Render Executive Template
// function renderExecutiveTemplate() {
//   const { personal, education, experience, skills, projects } = resumeData;
  
//   let html = `
//       <div class="executive-template">
//           <header class="executive-header">
//               <h1 class="executive-name">${personal.name || 'Your Name'}</h1>
//               <h2 class="executive-title">${personal.title || 'Professional Title'}</h2>
              
//               <div class="executive-contact">
//                   <div class="executive-contact-left">
//                       ${personal.email ? `<div>${personal.email}</div>` : ''}
//                       ${personal.phone ? `<div>${personal.phone}</div>` : ''}
//                       ${personal.location ? `<div>${personal.location}</div>` : ''}
//                   </div>
//                   <div class="executive-contact-right">
//                       ${personal.website ? `<div>${personal.website}</div>` : ''}
//                       ${personal.linkedin ? `<div>${personal.linkedin}</div>` : ''}
//                       ${personal.github ? `<div>${personal.github}</div>` : ''}
//                   </div>
//               </div>
//           </header>
          
//           <div class="executive-layout">
//               <div class="executive-sidebar">
//                   <section class="executive-section">
//                       <h2 class="executive-section-title">Skills</h2>
                      
//                       ${skills.technical.length > 0 ? `
//                           <div class="executive-skills-group">
//                               <h3 class="executive-skills-title">Technical Expertise</h3>
//                               <ul class="executive-skills-list">
//                                   ${skills.technical.map(skill => `<li>${skill}</li>`).join('')}
//                               </ul>
//                           </div>
//                       ` : ''}
                      
//                       ${skills.soft.length > 0 ? `
//                           <div class="executive-skills-group">
//                               <h3 class="executive-skills-title">Core Competencies</h3>
//                               <ul class="executive-skills-list">
//                                   ${skills.soft.map(skill => `<li>${skill}</li>`).join('')}
//                               </ul>
//                           </div>
//                       ` : ''}
//                   </section>
                  
//                   ${education.length > 0 ? `
//                       <section class="executive-section">
//                           <h2 class="executive-section-title">Education</h2>
//                           <div class="executive-items">
//                               ${education.map(edu => `
//                                   <div class="executive-item">
//                                       <h3 class="executive-item-title">${edu.institution}</h3>
//                                       <p class="executive-item-subtitle">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</p>
//                                       <p class="executive-item-date">${edu.startDate} - ${edu.endDate}</p>
//                                       ${edu.description ? `<p class="executive-item-description">${edu.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
//               </div>
              
//               <div class="executive-main">
//                   ${personal.summary ? `
//                       <section class="executive-section">
//                           <h2 class="executive-section-title">Professional Summary</h2>
//                           <p class="executive-summary">${personal.summary}</p>
//                       </section>
//                   ` : ''}
                  
//                   ${experience.length > 0 ? `
//                       <section class="executive-section">
//                           <h2 class="executive-section-title">Professional Experience</h2>
//                           <div class="executive-items">
//                               ${experience.map(exp => `
//                                   <div class="executive-item">
//                                       <div class="executive-item-header">
//                                           <h3 class="executive-item-title">${exp.position}</h3>
//                                           <span class="executive-item-date">${exp.startDate} - ${exp.endDate}</span>
//                                       </div>
//                                       <p class="executive-item-company">${exp.company}${exp.location ? `, ${exp.location}` : ''}</p>
//                                       ${exp.description ? `<p class="executive-item-description">${exp.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
                  
//                   ${projects.length > 0 ? `
//                       <section class="executive-section">
//                           <h2 class="executive-section-title">Key Projects</h2>
//                           <div class="executive-items">
//                               ${projects.map(project => `
//                                   <div class="executive-item">
//                                       <h3 class="executive-item-title">${project.title}</h3>
//                                       ${project.technologies ? `<p class="executive-item-technologies"><span class="executive-label">Technologies:</span> ${project.technologies}</p>` : ''}
//                                       ${project.link ? `<p class="executive-item-link"><a href="${project.link}" target="_blank">${project.link}</a></p>` : ''}
//                                       ${project.description ? `<p class="executive-item-description">${project.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
//               </div>
//           </div>
//       </div>
//   `;
  
//   resumePreview.innerHTML = html;
// }

// // Render Creative Template
// function renderCreativeTemplate() {
//   const { personal, education, experience, skills, projects } = resumeData;
  
//   let html = `
//       <div class="creative-template">
//           <header class="creative-header">
//               <h1 class="creative-name">${personal.name || 'Your Name'}</h1>
//               <h2 class="creative-title">${personal.title || 'Professional Title'}</h2>
              
//               <div class="creative-contact">
//                   ${personal.email ? `<span>${personal.email}</span>` : ''}
//                   ${personal.phone ? `<span>${personal.phone}</span>` : ''}
//                   ${personal.location ? `<span>${personal.location}</span>` : ''}
//                   ${personal.website ? `<span>${personal.website}</span>` : ''}
//                   ${personal.linkedin ? `<span>${personal.linkedin}</span>` : ''}
//                   ${personal.github ? `<span>${personal.github}</span>` : ''}
//               </div>
//           </header>
          
//           ${personal.summary ? `
//               <div class="creative-summary">
//                   <p>${personal.summary}</p>
//               </div>
//           ` : ''}
          
//           <div class="creative-layout">
//               <div class="creative-main">
//                   ${experience.length > 0 ? `
//                       <section class="creative-section">
//                           <h2 class="creative-section-title">Experience</h2>
//                           <div class="creative-timeline">
//                               ${experience.map(exp => `
//                                   <div class="creative-timeline-item">
//                                       <h3 class="creative-item-title">${exp.position}</h3>
//                                       <p class="creative-item-company">${exp.company}${exp.location ? `, ${exp.location}` : ''}</p>
//                                       <p class="creative-item-date">${exp.startDate} - ${exp.endDate}</p>
//                                       ${exp.description ? `<p class="creative-item-description">${exp.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
                  
//                   ${projects.length > 0 ? `
//                       <section class="creative-section">
//                           <h2 class="creative-section-title">Projects</h2>
//                           <div class="creative-projects">
//                               ${projects.map(project => `
//                                   <div class="creative-project-card">
//                                       <h3 class="creative-project-title">${project.title}</h3>
//                                       ${project.technologies ? `<p class="creative-project-tech">${project.technologies}</p>` : ''}
//                                       ${project.description ? `<p class="creative-project-description">${project.description}</p>` : ''}
//                                       ${project.link ? `<p class="creative-project-link"><a href="${project.link}" target="_blank">${project.link}</a></p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
//               </div>
              
//               <div class="creative-sidebar">
//                   ${education.length > 0 ? `
//                       <section class="creative-section">
//                           <h2 class="creative-section-title">Education</h2>
//                           <div class="creative-education">
//                               ${education.map(edu => `
//                                   <div class="creative-education-item">
//                                       <h3 class="creative-education-title">${edu.institution}</h3>
//                                       <p class="creative-education-degree">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</p>
//                                       <p class="creative-education-date">${edu.startDate} - ${edu.endDate}</p>
//                                       ${edu.description ? `<p class="creative-education-description">${edu.description}</p>` : ''}
//                                   </div>
//                               `).join('')}
//                           </div>
//                       </section>
//                   ` : ''}
                  
//                   <section class="creative-section">
//                       <h2 class="creative-section-title">Skills</h2>
                      
//                       ${skills.technical.length > 0 ? `
//                           <div class="creative-skills-group">
//                               <h3 class="creative-skills-title">Technical</h3>
//                               <div class="creative-skills-tags">
//                                   ${skills.technical.map(skill => `<span class="creative-skill-tag technical">${skill}</span>`).join('')}
//                               </div>
//                           </div>
//                       ` : ''}
                      
//                       ${skills.soft.length > 0 ? `
//                           <div class="creative-skills-group">
//                               <h3 class="creative-skills-title">Soft Skills</h3>
//                               <div class="creative-skills-tags">
//                                   ${skills.soft.map(skill => `<span class="creative-skill-tag soft">${skill}</span>`).join('')}
//                               </div>
//                           </div>
//                       ` : ''}
//                   </section>
//               </div>
//           </div>
//       </div>
//   `;
  
//   resumePreview.innerHTML = html;
// }

// // Initialize the app when the DOM is loaded
// document.addEventListener('DOMContentLoaded', init);

// Resume data structure
let resumeData = {
  personal: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    summary: "",
  },
  education: [],
  experience: [],
  skills: {
    technical: [],
    soft: [],
  },
  projects: [],
}

let activeTemplate = "modern"

// DOM Elements
const tabTriggers = document.querySelectorAll(".tab-trigger")
const tabContents = document.querySelectorAll(".tab-content")
const templateOptions = document.querySelectorAll('input[name="template"]')
const saveButton = document.getElementById("save-button")
const printButton = document.getElementById("print-button")
const saveAlert = document.getElementById("save-alert")
const resumePreview = document.getElementById("resume-preview")

// Personal info form elements
const nameInput = document.getElementById("name")
const titleInput = document.getElementById("title")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const locationInput = document.getElementById("location")
const websiteInput = document.getElementById("website")
const linkedinInput = document.getElementById("linkedin")
const githubInput = document.getElementById("github")
const summaryInput = document.getElementById("summary")

// Add buttons
const addEducationBtn = document.getElementById("add-education")
const addExperienceBtn = document.getElementById("add-experience")
const addProjectBtn = document.getElementById("add-project")
const addTechnicalSkillBtn = document.getElementById("add-technical-skill")
const addSoftSkillBtn = document.getElementById("add-soft-skill")

// Containers
const educationContainer = document.getElementById("education-container")
const experienceContainer = document.getElementById("experience-container")
const projectsContainer = document.getElementById("projects-container")
const technicalSkillsContainer = document.getElementById("technical-skills-container")
const softSkillsContainer = document.getElementById("soft-skills-container")

// Templates
const educationItemTemplate = document.getElementById("education-item-template")
const experienceItemTemplate = document.getElementById("experience-item-template")
const projectItemTemplate = document.getElementById("project-item-template")
const skillTagTemplate = document.getElementById("skill-tag-template")

// Initialize the app
function init() {
  loadSavedData()
  setupEventListeners()
  renderResumePreview()
}

// Load saved data from localStorage
function loadSavedData() {
  try {
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      resumeData = parsedData.data || resumeData
      activeTemplate = parsedData.template || "modern"

      // Set the active template radio button
      document.getElementById(activeTemplate).checked = true

      // Populate form fields with saved data
      populateFormFields()
    }
  } catch (error) {
    console.error("Error loading resume data:", error)
  }
}

// Populate form fields with data
function populateFormFields() {
  // Personal info
  nameInput.value = resumeData.personal.name
  titleInput.value = resumeData.personal.title
  emailInput.value = resumeData.personal.email
  phoneInput.value = resumeData.personal.phone
  locationInput.value = resumeData.personal.location
  websiteInput.value = resumeData.personal.website
  linkedinInput.value = resumeData.personal.linkedin
  githubInput.value = resumeData.personal.github
  summaryInput.value = resumeData.personal.summary

  // Education
  educationContainer.innerHTML = ""
  resumeData.education.forEach((edu, index) => {
    addEducationItem(edu, index + 1)
  })

  // Experience
  experienceContainer.innerHTML = ""
  resumeData.experience.forEach((exp, index) => {
    addExperienceItem(exp, index + 1)
  })

  // Projects
  projectsContainer.innerHTML = ""
  resumeData.projects.forEach((proj, index) => {
    addProjectItem(proj, index + 1)
  })

  // Skills
  technicalSkillsContainer.innerHTML = ""
  resumeData.skills.technical.forEach((skill) => {
    addSkillTag(skill, "technical")
  })

  softSkillsContainer.innerHTML = ""
  resumeData.skills.soft.forEach((skill) => {
    addSkillTag(skill, "soft")
  })
}

// Setup event listeners
function setupEventListeners() {
  // Tab switching
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const tabId = trigger.getAttribute("data-tab")
      switchTab(tabId)
    })
  })

  // Template selection
  templateOptions.forEach((option) => {
    option.addEventListener("change", () => {
      activeTemplate = option.value
      renderResumePreview()
    })
  })

  // Personal info form inputs
  nameInput.addEventListener("input", updatePersonalInfo)
  titleInput.addEventListener("input", updatePersonalInfo)
  emailInput.addEventListener("input", updatePersonalInfo)
  phoneInput.addEventListener("input", updatePersonalInfo)
  locationInput.addEventListener("input", updatePersonalInfo)
  websiteInput.addEventListener("input", updatePersonalInfo)
  linkedinInput.addEventListener("input", updatePersonalInfo)
  githubInput.addEventListener("input", updatePersonalInfo)
  summaryInput.addEventListener("input", updatePersonalInfo)

  // Add buttons
  addEducationBtn.addEventListener("click", () => {
    const newEducation = {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    }
    resumeData.education.push(newEducation)
    addEducationItem(newEducation, resumeData.education.length)
    renderResumePreview()
  })

  addExperienceBtn.addEventListener("click", () => {
    const newExperience = {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    }
    resumeData.experience.push(newExperience)
    addExperienceItem(newExperience, resumeData.experience.length)
    renderResumePreview()
  })

  addProjectBtn.addEventListener("click", () => {
    const newProject = {
      title: "",
      technologies: "",
      link: "",
      description: "",
    }
    resumeData.projects.push(newProject)
    addProjectItem(newProject, resumeData.projects.length)
    renderResumePreview()
  })

  // Add skills
  addTechnicalSkillBtn.addEventListener("click", () => {
    addSkill("technical")
  })

  document.getElementById("technical-skills").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill("technical")
    }
  })

  addSoftSkillBtn.addEventListener("click", () => {
    addSkill("soft")
  })

  document.getElementById("soft-skills").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill("soft")
    }
  })

  // Save and Print buttons
  saveButton.addEventListener("click", saveResumeData)
  printButton.addEventListener("click", printResume)
}

// Switch between tabs
function switchTab(tabId) {
  tabTriggers.forEach((trigger) => {
    if (trigger.getAttribute("data-tab") === tabId) {
      trigger.classList.add("active")
    } else {
      trigger.classList.remove("active")
    }
  })

  tabContents.forEach((content) => {
    if (content.id === tabId + "-tab") {
      content.classList.add("active")
    } else {
      content.classList.remove("active")
    }
  })
}

// Update personal info in the data object
function updatePersonalInfo() {
  resumeData.personal = {
    name: nameInput.value,
    title: titleInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    location: locationInput.value,
    website: websiteInput.value,
    linkedin: linkedinInput.value,
    github: githubInput.value,
    summary: summaryInput.value,
  }
  renderResumePreview()
}

// Add education item to the form
function addEducationItem(education, index) {
  const clone = document.importNode(educationItemTemplate.content, true)

  // Set the item number
  clone.querySelector(".item-number").textContent = index

  // Set values if they exist
  if (education) {
    clone.querySelector(".institution").value = education.institution
    clone.querySelector(".degree").value = education.degree
    clone.querySelector(".fieldOfStudy").value = education.fieldOfStudy
    clone.querySelector(".startDate").value = education.startDate
    clone.querySelector(".endDate").value = education.endDate
    clone.querySelector(".description").value = education.description
  }

  // Add event listeners for input changes
  const inputs = clone.querySelectorAll("input, textarea")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const itemIndex = index - 1
      const field = input.classList[0] // The first class is the field name
      resumeData.education[itemIndex][field] = input.value
      renderResumePreview()
    })
  })

  // Add event listener for delete button
  const deleteBtn = clone.querySelector(".delete-button")
  deleteBtn.addEventListener("click", () => {
    resumeData.education.splice(index - 1, 1)
    refreshEducationItems()
    renderResumePreview()
  })

  educationContainer.appendChild(clone)
}

// Refresh all education items (after deletion)
function refreshEducationItems() {
  educationContainer.innerHTML = ""
  resumeData.education.forEach((edu, index) => {
    addEducationItem(edu, index + 1)
  })
}

// Add experience item to the form
function addExperienceItem(experience, index) {
  const clone = document.importNode(experienceItemTemplate.content, true)

  // Set the item number
  clone.querySelector(".item-number").textContent = index

  // Set values if they exist
  if (experience) {
    clone.querySelector(".company").value = experience.company
    clone.querySelector(".position").value = experience.position
    clone.querySelector(".location").value = experience.location
    clone.querySelector(".startDate").value = experience.startDate
    clone.querySelector(".endDate").value = experience.endDate
    clone.querySelector(".description").value = experience.description
  }

  // Add event listeners for input changes
  const inputs = clone.querySelectorAll("input, textarea")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const itemIndex = index - 1
      const field = input.classList[0] // The first class is the field name
      resumeData.experience[itemIndex][field] = input.value
      renderResumePreview()
    })
  })

  // Add event listener for delete button
  const deleteBtn = clone.querySelector(".delete-button")
  deleteBtn.addEventListener("click", () => {
    resumeData.experience.splice(index - 1, 1)
    refreshExperienceItems()
    renderResumePreview()
  })

  experienceContainer.appendChild(clone)
}

// Refresh all experience items (after deletion)
function refreshExperienceItems() {
  experienceContainer.innerHTML = ""
  resumeData.experience.forEach((exp, index) => {
    addExperienceItem(exp, index + 1)
  })
}

// Add project item to the form
function addProjectItem(project, index) {
  const clone = document.importNode(projectItemTemplate.content, true)

  // Set the item number
  clone.querySelector(".item-number").textContent = index

  // Set values if they exist
  if (project) {
    clone.querySelector(".title").value = project.title
    clone.querySelector(".technologies").value = project.technologies
    clone.querySelector(".link").value = project.link
    clone.querySelector(".description").value = project.description
  }

  // Add event listeners for input changes
  const inputs = clone.querySelectorAll("input, textarea")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const itemIndex = index - 1
      const field = input.classList[0] // The first class is the field name
      resumeData.projects[itemIndex][field] = input.value
      renderResumePreview()
    })
  })

  // Add event listener for delete button
  const deleteBtn = clone.querySelector(".delete-button")
  deleteBtn.addEventListener("click", () => {
    resumeData.projects.splice(index - 1, 1)
    refreshProjectItems()
    renderResumePreview()
  })

  projectsContainer.appendChild(clone)
}

// Refresh all project items (after deletion)
function refreshProjectItems() {
  projectsContainer.innerHTML = ""
  resumeData.projects.forEach((proj, index) => {
    addProjectItem(proj, index + 1)
  })
}

// Add a skill
function addSkill(type) {
  const inputElement = document.getElementById(`${type}-skills`)
  const skill = inputElement.value.trim()

  if (skill === "") return

  if (!resumeData.skills[type].includes(skill)) {
    resumeData.skills[type].push(skill)
    addSkillTag(skill, type)
    renderResumePreview()
  }

  inputElement.value = ""
  inputElement.focus()
}

// Add a skill tag to the UI
function addSkillTag(skill, type) {
  const container = document.getElementById(`${type}-skills-container`)
  const clone = document.importNode(skillTagTemplate.content, true)

  clone.querySelector(".skill-text").textContent = skill

  // Add event listener for remove button
  const removeBtn = clone.querySelector(".remove-skill")
  removeBtn.addEventListener("click", () => {
    const index = resumeData.skills[type].indexOf(skill)
    if (index !== -1) {
      resumeData.skills[type].splice(index, 1)
      renderResumePreview()
      refreshSkillTags(type)
    }
  })

  container.appendChild(clone)
}

// Refresh all skill tags for a type (after deletion)
function refreshSkillTags(type) {
  const container = document.getElementById(`${type}-skills-container`)
  container.innerHTML = ""
  resumeData.skills[type].forEach((skill) => {
    addSkillTag(skill, type)
  })
}

// Save resume data to localStorage
function saveResumeData() {
  try {
    const saveData = {
      data: resumeData,
      template: activeTemplate,
      lastUpdated: new Date().toISOString(),
    }
    localStorage.setItem("resumeData", JSON.stringify(saveData))

    // Show save alert
    saveAlert.classList.remove("hidden")
    setTimeout(() => {
      saveAlert.classList.add("hidden")
    }, 3000)
  } catch (error) {
    console.error("Error saving resume data:", error)
    alert("Failed to save resume data. Please try again.")
  }
}

// Print the resume
function printResume() {
  const printStyles = `
    @media print {
      body * {
        visibility: hidden;
      }
      .resume-preview-for-pdf, .resume-preview-for-pdf * {
        visibility: visible;
      }
      .resume-preview-for-pdf {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
      }
    }
  `

  const styleElement = document.createElement("style")
  styleElement.innerHTML = printStyles
  document.head.appendChild(styleElement)

  window.print()

  // Remove the style element after printing
  setTimeout(() => {
    document.head.removeChild(styleElement)
  }, 1000)
}

// Render the resume preview based on the selected template
function renderResumePreview() {
  switch (activeTemplate) {
    case "modern":
      renderModernTemplate()
      break
    case "classic":
      renderClassicTemplate()
      break
    case "minimal":
      renderMinimalTemplate()
      break
    case "executive":
      renderExecutiveTemplate()
      break
    case "creative":
      renderCreativeTemplate()
      break
    default:
      renderModernTemplate()
  }
}

// Render Modern Template
function renderModernTemplate() {
  const { personal, education, experience, skills, projects } = resumeData

  const html = `
    <div class="modern-template">
      <header class="modern-header">
        <h1 class="modern-name">${personal.name || "Your Name"}</h1>
        <h2 class="modern-title">${personal.title || "Professional Title"}</h2>
        
        <div class="modern-contact">
          ${personal.email ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${personal.email}</div>` : ""}
          ${personal.phone ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${personal.phone}</div>` : ""}
          ${personal.location ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${personal.location}</div>` : ""}
          ${personal.website ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> ${personal.website}</div>` : ""}
          ${personal.linkedin ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> ${personal.linkedin}</div>` : ""}
          ${personal.github ? `<div class="modern-contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> ${personal.github}</div>` : ""}
        </div>
        
        ${personal.summary ? `<p class="mt-3 text-gray-700 leading-relaxed">${personal.summary}</p>` : ""}
      </header>
      
      <div class="modern-layout">
        <div class="modern-main">
          <!-- Experience Section -->
          ${
            experience.length > 0
              ? `
            <section class="modern-section">
              <div class="modern-section-title">
                <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <h2>Experience</h2>
              </div>
              <div class="modern-items">
                ${experience
                  .map(
                    (exp) => `
                  <div class="modern-item">
                    <h3 class="modern-item-title">${exp.position}</h3>
                    <div class="modern-item-subtitle">
                      <span class="modern-company">${exp.company}</span>
                      ${exp.location ? `<span class="modern-location">, ${exp.location}</span>` : ""}
                      <span class="modern-dates">${exp.startDate} - ${exp.endDate}</span>
                    </div>
                    ${exp.description ? `<p class="modern-description">${exp.description}</p>` : ""}
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </section>
          `
              : ""
          }
          
          <!-- Projects Section -->
          ${
            projects.length > 0
              ? `
            <section class="modern-section">
              <div class="modern-section-title">
                <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <h2>Projects</h2>
              </div>
              <div class="modern-items">
                ${projects
                  .map(
                    (project) => `
                  <div class="modern-item">
                    <h3 class="modern-item-title">${project.title}</h3>
                    ${project.technologies ? `<div class="modern-technologies">${project.technologies}</div>` : ""}
                    ${project.link ? `<a href="${project.link}" class="modern-link" target="_blank">${project.link}</a>` : ""}
                    ${project.description ? `<p class="modern-description">${project.description}</p>` : ""}
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </section>
          `
              : ""
          }
        </div>
        
        <div class="modern-sidebar">
          <!-- Education Section -->
          ${
            education.length > 0
              ? `
            <section class="modern-section">
              <div class="modern-section-title">
                <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <h2>Education</h2>
              </div>
              <div class="modern-items">
                ${education
                  .map(
                    (edu) => `
                  <div class="modern-item">
                    <h3 class="modern-item-title">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}</h3>
                    <div class="modern-item-subtitle">
                      <span class="modern-institution">${edu.institution}</span>
                      <span class="modern-dates">${edu.startDate} - ${edu.endDate}</span>
                    </div>
                    ${edu.description ? `<p class="modern-description">${edu.description}</p>` : ""}
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </section>
          `
              : ""
          }
          
          <!-- Skills Section -->
          <section class="modern-section">
            <div class="modern-section-title">
              <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              <h2>Technical Skills</h2>
            </div>
            ${
              skills.technical.length > 0
                ? `
              <div class="modern-skills">
                ${skills.technical.map((skill) => `<span class="modern-skill">${skill}</span>`).join("")}
              </div>
            `
                : '<p class="modern-empty">No technical skills added yet</p>'
            }
          </section>
          
          <section class="modern-section">
            <div class="modern-section-title">
              <svg class="modern-section-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <h2>Soft Skills</h2>
            </div>
            ${
              skills.soft.length > 0
                ? `
              <div class="modern-skills">
                ${skills.soft.map((skill) => `<span class="modern-skill soft">${skill}</span>`).join("")}
              </div>
            `
                : '<p class="modern-empty">No soft skills added yet</p>'
            }
          </section>
        </div>
      </div>
    </div>
  `

  resumePreview.innerHTML = html
}

// Render Classic Template
function renderClassicTemplate() {
  const { personal, education, experience, skills, projects } = resumeData

  const html = `
      <div class="classic-template">
          <header class="classic-header">
              <h1 class="classic-name">${personal.name || "Your Name"}</h1>
              <h2 class="classic-title">${personal.title || "Professional Title"}</h2>
              
              <div class="classic-contact">
                  ${personal.email ? `<span>${personal.email}</span>` : ""}
                  ${personal.phone ? `<span>• ${personal.phone}</span>` : ""}
                  ${personal.location ? `<span>• ${personal.location}</span>` : ""}
                  ${personal.website ? `<span>• ${personal.website}</span>` : ""}
                  ${personal.linkedin ? `<span>• ${personal.linkedin}</span>` : ""}
                  ${personal.github ? `<span>• ${personal.github}</span>` : ""}
              </div>
          </header>
          
          ${
            personal.summary
              ? `
              <section class="classic-section">
                  <h2 class="classic-section-title">Professional Summary</h2>
                  <p>${personal.summary}</p>
              </section>
          `
              : ""
          }
          
          ${
            experience.length > 0
              ? `
              <section class="classic-section">
                  <h2 class="classic-section-title">Professional Experience</h2>
                  ${experience
                    .map(
                      (exp) => `
                      <div class="classic-item">
                          <div class="classic-item-header">
                              <h3 class="classic-item-title">${exp.position}</h3>
                              <span class="classic-item-date">${exp.startDate} - ${exp.endDate}</span>
                          </div>
                          <div class="classic-item-company">${exp.company}${exp.location ? `, ${exp.location}` : ""}</div>
                          ${exp.description ? `<p class="classic-item-description">${exp.description}</p>` : ""}
                      </div>
                  `,
                    )
                    .join("")}
              </section>
          `
              : ""
          }
          
          ${
            education.length > 0
              ? `
              <section class="classic-section">
                  <h2 class="classic-section-title">Education</h2>
                  ${education
                    .map(
                      (edu) => `
                      <div class="classic-item">
                          <div class="classic-item-header">
                              <h3 class="classic-item-title">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}</h3>
                              <span class="classic-item-date">${edu.startDate} - ${edu.endDate}</span>
                          </div>
                          <div class="classic-item-institution">${edu.institution}</div>
                          ${edu.description ? `<p class="classic-item-description">${edu.description}</p>` : ""}
                      </div>
                  `,
                    )
                    .join("")}
              </section>
          `
              : ""
          }
          
          ${
            projects.length > 0
              ? `
              <section class="classic-section">
                  <h2 class="classic-section-title">Projects</h2>
                  ${projects
                    .map(
                      (project) => `
                      <div class="classic-item">
                          <h3 class="classic-item-title">${project.title}</h3>
                          ${project.technologies ? `<div class="classic-item-technologies"><strong>Technologies:</strong> ${project.technologies}</div>` : ""}
                          ${project.link ? `<div class="classic-item-link"><a href="${project.link}" target="_blank">${project.link}</a></div>` : ""}
                          ${project.description ? `<p class="classic-item-description">${project.description}</p>` : ""}
                      </div>
                  `,
                    )
                    .join("")}
              </section>
          `
              : ""
          }
          
          <section class="classic-section">
              <h2 class="classic-section-title">Skills</h2>
              <div class="classic-skills-grid">
                  <div class="classic-skills-column">
                      <h3 class="classic-skills-subtitle">Technical Skills</h3>
                      ${
                        skills.technical.length > 0
                          ? `<p class="classic-skills-list">${skills.technical.join(", ")}</p>`
                          : '<p class="classic-skills-empty">No technical skills added yet</p>'
                      }
                  </div>
                  <div class="classic-skills-column">
                      <h3 class="classic-skills-subtitle">Soft Skills</h3>
                      ${
                        skills.soft.length > 0
                          ? `<p class="classic-skills-list">${skills.soft.join(", ")}</p>`
                          : '<p class="classic-skills-empty">No soft skills added yet</p>'
                      }
                  </div>
              </div>
          </section>
      </div>
  `

  resumePreview.innerHTML = html
}

// Render Minimal Template
function renderMinimalTemplate() {
  const { personal, education, experience, skills, projects } = resumeData

  const html = `
      <div class="minimal-template">
          <header class="minimal-header">
              <h1 class="minimal-name">${personal.name || "Your Name"}</h1>
              <h2 class="minimal-title">${personal.title || "Professional Title"}</h2>
              
              <div class="minimal-contact">
                  ${personal.email ? `<span>${personal.email}</span>` : ""}
                  ${personal.phone ? `<span>${personal.phone}</span>` : ""}
                  ${personal.location ? `<span>${personal.location}</span>` : ""}
                  ${personal.website ? `<span>${personal.website}</span>` : ""}
                  ${personal.linkedin ? `<span>${personal.linkedin}</span>` : ""}
                  ${personal.github ? `<span>${personal.github}</span>` : ""}
              </div>
          </header>
          
          ${
            personal.summary
              ? `
              <section class="minimal-section">
                  <h2 class="minimal-section-title">About</h2>
                  <p class="minimal-summary">${personal.summary}</p>
              </section>
          `
              : ""
          }
          
          ${
            experience.length > 0
              ? `
              <section class="minimal-section">
                  <h2 class="minimal-section-title">Experience</h2>
                  <div class="minimal-items">
                      ${experience
                        .map(
                          (exp) => `
                          <div class="minimal-item">
                              <div class="minimal-item-header">
                                  <h3 class="minimal-item-title">${exp.position}</h3>
                                  <span class="minimal-item-date">${exp.startDate} - ${exp.endDate}</span>
                              </div>
                              <div class="minimal-item-subtitle">${exp.company}${exp.location ? `, ${exp.location}` : ""}</div>
                              ${exp.description ? `<p class="minimal-item-description">${exp.description}</p>` : ""}
                          </div>
                      `,
                        )
                        .join("")}
                  </div>
              </section>
          `
              : ""
          }
          
          ${
            education.length > 0
              ? `
              <section class="minimal-section">
                  <h2 class="minimal-section-title">Education</h2>
                  <div class="minimal-items">
                      ${education
                        .map(
                          (edu) => `
                          <div class="minimal-item">
                              <div class="minimal-item-header">
                                  <h3 class="minimal-item-title">${edu.institution}</h3>
                                  <span class="minimal-item-date">${edu.startDate} - ${edu.endDate}</span>
                              </div>
                              <div class="minimal-item-subtitle">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}</div>
                              ${edu.description ? `<p class="minimal-item-description">${edu.description}</p>` : ""}
                          </div>
                      `,
                        )
                        .join("")}
                  </div>
              </section>
          `
              : ""
          }
          
          <section class="minimal-section">
              <h2 class="minimal-section-title">Skills</h2>
              <div class="minimal-skills">
                  ${
                    skills.technical.length > 0
                      ? `
                      <div class="minimal-skills-group">
                          <h3 class="minimal-skills-title">Technical:</h3>
                          <p class="minimal-skills-list">${skills.technical.join(" • ")}</p>
                      </div>
                  `
                      : ""
                  }
                  
                  ${
                    skills.soft.length > 0
                      ? `
                      <div class="minimal-skills-group">
                          <h3 class="minimal-skills-title">Soft:</h3>
                          <p class="minimal-skills-list">${skills.soft.join(" • ")}</p>
                      </div>
                  `
                      : ""
                  }
                  
                  ${
                    skills.technical.length === 0 && skills.soft.length === 0
                      ? '<p class="minimal-skills-empty">No skills added yet</p>'
                      : ""
                  }
              </div>
          </section>
          
          ${
            projects.length > 0
              ? `
              <section class="minimal-section">
                  <h2 class="minimal-section-title">Projects</h2>
                  <div class="minimal-items">
                      ${projects
                        .map(
                          (project) => `
                          <div class="minimal-item">
                              <h3 class="minimal-item-title">${project.title}</h3>
                              ${project.technologies ? `<div class="minimal-item-technologies">${project.technologies}</div>` : ""}
                              ${project.link ? `<div class="minimal-item-link"><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.link}</a></div>` : ""}
                              ${project.description ? `<p class="minimal-item-description">${project.description}</p>` : ""}
                          </div>
                      `,
                        )
                        .join("")}
                  </div>
              </section>
          `
              : ""
          }
      </div>
  `

  resumePreview.innerHTML = html
}

// Render Executive Template
function renderExecutiveTemplate() {
  const { personal, education, experience, skills, projects } = resumeData

  const html = `
      <div class="executive-template">
          <header class="executive-header">
              <h1 class="executive-name">${personal.name || "Your Name"}</h1>
              <h2 class="executive-title">${personal.title || "Professional Title"}</h2>
              
              <div class="executive-contact">
                  <div class="executive-contact-left">
                      ${personal.email ? `<div>${personal.email}</div>` : ""}
                      ${personal.phone ? `<div>${personal.phone}</div>` : ""}
                      ${personal.location ? `<div>${personal.location}</div>` : ""}
                  </div>
                  <div class="executive-contact-right">
                      ${personal.website ? `<div>${personal.website}</div>` : ""}
                      ${personal.linkedin ? `<div>${personal.linkedin}</div>` : ""}
                      ${personal.github ? `<div>${personal.github}</div>` : ""}
                  </div>
              </div>
          </header>
          
          <div class="executive-layout">
              <div class="executive-sidebar">
                  <section class="executive-section">
                      <h2 class="executive-section-title">Skills</h2>
                      
                      ${
                        skills.technical.length > 0
                          ? `
                          <div class="executive-skills-group">
                              <h3 class="executive-skills-title">Technical Expertise</h3>
                              <ul class="executive-skills-list">
                                  ${skills.technical.map((skill) => `<li>${skill}</li>`).join("")}
                              </ul>
                          </div>
                      `
                          : ""
                      }
                      
                      ${
                        skills.soft.length > 0
                          ? `
                          <div class="executive-skills-group">
                              <h3 class="executive-skills-title">Core Competencies</h3>
                              <ul class="executive-skills-list">
                                  ${skills.soft.map((skill) => `<li>${skill}</li>`).join("")}
                              </ul>
                          </div>
                      `
                          : ""
                      }
                  </section>
                  
                  ${
                    education.length > 0
                      ? `
                      <section class="executive-section">
                          <h2 class="executive-section-title">Education</h2>
                          <div class="executive-items">
                              ${education
                                .map(
                                  (edu) => `
                                  <div class="executive-item">
                                      <h3 class="executive-item-title">${edu.institution}</h3>
                                      <p class="executive-item-subtitle">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}</p>
                                      <p class="executive-item-date">${edu.startDate} - ${edu.endDate}</p>
                                      ${edu.description ? `<p class="executive-item-description">${edu.description}</p>` : ""}
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </section>
                  `
                      : ""
                  }
              </div>
              
              <div class="executive-main">
                  ${
                    personal.summary
                      ? `
                      <section class="executive-section">
                          <h2 class="executive-section-title">Professional Summary</h2>
                          <p class="executive-summary">${personal.summary}</p>
                      </section>
                  `
                      : ""
                  }
                  
                  ${
                    experience.length > 0
                      ? `
                      <section class="executive-section">
                          <h2 class="executive-section-title">Professional Experience</h2>
                          <div class="executive-items">
                              ${experience
                                .map(
                                  (exp) => `
                                  <div class="executive-item">
                                      <div class="executive-item-header">
                                          <h3 class="executive-item-title">${exp.position}</h3>
                                          <span class="executive-item-date">${exp.startDate} - ${exp.endDate}</span>
                                      </div>
                                      <p class="executive-item-company">${exp.company}${exp.location ? `, ${exp.location}` : ""}</p>
                                      ${exp.description ? `<p class="executive-item-description">${exp.description}</p>` : ""}
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </section>
                  `
                      : ""
                  }
                  
                  ${
                    projects.length > 0
                      ? `
                      <section class="executive-section">
                          <h2 class="executive-section-title">Key Projects</h2>
                          <div class="executive-items">
                              ${projects
                                .map(
                                  (project) => `
                                  <div class="executive-item">
                                      <h3 class="executive-item-title">${project.title}</h3>
                                      ${project.technologies ? `<p class="executive-item-technologies"><span class="executive-label">Technologies:</span> ${project.technologies}</p>` : ""}
                                      ${project.link ? `<p class="executive-item-link"><a href="${project.link}" target="_blank">${project.link}</a></p>` : ""}
                                      ${project.description ? `<p class="executive-item-description">${project.description}</p>` : ""}
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </section>
                  `
                      : ""
                  }
              </div>
          </div>
      </div>
  `

  resumePreview.innerHTML = html
}

// Render Creative Template
function renderCreativeTemplate() {
  const { personal, education, experience, skills, projects } = resumeData

  const html = `
      <div class="creative-template">
          <header class="creative-header">
              <h1 class="creative-name">${personal.name || "Your Name"}</h1>
              <h2 class="creative-title">${personal.title || "Professional Title"}</h2>
              
              <div class="creative-contact">
                  ${personal.email ? `<span>${personal.email}</span>` : ""}
                  ${personal.phone ? `<span>${personal.phone}</span>` : ""}
                  ${personal.location ? `<span>${personal.location}</span>` : ""}
                  ${personal.website ? `<span>${personal.website}</span>` : ""}
                  ${personal.linkedin ? `<span>${personal.linkedin}</span>` : ""}
                  ${personal.github ? `<span>${personal.github}</span>` : ""}
              </div>
          </header>
          
          ${
            personal.summary
              ? `
              <div class="creative-summary">
                  <p>${personal.summary}</p>
              </div>
          `
              : ""
          }
          
          <div class="creative-layout">
              <div class="creative-main">
                  ${
                    experience.length > 0
                      ? `
                      <section class="creative-section">
                          <h2 class="creative-section-title">Experience</h2>
                          <div class="creative-timeline">
                              ${experience
                                .map(
                                  (exp) => `
                                  <div class="creative-timeline-item">
                                      <h3 class="creative-item-title">${exp.position}</h3>
                                      <p class="creative-item-company">${exp.company}${exp.location ? `, ${exp.location}` : ""}</p>
                                      <p class="creative-item-date">${exp.startDate} - ${exp.endDate}</p>
                                      ${exp.description ? `<p class="creative-item-description">${exp.description}</p>` : ""}
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </section>
                  `
                      : ""
                  }
                  
                  ${
                    projects.length > 0
                      ? `
                      <section class="creative-section">
                          <h2 class="creative-section-title">Projects</h2>
                          <div class="creative-projects">
                              ${projects
                                .map(
                                  (project) => `
                                  <div class="creative-project-card">
                                      <h3 class="creative-project-title">${project.title}</h3>
                                      ${project.technologies ? `<p class="creative-project-tech">${project.technologies}</p>` : ""}
                                      ${project.description ? `<p class="creative-project-description">${project.description}</p>` : ""}
                                      ${project.link ? `<p class="creative-project-link"><a href="${project.link}" target="_blank">${project.link}</a></p>` : ""}
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </section>
                  `
                      : ""
                  }
              </div>
              
              <div class="creative-sidebar">
                  ${
                    education.length > 0
                      ? `
                      <section class="creative-section">
                          <h2 class="creative-section-title">Education</h2>
                          <div class="creative-education">
                              ${education
                                .map(
                                  (edu) => `
                                  <div class="creative-education-item">
                                      <h3 class="creative-education-title">${edu.institution}</h3>
                                      <p class="creative-education-degree">${edu.degree}${edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}</p>
                                      <p class="creative-education-date">${edu.startDate} - ${edu.endDate}</p>
                                      ${edu.description ? `<p class="creative-education-description">${edu.description}</p>` : ""}
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                      </section>
                  `
                      : ""
                  }
                  
                  <section class="creative-section">
                      <h2 class="creative-section-title">Skills</h2>
                      
                      ${
                        skills.technical.length > 0
                          ? `
                          <div class="creative-skills-group">
                              <h3 class="creative-skills-title">Technical</h3>
                              <div class="creative-skills-tags">
                                  ${skills.technical.map((skill) => `<span class="creative-skill-tag technical">${skill}</span>`).join("")}
                              </div>
                          </div>
                      `
                          : ""
                      }
                      
                      ${
                        skills.soft.length > 0
                          ? `
                          <div class="creative-skills-group">
                              <h3 class="creative-skills-title">Soft Skills</h3>
                              <div class="creative-skills-tags">
                                  ${skills.soft.map((skill) => `<span class="creative-skill-tag soft">${skill}</span>`).join("")}
                              </div>
                          </div>
                      `
                          : ""
                      }
                  </section>
              </div>
          </div>
      </div>
  `

  resumePreview.innerHTML = html
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", init)
