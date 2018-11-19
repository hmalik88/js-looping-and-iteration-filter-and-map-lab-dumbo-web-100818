// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  return drivers.filter(function (driver) {return driver.revenue > number;});
}

function driverNamesWithRevenueOver(drivers, numbers) {
  return driversWithRevenueOver(drivers, numbers).map(function (person) {
    return person.name;
  });
}

 function exactMatch (drivers, match) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in match) {
      matches = driver[key] === match[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(person) {
    return person.name;
  });
}
