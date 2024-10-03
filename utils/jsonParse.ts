export function jsonParse(data: any) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}
