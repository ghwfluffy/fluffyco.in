document.addEventListener("DOMContentLoaded", function() {
  fetch('README.md')
  .then(response => response.text())
  .then(markdownString => {
    // Convert markdown string to HTML using the marked library.
    const htmlContent = marked(markdownString);

    // Display the converted HTML in the <div>
    document.getElementById('content').innerHTML = htmlContent;
  })
});
