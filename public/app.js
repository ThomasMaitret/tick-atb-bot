const form = document.querySelector('#tick-form');
const results = document.querySelector('#results');

const renderStats = (stats) => {
  results.innerHTML = `
    <p>Base speed: ${stats.baseSpeed} / Lead: ${stats.lead}%</p>
    <div class="result-row"><span>Tick 7</span><strong>+${stats.tick7}</strong><small>Total: ${stats.total7}</small></div>
    <div class="result-row"><span>Tick 6</span><strong>+${stats.tick6}</strong><small>Total: ${stats.total6}</small></div>
    <div class="result-row"><span>Tick 5</span><strong>+${stats.tick5}</strong><small>Total: ${stats.total5}</small></div>
    <div class="result-row"><span>Tick 4</span><strong>+${stats.tick4}</strong><small>Total: ${stats.total4}</small></div>
  `;
};

const calculateFromForm = () => {
  const baseSpeed = Number(document.querySelector('#baseSpeed').value);
  const lead = Number(document.querySelector('#lead').value);
  const stats = calculateTickStats(baseSpeed, lead);
  renderStats(stats);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateFromForm();
});

calculateFromForm();
