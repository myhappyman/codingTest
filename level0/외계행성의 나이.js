/**
 * age: number
 * Ascii코드를 활용하여 구현 함
 * String.fromCharCode(n) : 아스키코드로 변환
 * s.charCodeAt() : 아스키코드값으로 출력
 */
function solution(age) {
    return [...String(age)].map(x => String.fromCharCode(x.charCodeAt()+49)).join("")
}