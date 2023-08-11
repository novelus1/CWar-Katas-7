function validatePIN(pin) {
  if (typeof pin !== "number") {
    return false;
  }
  if (pin.toString().length === 4 || pin.toString().length === 6) {
    return true;
  } else {
    return false;
  }
}
