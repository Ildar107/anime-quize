/* eslint-disable */
function animation() {
  let e; let t; let r; let n; let i; let a; let s; let c; let o; let l; let u; let
    d;
  r = 40,
  e = [
    [203, 126, 216],
    [214, 66, 239],
    [217, 209, 189],
    [255, 104, 97],
    //[255, 82, 78],
    //[255, 82, 78],
    [200, 97, 218],
  ],
  n = 2 * Math.PI,
  i = document.getElementById('world'),
  s = i.getContext('2d'),
  window.w = 0,
  window.h = 0,
  u = function () {
    return window.w = i.width = window.innerWidth,
    window.h = i.height = window.innerHeight;
  },
  window.addEventListener('resize', u, !1),
  window.onload = function () {
    return setTimeout(u, 0);
  },
  l = function (e, t) {
    return (t - e) * Math.random() + e;
  },
  c = function (e, t, r, i) {
    return s.beginPath(),
    s.arc(e, t, r, 0, n, !1),
    s.fillStyle = i,
    s.fill();
  },
  d = 0.5,
  document.onmousemove = function (e) {
    return d = e.pageX / w;
  },
  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
      return window.setTimeout(e, 50);
    };
  }()),
  t = (function qwer() {
    function t() {
      this.style = e[~~l(0, 5)],
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`,
      this.r = ~~l(1, 4),
      this.r2 = 2 * this.r,
      this.replace();
    }
    return t.prototype.replace = function () {
      return this.opacity = 0,
      this.dop = 0.03 * l(1, 2),
      this.x = l(-this.r2, w - this.r2),
      this.y = l(-10, h - this.r2),
      this.xmax = w - this.r,
      this.ymax = h - this.r,
      this.vx = l(0, 2) + 8 * d - 5,
      this.vy = -0.1 * this.r + l(-1, 1);
    },
    t.prototype.draw = function () {
      let e;
      return this.x += this.vx,
      this.y += this.vy,
      this.opacity += this.dop,
      this.opacity > 1 && (this.opacity = 1,
      this.dop *= -1),
      (this.opacity < 0 || this.y > this.ymax) && this.replace(),
      (e = this.x) > 0 && e < this.xmax || (this.x = (this.x + this.xmax) % this.xmax),
      c(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
    },
    t;
  }()),
  a = (function () {
    let e; let n; let
      i;
    for (i = [],
    o = e = 1,
    n = r; n >= 1 ? e <= n : e >= n; o = n >= 1 ? ++e : --e) i.push(new t());
    return i;
  }()),
  window.step = function () {
    let e; let t; let r; let
      n;
    for (requestAnimationFrame(step),
    s.clearRect(0, 0, w, h),
    n = [],
    t = 0,
    r = a.length; t < r; t++) {
      e = a[t],
      n.push(e.draw());
    }
    return n;
  },
  step();
}

export default animation;
