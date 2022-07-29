/*
const h2 = document.createElement('h2');
h2.textContent = 'This content added by Javascript';
document.querySelector('body').appendChild(h2);
*/
const invasiveButton = document.getElementById('submitButton');
invasiveButton.addEventListener('click', function() {
  if(document.getElementById('knotweed').checked)
    alert('Good choice!');
  else if (document.getElementById('treeOfHeaven').checked)
    alert('Not as common in Pittsburgh, but also bad');
  else if (document.getElementById('spottedLanternfly').checked)
    alert('A brand new problem!');
  else alert('Please pick a species');
});


