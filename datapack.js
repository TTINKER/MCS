const fs = require("fs")

class Datapack {
    constructor(packname, commandSet, mcmeta) {
        this.packname = packname
        this.mcmeta = mcmeta
        this.commandSet = commandSet
        fs.existsSync(`./${this.packname}/`) && fs.rmdirSync(`./${this.packname}/`, {
            recursive: true
        })
        fs.mkdirSync(`./${this.packname}/`)
        fs.mkdirSync(`./${this.packname}/data/`)
        fs.writeFile(`./${this.packname}/pack.mcmeta`, JSON.stringify(mcmeta), err => console.log(mcmeta))
    }
    createNameSpace(nameSpace) {
        fs.mkdirSync(`./${this.packname}/data/${nameSpace}`)
        for (let i of ['advancements', 'functions', 'loot_tables', 'predicates', 'recipes', 'structures', 'tags']) {
            fs.mkdirSync(`./${this.packname}/data/${nameSpace}/${i}`)
        }
        return {
            createFunction: this.createFunction.bind(this, nameSpace),
            name: nameSpace,
        }
    }
    createFunction(nameSpace, funcName, callback) {
        const dir = `./${this.packname}/data/${nameSpace}/functions/${funcName}.mcfunction`
        const writer = str => {
            console.log(`${dir} : ${str}`)
            fs.appendFile(dir, str, err => console.log(err))
        }
        fs.writeFile(dir, '', err => console.log(dir))
        callback(new mcFunc(this.packname, writer, nameSpace, funcName, this.commandSet))
        return `${nameSpace}:${funcName}`
    }
}

class mcFunc {
    constructor(packname, writer, nameSpace, funcName, commandSet) {
        this.packname = packname
        this.writer = writer
        this.nameSpace = nameSpace
        this.funcName = funcName
        commandSet.forEach((value, key, map) => {
            this[key] = function (...args) {
                writer(value /*.bind(this)*/(...args))
            }
        })
    }
}

module.exports = Datapack