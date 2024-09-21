import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'background').setAlpha(0.5);

        this.add.text(512, 384, 'Make something fun!!!!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'JetBrainsMono', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
        // this.input.keyboard.on('keydown', (event) => {
        //     if (event.key === 'Left') {
        //         console.log('Left');
        //         this.scene.start('MainMenu');
        //     }
        //     else if (event.key === 'Right') {
        //         console.log('Right');
        //         this.scene.start('GameOver');
        //     }
        // })

        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            console.log('Left');
            this.scene.start('MainMenu');
        }
        else if (this.cursors.right.isDown)
        {
            console.log('Right');
            this.scene.start('GameOver');
        }
    }
}
