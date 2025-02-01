document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Enable dropdown menu
    let dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("mouseenter", function () {
        let menu = this.querySelector(".dropdown-menu");
        menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        let menu = this.querySelector(".dropdown-menu");
        menu.style.display = "none";
    });

    // Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Interactive Chart with Chart.js
    const ctx = document.getElementById("interactive-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Production", "Recycling"],
            datasets: [{
                label: "Paper Usage (Million Tons)",
                data: [500, 300], // Replace with actual data
                backgroundColor: ["#FAD02E", "#4A90E2"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
