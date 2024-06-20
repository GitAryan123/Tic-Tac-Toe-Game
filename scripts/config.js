function openPlayerConfig(event) {
   editedPlayerId = +event.target.dataset.playerid;
  // even though i declared as playerId but i have to use dataset.playerid
  backdrop.style.display = "block";
  configModal.style.display = "block";
}
function closeOverlay() {
  backdrop.style.display = "none";
  configModal.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value='';
}

function onSubmit(event){
  event.preventDefault();
  const formData = new FormData(event.target);
 const playerName = formData.get('player-name').trim();

 if (!playerName) {
  errorElement.textContent ="Enter a valid name!";
  event.target.firstElementChild.classList.add('error');
  return;
 }

 const updatePlayerElement = document.getElementById('player-'+editedPlayerId+'-data');
 updatePlayerElement.children[1].textContent = playerName;

 player[editedPlayerId-1].name = playerName;

 closeOverlay();
}