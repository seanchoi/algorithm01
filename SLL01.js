class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
firstNode = new Node("Sean");
secondNode = new Node("Yoori");
thirdNode = new Node("Mira")
fourthNode = new Node("Sarah")

firstNode.next = secondNode
secondNode.next = thirdNode
thirdNode.next = fourthNode


console.log(firstNode)
console.log(secondNode)
// console.log(firstNode.next)


class SLL {
    constructor(value) {
        this.head = new Node(value);
    }
    addFront(value) {
        var restOfList = this.head;
        this.head = new Node(value)
        this.head.next = restOfList
        return this; 
    }
    removeFront() {
        var currentNode = this.head
        this.head = currentNode.next
        return this

    }
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

    front() {
        if(this.head) {
            return this.head.value
        };
    }
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
    }
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
    }
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

}


var firstSLL = new SLL(2)
var secondSLL = new SLL(4)
console.log(firstSLL.addFront(4).addFront(6).addFront(8).addFront(10))
console.log(firstSLL.display())
console.log(firstSLL.front())
console.log(firstSLL.removeFront().front())
console.log(firstSLL.contains(4))
console.log(firstSLL.list_length())
console.log(firstSLL.max())
console.log(firstSLL.min())

console.log(firstSLL.average())
console.log(firstSLL.back())