class DoubleEndedQueue {
    #size;
    #headIndex;
    #tailIndex;
    #count;
    #array;
    #bound;

    constructor(size) {
        this.#size = size;
        this.#array = new Array(size);
        this.#bound = this.#size - 1;
        this.#count = 0;
        this.#tailIndex = 0;
        this.#headIndex = this.#bound;
    }

    pushBack(data) {
        if (this.#count === this.#size) return;
        this.#array[this.#tailIndex++] = data;
        if (this.#tailIndex === this.#size) this.#tailIndex = 0;
        this.#count++;
        return this;
    }

    pushFront(data) {
        if (this.#count === this.#size) return;
        this.#array[this.#headIndex--] = data;
        if (this.#headIndex < 0) this.#headIndex = this.#bound;
        this.#count++;
        return this;
    }

    popBack() {
        if (this.#count === 0) return null;
        this.#tailIndex--;
        if (this.#tailIndex < 0) this.#tailIndex = this.#bound;
        this.#count--;
        return this.#array[this.#tailIndex];
    }

    popFront() {
        if (this.#count === 0) return null;
        this.#headIndex++;
        if (this.#headIndex === this.#size) this.#headIndex = 0;
        this.#count--;
        return this.#array[this.#headIndex];
    }

    clear() {
        this.#count = 0;
        this.#tailIndex = 0;
        this.#headIndex = this.#bound;
        return this;
    }

    get count() {
        return this.#count;
    }

    get empty() {
        return this.#count === 0;
    }

    get full() {
        return this.#count === this.#size;
    }

    get front() {
        if (this.#count === 0) return null;
        let index = this.#headIndex + 1;
        if (index === this.#size) index = 0;
        return this.#array[index];
    }

    get back() {
        if (this.#count === 0) return null;
        let index = this.#tailIndex - 1;
        if (index < 0) index = this.#bound;
        return this.#array[index];
    }
}