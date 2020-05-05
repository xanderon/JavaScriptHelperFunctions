function hasChangedInLast24Hours(dateToCompare) {
    const milisecondsDate = Date.parse(dateToCompare);
    const oneDay = 1 * 24 * 60 * 60 * 1000;
    const oneDayAgo = Date.now() - oneDay;
    console.log(`Change occurred ${(24 - ((milisecondsDate - oneDayAgo) / (60 * 60 * 1000))).toFixed(1)} hours ago`);
    return milisecondsDate > oneDayAgo;
}
hasChangedInLast24Hours('2020-01-01T01:01:01.000Z'); // logs: Change occurred ~3006.3 hours ago -> returns false