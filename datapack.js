const fs = require("fs")

class Datapack {
    constructor(packname, mcmeta) {
        this.packname = packname
        this.mcmeta = mcmeta
        this.mkdirSafe(`./${this.packname}/`)
        this.mkdirSafe(`./${this.packname}/data/`)
        fs.writeFile(`./${this.packname}/pack.mcmeta`, JSON.stringify(mcmeta), err => console.log(mcmeta))
    }
    createNameSpace(nameSpace) {
        this.mkdirSafe(`./${this.packname}/data/${nameSpace}`)
        for (let i of ['advancements', 'functions', 'loot_tables', 'predicates', 'recipes', 'structures', 'tags']) {
            this.mkdirSafe(`./${this.packname}/data/${nameSpace}/${i}`)
        }
        return {
            createFunction: this.createFunction.bind(this, nameSpace),
            name: nameSpace,
        }
    }
    createFunction(nameSpace, funcName, callback) {
        const writer = str => {
            const dir = `./${this.packname}/data/${nameSpace}/functions/${funcName}.mcfunction`
            fs.writeFile(dir, str, err => console.log(`${dir} : ${str}`))
        }
        callback(new mcFunc(this.packname, writer, nameSpace, funcName))
        return `${nameSpace}:${funcName}`
    }
    mkdirSafe(dir) {
        fs.existsSync(dir) || fs.mkdirSync(dir)
    }
}

class mcFunc {
    constructor(packname, writer, nameSpace, funcName) {
        this.packname = packname
        this.writer = writer
        this.nameSpace = nameSpace
        this.funcName = funcName
    }
    gamemode(target, gamemode) {
        this.writer(`gamemode ${gamemode} ${target.toString()}\n`)
    }
}

module.exports = Datapack