// Setup the contexts for the two charts
const ctx = document.getElementById('progressChart').getContext('2d');
const trendCtx = document.getElementById('trendGraph').getContext('2d');

let chart; // Progress chart for monthly data
let trendChart; // Trend graph for weekly data

// Data sets for different progress types (Strength/ Cardio)
const dataSets = {
  strength: [30, 45, 60, 80, 90, 100], // Strength data for monthly progress
  cardio: [10, 15, 20, 30, 40, 50],   // Cardio data for monthly progress
};

const trendData = {
  strength: [20, 40, 55, 70],  // Weekly strength trend
  cardio: [5, 15, 25, 35],     // Weekly cardio trend
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]; // Monthly labels for progress
const trendLabels = ["Week 1", "Week 2", "Week 3", "Week 4"]; // Weekly labels for trend graph

// Function to render the progress chart
function renderChart(type) {
  if (chart) chart.destroy(); // Destroy existing chart to render new one

  // Create a new line chart for progress (strength or cardio)
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Progress`,
        data: dataSets[type], // Based on type (strength or cardio)
        borderColor: '#007bff',
        backgroundColor: '#cce5ff',
        tension: 0.3,
        fill: false,
      }],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });

  // Now render the trend graph based on the selected type
  renderTrendGraph(type);
}

// Function to render the trend graph for weekly data
function renderTrendGraph(type) {
  if (trendChart) trendChart.destroy(); // Destroy existing trend chart to render new one

  // Create a new trend graph (weekly)
  trendChart = new Chart(trendCtx, {
    type: 'line',
    data: {
      labels: trendLabels,
      datasets: [{
        label: 'Weekly Trend',
        data: trendData[type], // Based on type (strength or cardio)
        borderColor: '#28a745',
        backgroundColor: '#c8e6c9',
        tension: 0.3,
        fill: false,
      }],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

// Event listener to change charts based on dropdown selection (strength or cardio)
document.getElementById('progressType').addEventListener('change', function () {
  renderChart(this.value);
});

// Initial chart render (strength is the default)
renderChart('strength');
