import Matter from 'matter-js'

export const engine = Matter.Engine.create()
engine.gravity = { x: 0, y: 0, scale: 1 }
export const runner = Matter.Runner.create()
