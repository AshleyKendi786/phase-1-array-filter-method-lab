// Code your solution here
// Function 1: Case-insensitive exact name match
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function 2: Fuzzy match for name beginnings (case-insensitive)
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function 3: Exact object name match
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export functions if testing with Node or Jest
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
