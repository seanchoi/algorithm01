function removeBlank(str) {
    console.log(str.split(" ").join(""))
    return
}
removeBlank("Pl ayThat tF u nkyM usi c");

function getNums(str) {
    var num = ""
    for (var i=0; i<str.length; i++){
        if(str[i]%1==0) {
            num += str[i];
        } 
    }
    console.log(num)
}
getNums("1h2h3heh4hrj5htjk7jk8j")


function firstUpper(str) {
    var words = str.split(" ")
    console.log(words)
    var upper_case ="";
    for(var k=0; k<str.length; k++){
        console.log(words[k][0].toUpperCase())
    }
    console.log(upper_case)
    return upper_case
}

firstUpper("there's no free lunch")

function countNonSpace(str) {
    var new_word = str.split(" ").join("")
    var count = new_word.length
    console.log(count)
    return
}
countNonSpace("Honey pie, you are driving me crazy")

function removeShorter(arr, num){
    new_arr = []
    for (var i=0; i<arr.length; i++) {
        if (arr[i].length >= num) {
            new_arr.push(arr[i])
        }
    }
    console.log(new_arr)
}
removeShorter(["hello", "guy", "lovely", "YouTubeVideo"], 5);
