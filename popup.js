const popup = document.getElementById('popup');
const clipboardImg = document.getElementById('clipboardImg');

var popupImages = [popup]

function copyText(event, text) {
  // Create a temporary textarea to copy from
  const tempTextarea = document.createElement('textarea');
  document.body.appendChild(tempTextarea);
  tempTextarea.value = text;
  
  // Select the text
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999);

  // Copy the selected text
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Position the image at the cursor
  // centering the image on the cursor
  clipboardImg.classList.remove('hidden');
  clipboardImg.style.left = (event.pageX - (clipboardImg.offsetWidth / 2) + 30) + 'px';
  clipboardImg.style.top = (event.pageY - (clipboardImg.offsetHeight / 2) - 20) + 'px';

  // Reset the animation to ensure it plays every time
  clipboardImg.style.animation = 'none';
  setTimeout(() => {
      clipboardImg.style.animation = '';
  }, 10);
}

function bindPopup(div, text) {
  const hoverElement = document.getElementById(div);
  popupImages.push(hoverElement);

  function show(event) {
    popup.classList.remove('hidden');
    popup.style.left = (event.pageX + 10) + 'px';
    popup.style.top = (event.pageY + 10) + 'px';
    popup.innerHTML = text;
  }

  // Show popup
  hoverElement.addEventListener('click', (event) => {
    show(event);
    copyText(event, text);
  });
  hoverElement.addEventListener('mousemove', (event) => show(event));

  // Hide popup
  hoverElement.addEventListener('mouseout', () => {
      popup.classList.add('hidden');
  });
}

// Hide popup when clicked outside (Mobile)
document.addEventListener('click', function(event) {
  // Ignore clicks on a popup image
  for (let index in popupImages) {
    if (popupImages[index].contains(event.target)) {
      return;
    }
  }
  // The clicked element is outside the div, hide it
  popup.style.display = 'none';
});

bindPopup("emailPopup", "ghw@ghwfluffy.com");
