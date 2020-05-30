const nameInverter = function(name) {
  const honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];
  // name is undefined
  if (name === undefined) {
    return "Error: Parameter undefined.";
  }
  // name is empty string
  if (!name.length) {
    return "";
  }
  
  name = name.trim().replace(/  +/g, ' ');
  let nameArr = name.split(' ');

  let title = ''
  // Case where honorific was passed in
  if (honorifics.includes(nameArr[0])) {
    title = nameArr[0];
    nameArr = nameArr.slice(1);
  }

  if (nameArr.length === 0) {
    return "";
  } else if (nameArr.length === 1) {
    return title ? `${title} ${nameArr[0]}` : nameArr[0];
  } else {
    return title ? `${title} ${nameArr[1]}, ${nameArr[0]}` : `${nameArr[1]}, ${nameArr[0]}`
  }
}



console.log(nameInverter(undefined));

module.exports = nameInverter;