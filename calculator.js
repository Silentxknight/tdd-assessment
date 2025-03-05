function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;  // Default delimiters
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(num => num < 0);

    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;