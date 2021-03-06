export function IsValidEmail(email) {
  if (email === undefined) {
    return false;
  }
  if (email === "") {
    return false;
  }
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function IsString(value) {
  return typeof value === "string" || value instanceof String;
}

export function IsStringNotUndefinedOrEmpty(value) {
  if (!IsString(value)) {
    return false;
  }
  if (value === undefined || value === "") {
    return false;
  }
  return true;
}
