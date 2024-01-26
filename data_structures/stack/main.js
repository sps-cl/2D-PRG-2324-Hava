console.log("--------------------------------STACK--------------------------------");
let stack = new Stack(10);
for (let i = 0; !stack.full(); i++) {
    console.log(stack.push(i));
}
console.log(stack.full());
while(!stack.empty()) {
    console.log(stack.pop());
}
console.log(stack.empty());