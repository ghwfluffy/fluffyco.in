// redirect class
document.addEventListener('DOMContentLoaded', function() {
  function handle(event) {
    const url = this.getAttribute('redirect');
    // Left click
    if (event.button === 0) {
      window.location.href = url;
    }
    // Middle click
    else if (event.button === 1) {
      window.open(url, '_blank');
    }
  }
  const clickable = document.querySelectorAll('.link');
  clickable.forEach(function(element) {
      element.addEventListener('click', handle);
      element.addEventListener('mousedown', handle);
    }
  );
});
