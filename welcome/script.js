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
    roster.projects.forEach(p => {
      var rowHtml = `
        <th>
          <a target="_blank" href="https://github.com/mpaulweeks/cfc2018/tree/master/homework/${p}">${p}</a>
        </th>
      `;
      roster.students.forEach(s => {
        if (p === 'final'){
          const fi = roster.finals[s];
          if (fi){
            rowHtml += `
              <td class="projects-cell">
                <a target="_blank" href="https://github.com/mpaulweeks/cfc2018/tree/master/students/${s}/${p}">docs</a>
                <a target="_blank" href="https://github.com/${fi.github}/${fi.repo}">code</a>
                <a target="_blank" href="https://${fi.github}.github.io/${fi.repo}/">site</a>
              </td>`;
          }
        } else {
          rowHtml += `
            <td class="projects-cell">
              <a target="_blank" href="https://github.com/mpaulweeks/cfc2018/tree/master/students/${s}/${p}">code</a>
              <a target="_blank" href="https://mpaulweeks.github.io/cfc2018/students/${s}/${p}">site</a>
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
