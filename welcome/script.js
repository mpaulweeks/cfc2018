(function (){
  const heros = ['tomhanks'];
  const randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;

  function renderLinks(roster){
    console.log(roster);
    var headHtml = '<th></th>';
    roster.students.forEach(s => {
      headHtml += `
        <th>
          <a href="https://mpaulweeks.github.io/cfc2018/students/${s}"/>
            ${s}
          </a>
        </th>`;
    });
    var bodyHtml = '';
    roster.projects.forEach(pid => {
      var rowHtml = `
        <th>
          <a target="_blank" href="https://github.com/mpaulweeks/cfc2018/tree/master/homework/${pid}">${pid}</a>
        </th>
      `;
      roster.students.forEach((s, sindex) => {
        if (pid === 'proposal') {
          rowHtml += `
            <td class="projects-cell">
              <a target="_blank" href="https://github.com/mpaulweeks/cfc2018/tree/master/students/${s}/final">proposal</a>
            </td>`;
        } else if (pid === 'final') {
          var gh = roster.github[sindex];
          rowHtml += `
            <td class="projects-cell">
              <a target="_blank" href="https://github.com/${gh}/cfc">code</a>
              <a target="_blank" href="https://${gh}.github.io/cfc/">site</a>
            </td>`;
        } else {
          rowHtml += `
            <td class="projects-cell">
              <a target="_blank" href="https://github.com/mpaulweeks/cfc2018/tree/master/students/${s}/${pid}">code</a>
              <a target="_blank" href="https://mpaulweeks.github.io/cfc2018/students/${s}/${pid}">site</a>
            </td>`;
        }
      });
      bodyHtml += `<tr>${rowHtml}</tr>`;
    });
    document.body.innerHTML += `
      <div class="projects-container">
        <table>
          <thead>
            <tr>
              ${headHtml}
            </tr>
          </thead>
          <tbody>
            ${bodyHtml}
          </tbody>
        </table>
      </div>
    `;
  }
  fetch("static/roster.json?v=" + (new Date()).toISOString())
    .then(response => {
      return response.json();
    })
    .then(json => {
      renderLinks(json);
    });
})()
