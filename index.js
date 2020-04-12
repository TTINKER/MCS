const fs = require("fs")
const path = require("path")
const Selector = require("./selector")

function mkdirSafe(dir) {
    fs.existsSync(dir) || fs.mkdirSync(dir)
}

class Datapack {
    constructor(packname, mcmeta) {
        this.packname = packname
        this.mcmeta = mcmeta
        mkdirSafe(`./${this.packname}/`)
        mkdirSafe(`./${this.packname}/data/`)
        fs.writeFileSync(`./${this.packname}/pack.mcmeta`, JSON.stringify(mcmeta))
    }
    createNameSpace(nameSpace) {
        mkdirSafe(`./${this.packname}/data/${nameSpace}`)
        for (let i of ['advancements', 'functions', 'loot_tables', 'predicates', 'recipes', 'structures', 'tags']) {
            mkdirSafe(`./${this.packname}/data/${nameSpace}/${i}`)
        }
        return this
    }
    createFunction(nameSpace, funcName, callback) {}
}

class mcFunc {
    constructor(packname, nameSpace, funcName) {

    }
}

const test = new Datapack('testpack', {
    "pack": {
        "pack_format": 5,
        "description": "The default data for Minecraft"
    }
})

test.createNameSpace('testNS')