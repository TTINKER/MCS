const effects = new Set([
    'speed',
    'slowness',
    'haste',
    'mining_fatigue',
    'strength',
    'weakness',
    'instant_health',
    'instant_damage',
    'jump_boost',
    'nausea',
    'conduit_power',
    'regeneration',
    'resistance',
    'fire_resistance',
    'water_breathing',
    'invisibility',
    'blindness',
    'night_vision',
    'hunger',
    'poison',
    'wither',
    'health_boost',
    'absorption',
    'saturation',
    'glowing',
    'levitation',
    'slow_falling',
    'luck',
    'unluck',
    'dolphins_grace',
    'bad_omen',
])

const ComSet112 = new Map()

function isVaildEffect(effect) {
    if (!effects.has(effect)) {
        return `\x1b[31mWarning!\x1b[0m : ${effect} is not an vaild effect`
    }
    return false
}

ComSet112.set('gamemode', (target, gamemode) => {
    let err = false
    if (!target.isPlayer()) err = `\x1b[31mWarning!\x1b[0m : 'gamemode' is only target players, but your target seletcor ${target.type} can include non-player target.`
    return [`gamemode ${gamemode} ${target.toString()}\n`, err]
})

ComSet112.set('effect_give', (target, effect, time = 30, amplifier = 1, hideParticles = false) => {
    return [`effect give ${target.toString()} ${effect} ${time} ${amplifier} ${hideParticles}\n`, isVaildEffect(effect)]
})

ComSet112.set('effect_clear', (target, effect = '') => {
    return [`effect clear ${target.toString()} ${effect}\n`, isVaildEffect(effect)]
})

ComSet112.set('weather', (weather, time = 10000) => {
    let err = false
    if (weather !== 'clear' && weather !== 'rain' && weather !== ' thunder') err = `\x1b[31mWarning!\x1b[0m : ${weather} is not an vaild weather`
    return [`weather ${weather} ${time}\n`, err]
})

module.exports = ComSet112