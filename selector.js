class Selector {
    constructor(type, conditions) {
        this.type = type
        if (conditions instanceof Map) {
            this.conditions = conditions
        } else if (conditions) {
            this.conditions = new Map(Object.entries(conditions))
        } else {
            this.conditions = new Map()
        }
        console.log('Selector constructed : ' + this.toString())
    }

    toString() {
        let conStr = []
        for (const [key, value] of this.conditions) {
            conStr.push(`${key}=${value}`)
        }
        return `@${this.type}[${conStr.toString()}]`
    }

    isPlayer() {
        return this.type === 'p' || this.type === 'r' || this.type === 'a'
    }
}

module.exports = Selector