function BSearch(arr, value) {
    var mid = Math.floor(arr.length/2);
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return BSearch(arr.slice(0, mid), value);
    }
    else if(value > arr[mid] && arr.length > 1) {
        return BSearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}

function GreatCFactor(value01, value02) {
    if (value01 == value02) {
        return value01;
    }
    if (value01 > value02) {
        return GreatCFactor(value01-value02, value02);
    }
    if (value01 < value02) {
        return GreatCFactor(value01, value02-value01);
    }
}


function GreatCFactor_Second(value01, value02) {
    if (value01 == value02) {
        return value01;
    }
    if (value01 > value02) {
        if ((value01/value02) % 1 === 0) {
            return value02;
        } else {
            return GreatCFactor_Second(value01-value02, value02);
        }
    }
    if (value01 < value02) {
        if ((value01/value02) % 1 === 0) {
            return value02;
        } else {
            return GreatCFactor_Second(value01, value02-value01);
        }
    }
}
console.log(GCF(123456, 987654));