fetch('news.json?t=' + Date.now())
  .then(response => response.json())
  .then(news => {
    const container = document.getElementById('news');

    let html = '';
    let currentYear = null;

    news.forEach(item => {
      if (item.year !== currentYear) {
        currentYear = item.year;
        html += `<h1><u>${currentYear}</u></h1>`;
      }

      html += `
        <h2>Entry ${item.entry} (${item.date})</h2>
        <ul>
          ${item.content.map(text => `<li>${text}</li>`).join('')}
        </ul>
      `;
    });

    container.innerHTML = html;
  })
  .catch(error => {
    document.getElementById('news').innerHTML =
      '<p>Impossible de charger les actualités.</p>';
    console.error(error);
  });
