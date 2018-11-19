/* Set up */
const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')

/* Resize */
const sizes = {width: 800, height: 600}

const resize = () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    $canvas.width = sizes.width
    $canvas.height = sizes.height
}

window.addEventListener('resize', resize)
resize()

/* Cursor */
const cursor = {x: 0, y: 0, down: false}

window.addEventListener('mousemove', (_event) =>
{
    cursor.x =_event.clientX
    cursor.y =_event.clientY
})
window.addEventListener('mousedown',() =>
{
    cursor.down = true
})
window.addEventListener('mouseup',() =>
{
    cursor.down = false
})
/* Particules */
let particles = []
/* Animation */
const loop = ()=>
{
    window.requestAnimationFrame(loop)
    // Particles
    if(cursor.down)
    {
        const particle = new Particle(cursor.x, cursor.y, context, sizes)
        particles.push(particle)
    }
    
     // Clear
     context.fillStyle = '#222222'
     context.fillRect(0, 0, sizes.width, sizes.height)
    
     //draw particles
     for(const _particle of particles)
     {
         _particle.draw()
     }
     particles = particles.filter((_particle)=>
    {
        return !_particle.isOut
    })
}
loop()
