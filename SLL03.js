list_length() {
    var currentNode = this.head
    var count = 0;
    while(currentNode) {
        count += 1
        currentNode = currentNode.next
    }
    return count
}