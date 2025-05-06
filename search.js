const items = [
  { name: "Morning Yoga", category: "workouts" },
  { name: "Protein Shake", category: "meals" },
  { name: "Treadmill Run", category: "workouts" },
  { name: "Chicken Salad", category: "meals" },
  { name: "Dumbbells", category: "equipment" },
  { name: "Cycling", category: "workouts" },
  { name: "Resistance Bands", category: "equipment" }
];

function filterItems() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const results = document.getElementById("resultsList");
  results.innerHTML = "";

  const filtered = items.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCategory = category === "" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  if (filtered.length === 0) {
    results.innerHTML = "<li>No results found.</li>";
  } else {
    filtered.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} (${item.category})`;
      results.appendChild(li);
    });
  }
}
