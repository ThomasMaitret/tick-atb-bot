const TICKS = {
  4: 358,
  5: 286,
  6: 239,
  7: 205,
  8: 179,
};

function calculateTickStats(baseSpeedInput, leadInput) {
  const baseSpeed = Number.isFinite(Number(baseSpeedInput)) ? Number(baseSpeedInput) : 0;
  const lead = Number.isFinite(Number(leadInput)) ? Number(leadInput) : 0;
  const totemSpeed = baseSpeed * 0.15;
  const speedFromLead = (baseSpeed * lead) / 100;

  const tick4 = TICKS[4] - baseSpeed - speedFromLead - totemSpeed;
  const tick5 = TICKS[5] - baseSpeed - speedFromLead - totemSpeed;
  const tick6 = TICKS[6] - baseSpeed - speedFromLead - totemSpeed;
  const tick7 = TICKS[7] - baseSpeed - speedFromLead - totemSpeed;

  return {
    baseSpeed,
    lead,
    totemSpeed: Math.floor(totemSpeed),
    tick4: Math.floor(tick4),
    tick5: Math.floor(tick5),
    tick6: Math.floor(tick6),
    tick7: Math.floor(tick7),
    total4: Math.floor(tick4 + baseSpeed),
    total5: Math.floor(tick5 + baseSpeed),
    total6: Math.floor(tick6 + baseSpeed),
    total7: Math.floor(tick7 + baseSpeed),
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TICKS,
    calculateTickStats,
  };
}

if (typeof window !== 'undefined') {
  window.calculateTickStats = calculateTickStats;
}
