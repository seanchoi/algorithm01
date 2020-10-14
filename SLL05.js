max() {
    var currentNode = this.head
    var max = currentNode.value
    while(currentNode) {
        if(currentNode.value > max) {
            max = currentNode.value
            currentNode = currentNode.next
        }
        else {
            currentNode = currentNode.next
        }
    }
    return max
};
min() {
    var currentNode = this.head
    var min = currentNode.value
    // console.log(min)
    while(currentNode){
        if(currentNode.value < min ){
            min = currentNode.value
            console.log(min)
            currentNode = currentNode.next
        }
        else {
            currentNode = currentNode.next
        }
    }
};
average() {
    var currentNode = this.head
    var sum = 0
    var count = 0
    while(currentNode) {
        sum += currentNode.value
        currentNode = currentNode.next
        count += 1
    }
    return sum/count
}