function add(x1, y1, x2, y2) {
    if (y1 !== y2) {
        return ((x1 * y2) + (x2 * y1)) / (y1 * y2);
    } else {
        return (x1 + x2) / y1;
    }
}

function multiply(x1, y1, x2, y2){
    const gcd1 = gcd(x1, y2);
    const gcd2 = gcd(y1, x2);

    if (gcd1 > 1){
        const x1g = x1 / gcd1;
        const y2g = y2 / gcd1
        return ((x1g * x2) / (y1 * y2g));
    }else if(gcd2 > 1){
        const x2g = x2 / gcd2;
        const y1g = y1 / gcd2;
        return ((x1 * x2g) / (y1g * y2));
    }else if(gcd2 > 1 && gcd1 > 1){
        const x1g = x1 / gcd1;
        const y1g = y1 / gcd1;
        const x2g = x2 / gcd2;
        const y2g = y2 / gcd2;
        return ((x1g * x2g) / (y1g * y2g));
    }else{
        return ((x1 * x2) / (y1 * y2));
    }

}

function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
