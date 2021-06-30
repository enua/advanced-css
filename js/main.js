/* jshint esversion: 6 */

/* interface Project {
  name: String;
  description: String;
  image: String;
  link: String;
} */

generateProjects = () => {
  console.log('dasdasd');
};

filterByName = (name) => {
  console.log('filter', name);
  return name;
};

window.onload =()=> {
  console.log('onload');
  this.generateProjects();
  this.filterByName('nameasdasd');
};