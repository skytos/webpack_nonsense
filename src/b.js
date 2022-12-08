import A from './a'

export default class B extends A {
    constructor() {
        super()
        this.y = this.x.substring(3)
    }
}
