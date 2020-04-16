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
        console.log(`\x1b[31mWarning!\x1b[0m : ${effect} is not an vaild effect`)
        return false
    }
    return true
}

ComSet112.set('gamemode', (target, gamemode) => {
    if (!target.isPlayer()) console.log(`\x1b[31mWarning!\x1b[0m : 'gamemode' is only target players, but your target seletcor ${target.type} can include non-player target.`)
    return `gamemode ${gamemode} ${target.toString()}\n`
})

ComSet112.set('effect_give', (target, effect, time = 30, amplifier = 1, hideParticles = false) => {
    isVaildEffect(effect)
    return `effect give ${target.toString()} ${effect} ${time} ${amplifier} ${hideParticles}\n`
})

ComSet112.set('effect_clear', (target, effect = '') => {
    if (effect !== '') isVaildEffect(effect)
    return `effect clear ${target.toString()} ${effect}\n`
})

ComSet112.set('weather', (weather, time = 10000) => {
    if (weather !== 'clear' && weather !== 'rain' && weather !== ' thunder') console.log(`\x1b[31mWarning!\x1b[0m : ${weather} is not an vaild weather`)
    return `weather ${weather} ${time}\n`
})

module.exports = ComSet112