function validate(schema, values) {
    const result = [];

    for (value in values) {
        if (!schema[value](values[value])) {
            result.push(value)
        }
    }
    return result
}

module.exports = {validate};