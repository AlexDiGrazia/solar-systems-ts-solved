// SPACE DATA EXERCISE 14
// Return the sum of orbital periods of all asteroids
// Return example: 234234.234

import { Asteroid } from "../data/data";

export function getOrbitalPeriodsSum(asteroids: Asteroid[]) {
  return asteroids.reduce((a, b) => a + b.orbitalPeriod, 0);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
