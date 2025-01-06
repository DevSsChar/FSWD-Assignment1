// Problem 3: Weather Forecast Tracker
// Objective: Build a tracker to manage weather data for different cities.
// Tasks:
// Create an array of city weather objects, where each object contains:
// cityName (string),
// temperature (number in Celsius),
// condition (string, e.g., "Sunny", "Cloudy", "Rainy").
// Write the following functions:
// Add City Weather: Function to add a new city weather object.
// Find Hottest City: Use find() to identify the city with the highest temperature.
// Filter by Condition: Use filter() to list all cities with a specific weather condition.
// Use map() to create a list of city names with their temperatures in the format:
// "City: [CityName], Temp: [Temperature]°C".
// Use destructuring to extract and log details of the hottest city.
// Use template literals to log a weather summary for all cities in this format:
// "City: [Name], Temp: [Temp]°C, Condition: [Condition]".
let cities=[
    {
        cityName: "Vadodara",
        temperature: 34,
        condition: "Sunny"
    },
    {
        cityName: "Ahemdabad",
        temperature: 27,
        condition: "Cloudy"
    }
]
function addCities(cityName,temperature1,condition1) {
    cities.push({cityName:`${cityName}`,temperature:temperature1,condition:condition1})
    console.log(`City added: ${cityName}, temperature: ${temperature1}*C, condition: ${condition1}`);
}
function hottestCity() {
    const maxTemp=Math.max(...cities.map((item)=>item.temperature));
    const hottestCity=cities.find(city=>city.temperature=maxTemp);
    console.log(`hottest City is ${hottestCity.cityName}`);
}
function filterByCondition(condition) {
    const city=cities.filter(item=>item.condition==condition)
    console.log(`Cities with ${condition} weather:`,city);
}
function displayDetails() {
    return cities.map(item=>`City: ${item.cityName} ,Temp: ${item.temperature} `);
}
const sortCitiesByTemperature = (ascending = true) => {
    return cities.sort((a, b) => ascending ? a.temperature - b.temperature : b.temperature - a.temperature);
};
const convertTemperature = (temperature, toFahrenheit = true) => {
    return toFahrenheit 
        ? (temperature * 9/5) + 32  // Convert Celsius to Fahrenheit
        : (temperature - 32) * 5/9; // Convert Fahrenheit to Celsius
};
addCities("Surat",25,"Cloudy")
hottestCity();
filterByCondition("Cloudy")
const citylist=displayDetails();
citylist.forEach(info=>console.log(info));
