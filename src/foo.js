export default class Foo extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `foo: ${this.innerHTML}`
    }
}
