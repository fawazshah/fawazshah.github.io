const NUM_PAGES = 3;

function createSidenav(page) {

  const pageStatuses = new Array(NUM_PAGES).fill('')
  pageStatuses[page] = " active"

  document.write(`
    <div class="sidenav">
      <div class="sidenav-contents">
        <h1 class="title">FAWAZ</h1>
        <h1 class="title">SHAH</h1>
        <br>
        <div class="navlinks">
          <a class="navlink${pageStatuses[0]}" href="index.html">About</a>
          <a class="navlink${pageStatuses[1]}" href="project.html">Final Year Project</a>
          <a class="navlink${pageStatuses[2]}" href="notes.html">Imperial College Notes</a>
        </div>
        <div class="social-media-icons">
          <a href="https://github.com/fawazshah" class="fab fa-github"></a>
          <a href="https://www.linkedin.com/in/fawaz-shah" class="fab fa-linkedin-in"></a>
        </div>
      </div>
    </div>
  `)
}
