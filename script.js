
let coins = 0;
let plantStage = 0; // 0 = empty, 1 = growing, 2 = ready
let currentPlant = 'Grass';

const plantData = {
  'Grass': { rank: 'D', growTime: 5000, profit: 1, unlock: null },
  'Tomato': { rank: 'C', growTime: 10000, profit: 3, unlock: 'harvests >= 10' }
};

const plot = document.getElementById('plot');
const coinDisplay = document.getElementById('coin-display');
const log = document.getElementById('log');

plot.addEventListener('click', () => {
  if (plantStage === 0) {
    plantStage = 1;
    plot.textContent = 'Growing...';
    log.textContent = `You planted ${currentPlant} (Rank ${plantData[currentPlant].rank})`;

    setTimeout(() => {
      plantStage = 2;
      plot.textContent = 'Ready to Harvest';
    }, plantData[currentPlant].growTime);
  } else if (plantStage === 2) {
    coins += plantData[currentPlant].profit;
    plantStage = 0;
    plot.textContent = 'Click to Plant';
    coinDisplay.textContent = `Coins: ${coins}`;
    log.textContent = `You harvested ${currentPlant} and earned ${plantData[currentPlant].profit} coins!`;
  }
});
