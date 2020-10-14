back() {
    var currentNode = this.head
    var lastValue = 0
    while(currentNode) {            
        if(!currentNode.next) {
            lastValue = currentNode.value
            currentNode = currentNode.next
        }
        else {
            currentNode = currentNode.next
        }
    }
    return lastValue
}
removeBack() {
    var currentNode = this.head
    while(currentNode.next.next) {
        currentNode = currentNode.next
    }        
    currentNode.next = null
    return this
}
addBack(value) {
    var currentNode = this.head
    while(currentNode.next.next) {
        currentNode = currentNode.next
    }
    currentNode.next = new Node(value)
    return this
}