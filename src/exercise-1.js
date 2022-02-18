/*
can't use Boolean(value)
consume any number of parameters
return array of objects
object per single param passed to the function
each object should contains:
   - isFalsy
   - type
   - stringLength
   - index
  [
        {
            "isFalsy": false,
            "type": "number",
            "StringLength": 1,
            "index": 0
        },
        ...
  ]
 */
function getInfo(...values) {
  var results = [];

  values.forEach((value, i) => {
    const isFalsy = !value
    const type = typeof value
    const StringLength = value.toString().length
    const index = i
    results.push({
      isFalsy,
      type,
      StringLength,
      index
    })
  });
  return results;
}


module.exports = getInfo;