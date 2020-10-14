contains(value) {
    var currentNode = this.head
    var answer = false;
    while(currentNode){
        if(currentNode.value == value){
            answer = true;
            break
        }
        else {
            currentNode = currentNode.next
        }
    }
    return answer
}

list_length() {
    var currentNode = this.head
    var count = 0;
    while(currentNode) {
        count += 1
        currentNode = currentNode.next
    }
    return count
}