import Phaser from 'phaser'

var windowWidth = 480;
var windowHeight = 270;

export default class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'Boot',
            pack: {
                files: [{
                    key: 'loading',
                    type: 'spritesheet',
                    url: 'src/assets/loading.png',
                    frameConfig: {
                        frameWidth: 84, 
                        frameHeight: 12
                    }
                }, 
                {
                    type: 'image',
                    key: 'logo',
                    url: 'src/assets/logo.png'
                }]
            }
        });
    }

    preload ()
    {
        const loadingMessage = this.add.sprite(windowWidth/2, windowHeight/2, 'loading');
        this.anims.create({
            key: 'loading',
            frames: this.anims.generateFrameNumbers('loading'),
            frameRate: 5,
            repeat: -1,
        });

        loadingMessage.anims.play('loading', true);

        this.load.on('complete', function(file) {
            loadingMessage.destroy();
        });

        this.load.spritesheet('player', 'src/assets/player1.png', { frameWidth: 42, frameHeight: 76 }); 
        this.load.image('sky', 'src/assets/sky.png');
        this.load.image('cloudsLarge', 'src/assets/cloudsLarge.png');
        this.load.image('cloudsMedium', 'src/assets/cloudsMedium.png');
        this.load.image('cloudsSmall', 'src/assets/cloudsSmall.png');
        this.load.image('logo', 'src/assets/logo.png' )

        this.load.tilemapTiledJSON('map', 'src/assets/testmap.json');
        this.load.image('grasstiles', 'src/assets/grasstileset.png');
        this.load.spritesheet('records', 'src/assets/records.png', { frameWidth: 19, frameHeight: 12, startFrame: 0, endFrame: 9});
        this.load.spritesheet('decor', 'src/assets/decor.png', { frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.image('walls', 'src/assets/wall.png');

        this.load.image('inventoryIcon', 'src/assets/inventoryIcon.png');
        this.load.spritesheet('buttons', 'src/assets/buttons.png', { frameWidth: 25, frameHeight: 25, startFrame: 0, endFrame: 1});
        this.load.atlas('musicNotes', 'src/assets/musicNotes.png', 'src/assets/musicNotes.json');

        // this.load.spritesheet('enemies', 'src/assets/star.png', { frameWidth: 24, frameHeight: 22, startFrame: 0, endFrame: 0 });
        this.load.image('enemies', 'src/assets/star.png');

        this.load.audio('happyBirthday', ['src/assets/happyBirthday.mp3']);
        this.load.audio('blue', ['src/assets/happyBirthday.mp3']);
    }
      
    create ()
    {
        this.add.sprite(windowWidth/2, windowHeight/2, 'sky');
        var emosity = this.add.sprite(windowWidth/2, windowHeight/2, 'logo');

        this.tweens.add({
            targets: emosity,
            alpha: { from: 0.1, to: 1},
            duration: 1500,
        });

        this.input.on('pointerdown', function() {
            this.scene.start('Game');
        }, this);
    }
}
