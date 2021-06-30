/* jshint esversion: 6 */

generateProjects = (filter) => {

  const projectsValues = [
    {
      name: 'Mars Rover',
      description: 'A single rover was sent to mars. You can deploy on space, send commands and move it around map with simple control buttons. Keep away from map limits!',
      image: 'img/project-01.png',
      link: 'https://mars-rover.strin.es/',
      skills: ['icon-git', 'icon-angular', 'icon-terminal', 'icon-typescript'],
    },
    {
      name: 'Gnommes Town',
      description: 'This is the Gnomme town. You can look in this archive for and find amazing information and relations between all citizens!',
      image: 'img/project-02.png',
      link: 'https://gnomme-town.strin.es/',
      skills: ['icon-git', 'icon-angular', 'icon-typescript'],
    },
    {
      name: 'React learning',
      description: 'I choose this to learn and increase skills throw react, redux...',
      image: 'img/project-03.png',
      link: 'https://react.strin.es/',
      skills: ['icon-git', 'icon-react', 'icon-js-square'],
    },
    
  ];

  generateHtml(filterByName(projectsValues, filter));
  
};

getSkillsIcons = (skills) => {
  return skills.map((skill) => '<svg class="card__icon-skills"><use xlink:href="img/sprite.svg#' + skill + '"></use></svg>');
}; 

generateHtml = (projects) => {
  const card = document.querySelector('.card');
  const project1 = document.querySelector('#project1');
  
  if (card) {
    card.remove();
    const cardCreated = document.createElement('div');
    cardCreated.className = 'card';
    project1.appendChild(cardCreated);
    
    const cardReGen = document.querySelector('.card');
    projects.forEach((project) => {
      cardReGen.insertAdjacentHTML(
        'afterbegin',
        '<div class="card__item">' +
        '<h3 class="card__title">' + project.name + '</h3>' +
        '<figure class="card__figure">' +
        '<img src="' + project.image +'" alt="' + project.name +'" class="card__photo"></img>' +
        '</figure>' +
        '<p class="card__description">' + project.description + '</p>' +
        '<p class="card__skills">' + getSkillsIcons(project.skills) + '</p>' +
        '<div class="card__actions"><a target="_blank" href="' + project.link + '" class="btn btn-primary">Open</a></div>' +
        '</div>'
        );
      }
      );
    }
};

filterByName = (projects, filter) => {
  return projects.filter((project) => project.name.toLowerCase().includes(filter.toLowerCase()));
};

document.addEventListener("DOMContentLoaded", function(event) {
  const search = document.querySelector('#search_me');
  search.addEventListener('input', (e) => {
    generateProjects(search.value);
  });
  generateProjects('');
});