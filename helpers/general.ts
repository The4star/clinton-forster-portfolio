const scrollToSkills = () => { 
  const skills = document.getElementById("skills");
  skills.scrollIntoView({behavior: 'smooth', inline: 'center'})
}

const toggleModal = (id: string) => {
  const modalToToggle:HTMLElement = document.querySelector(`#${id}`)
  
  if (modalToToggle.style.display === "none") {
    return modalToToggle.style.display = "flex"
  } else {
    return modalToToggle.style.display = "none"
  }
}

export {
  scrollToSkills,
  toggleModal
}