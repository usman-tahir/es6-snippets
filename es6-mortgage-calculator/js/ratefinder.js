let url = 'rates.json';

fetch(url)
    .then(response => response.json())
    .then(rates => {
        let html = `
            <tr>
                <td>Rate name</td>
                <td>Rate duration</td>
                <td>Rate</td>
            </tr>
        `;
        rates.forEach(rate => html += `
            <tr>
                <td>${rate.name}</td>
                <td>${rate.years}</td>
                <td>${rate.rate}%</td>
            </tr>
        `);
        document.getElementById('rates').innerHTML = html;
    })
    .catch(e => console.log(e));