export default class Helpers {
  public static centerOf(x: number, y: number, width: number, height: number) {
    return new DOMPoint(x + width - width / 2, y + height - height / 2);
  }

  public static topRightOf(
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    return new DOMPoint(x + width, y);
  }

  public static bottomRightOf(
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    return new DOMPoint(x + width, y + height);
  }

  public static bottomLeftOf(
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    return new DOMPoint(x, y + height);
  }
}
