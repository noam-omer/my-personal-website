

//invasive species alerts
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


