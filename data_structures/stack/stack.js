class Stack {
    #stack_size;
    #stack = [];
    #stack_pointer;
    constructor(size) {
        this.#stack_size = size;
        this.#stack = new Array(size);
        this.#stack_pointer = 0;
    }
    push(value) {
        if(this.#stack_pointer >= this.#stack_size) throw new Error('Stack overflow');
        return this.#stack[this.#stack_pointer++] = value;
    }
    pop() {
        if(this.#stack_pointer <= 0) throw new Error('Stack underflow');
        return this.#stack[--this.#stack_pointer];
    }
    empty() {
        return this.#stack_pointer === 0;
    }
    full() {
        return this.#stack_pointer === this.#stack_size;
    }
}