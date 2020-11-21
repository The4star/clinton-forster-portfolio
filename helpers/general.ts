const scrollToSkills = () => { 
  const skills = document.getElementById("skills");
  skills.scrollIntoView({behavior: 'smooth', inline: 'center'})
}

export {
  scrollToSkills
}