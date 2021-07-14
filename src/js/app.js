export default function canIterate(obj) {
  try {
    return Symbol.iterator in Object.getPrototypeOf(obj);
  } catch (e) {
    return false;
  }
}
