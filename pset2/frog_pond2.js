const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];

function getFrogActivity(input) {
  const index = Number(input);
  
  // The modulo operator (%) wraps any integer back into array bounds [0 to length - 1]
  const wrappedIndex = ((index % activities.length) + activities.length) % activities.length;
  
  return activities[wrappedIndex];
}