window.onload = () => {
  const form = document.getElementById('form');
  const teamName = document.getElementById('teamName');
  const info = document.querySelector('.info-logo');
  const allTeams = document.getElementById('all-teams');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    info.innerHTML = '';

    let found;

    try {
      found = find(teamName.value);
    } catch (error) {
      showError(error);
      throw error.message;
    }

    showPilot(found);
  });

  const find = (pilot) => {
    if (!pilot || pilot === '') throw new Error('Você precisa digitar o nome de um piloto.');

    let found;

    for (let index = 0; index < data.pilots.length; index += 1) {
      if (data.pilots[index].name === pilot) {
        found = data.pilots[index];
      }
    }

    if (found === undefined) throw new Error('Piloto não encontrado.');

    return found;
  }

  const showPilot = (found) => {
    const newP = document.createElement('p');
    const newImg = document.createElement('img');

    const arrayLength = found.years.length;

    newP.innerText = `${found.name} possui ${arrayLength} título${arrayLength > 1 ? 's': ''} mundia${arrayLength > 1 ? 'is' : 'l'} em: ${found.years.join(' - ')}.`;

    newImg.src = `${found.img}`;
    newImg.style.height = '150px';
    newImg.alt = `Foto de - ${found.name}`;

    info.appendChild(newP);
    info.appendChild(newImg);
  };

  const showError = (error) => {
    const newP = document.createElement('p');
    newP.innerHTML = error.message;
    info.appendChild(newP);
  };

  allTeams.addEventListener('click', () => {
    info.innerHTML = '';
    for (let index = 0; index < data.pilots.length; index += 1) {
      showPilot(data.pilots[index]);
    }
  })

};