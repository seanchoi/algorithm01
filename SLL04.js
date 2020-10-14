display(){
    var currentNode = this.head;
    var count= 1;
    while(currentNode) {
        console.log(`'currnet nodes: ${currentNode}. value is ${currentNode.value}, Count ${count}`)
        currentNode = currentNode.next
        count += 1;
        
        }
    return this
    }