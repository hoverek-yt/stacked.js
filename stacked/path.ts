export default class Path {
  protected _path2d: Path2D = new Path2D();
  protected _transformedPath2d = new Path2D();

  protected _matrix: DOMMatrix = new DOMMatrix();

  get path2d() {
    this._path2d = new Path2D();
    this._path2d.addPath(this._transformedPath2d, this._matrix);

    return this._path2d;
  }
  get transformedPath2d() {
    return this._transformedPath2d;
  }

  transform({
    rotationAngle = 0,
    x = 0,
    y = 0,
    z = 0,
    scaleX = 1,
    scaleY = 1,
    scaleZ = 1,
    rotationX = 0,
    rotationY = 0,
    rotationZ = 0,
  }) {
    // translate
    this._matrix.translateSelf(x, y, z);

    // rotate
    this._matrix.translateSelf(rotationX, rotationY, rotationZ);
    this._matrix.rotateSelf(0, 0, rotationAngle);
    this._matrix.translateSelf(-rotationX, -rotationY, -rotationZ);

    // scale
    this._matrix.transformPoint(new DOMPoint(0, 0, 0));
    this._matrix.scale(scaleX, scaleY, scaleZ);

    return this;
  }
}
