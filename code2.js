const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true })
console.log(['A1', 'A10', 'A11', 'A12', 'A2', 'A3', 'A4', 'B10', 'B2', 'F1', 'F12', 'F3'].sort(sortAlphaNum))