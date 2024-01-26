// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

interface hashMap {
  [year: number]: number;
}

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  let max = 0;
  let asteroid;
  asteroids.reduce((acc: hashMap, cur: Asteroid) => {
    acc[cur.discoveryYear] = (acc[cur.discoveryYear] ?? 0) + 1;
    if (acc[cur.discoveryYear] !== undefined && acc[cur.discoveryYear]! > max) {
      max = acc[cur.discoveryYear]!;
      asteroid = cur.discoveryYear;
    }
    return acc;
  }, {} as hashMap);

  return asteroid;
}

// max = acc[cur.discoveryYear]! > max ? acc[cur.discoveryYear] : max

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
