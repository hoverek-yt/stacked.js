import Path from './path';

export default class Stacked {
  public paths: Path[] = [];

  public createPath(): Path {
    const path = new Path();

    this.paths.push(path);

    return path;
  }
  public removePath(path: Path) {
    this.paths.splice(this.paths.indexOf(path), 1);
  }
  public clearPaths() {
    this.paths.splice(0, this.paths.length);
  }

  public hitTest(canvas: HTMLCanvasElement, x: number, y: number): Path | null {
    const ctx = canvas.getContext('2d')!;

    let hitPaths: Path[] = [];

    for (const path of this.paths) {
      if (
        ctx.isPointInPath(path.path2d, x, y) ||
        ctx.isPointInStroke(path.path2d, x, y)
      )
        hitPaths.push(path);
    }

    return hitPaths.pop() ?? null;
  }
}
