function solution(box, n) {
    let [w, d, h] = box;
    return Math.floor(w/n) * Math.floor(d/n) * Math.floor(h/n);
}