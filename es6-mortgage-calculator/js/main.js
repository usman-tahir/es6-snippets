import Mortgage from './mortgage';

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;

    let mortgage = new Mortgage(principal, years, rate);
    let html = `
        <tr>
            <td>Year</td>
            <td>Principal</td>
            <td></td>
            <td>Interest</td>
            <td>Balance</td>
        </tr>
    `;

    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);

    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="stretch">
                    <div class="bar principal" style="flex:${year.principalY};-webkit-flex:${year.principalY}"></div>
                    <div class="bar interest" style="flex:${year.interestY};-webkit-flex:${year.interestY}"></div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
    document.getElementById("amortization").innerHTML = html;
});