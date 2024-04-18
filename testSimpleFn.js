
function matched() {
  return "grr";   
}


// names.js module
function lastname() { // private function
  return "Doe";
}

function firstname() { // private function
  return "Jane";
}

function firstnameLastname() { // public function
  return `${firstname()} ${lastname()}`;
}

function lastnameFirstname() { // public function
  return `${lastname()}, ${firstname()}`;
}

module.exports = { firstnameLastname, lastnameFirstname, matched }; // object to be returned by require()

