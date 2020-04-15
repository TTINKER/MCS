const Datapack = require('./datapack')
const Selector = require('./selector')
const ComSet112 = require('./ComSet112')


const test = new Datapack('testpack', ComSet112, {
    "pack": {
        "pack_format": 5,
        "description": "The default data for Minecraft"
    }
})

const herobrine = test.createNameSpace('herobrine')
herobrine.createFunction('testfunc', (mcFunc) => {
    target = new Selector('e', {
        tag: 'cutecat'
    })
    mcFunc.gamemode(target, 'creative')
    mcFunc.effect_give(target, 'unluck')
    mcFunc.effect_give(target, 'pancake')
    mcFunc.effect_clear(target)
    mcFunc.effect_clear(target, 'unluck')
})