const Datapack = require('./datapack')
const Selector = require('./selector')


const test = new Datapack('testpack', {
    "pack": {
        "pack_format": 5,
        "description": "The default data for Minecraft"
    }
})

const testNS = test.createNameSpace('testNS')
testNS.createFunction('testfunc', (mcFunc) => {
    target = new Selector('e', {
        tag: 'asdf'
    })
    mcFunc.gamemode(target, 'creative')
})