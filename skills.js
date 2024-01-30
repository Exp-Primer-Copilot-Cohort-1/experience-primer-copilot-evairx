function calculateNumbers(var1, var2) {
    try {
        if (typeof var1 !== 'number' || typeof var2 !== 'number') {
            throw new Error('Both arguments must be numbers');
        }

        const result = var1 + var2;
        console.log('The result is:', result);
        return result;
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}   