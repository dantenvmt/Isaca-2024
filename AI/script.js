var cal = new CalHeatMap();
cal.init({
    start: new Date(2023, 0, 1), // Start date
    range: 12, // Number of months to display
    domain: "month", // Domain type (e.g., month, week, day)
    subDomain: "day", // Subdomain type (e.g., day, hour)
    data: "path/to/data.json" // Path to your data file
});