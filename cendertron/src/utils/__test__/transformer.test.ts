import { stripBackspaceInUrl } from '../transformer';

console.log(
  stripBackspaceInUrl(
    'http://localhost:8082/vulnerabilities/brute/../../vulnerabilities/sqli/'
  )
);

console.log(
  stripBackspaceInUrl(
    'http://localhost:8082/vulnerabilities/brute/.././vulnerabilities/sqli/'
  )
);

console.log(
  stripBackspaceInUrl(
    'http://localhost:8082/vulnerabilities/brute/vulnerabilities/sqli/'
  )
);