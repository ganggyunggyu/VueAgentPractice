import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.container = document.querySelector('.webgl-container');
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = this.container.clientWidth;
            this.height = this.container.clientHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }

    resize() {
        console.log('resize')
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        this.trigger('resize')

    }
}