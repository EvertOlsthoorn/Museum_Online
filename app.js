// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.6, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// [10:57] Evert Olsthoorn
const cuberoom = new Model('../assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-0.115, 0.0, -6.459);
cuberoom.setScale(0.903, 0.838, 0.933);
cuberoom.setRotation(0, 3.381, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0.5, -5);

// create some text
const testText = new Text('Lisser Art Museum');
testText.setPosition(-6, 5, 0);
testText.setFontsize(10);

// create an image
const image = new XRImage('assets/images/Lisse-049.jpg');
image.setPosition(-1.48819, 2.45839, -5);

// create an second image
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(3, 3, -9);

// create an third image
const image3 = new XRImage('assets/images/sampleimage.jpg');
image3.setPosition(-1, 3, -9);

// create an fourth image
const image4 = new XRImage('assets/images/Lisse-051.jpg');
image4.setPosition(-1.5, 1, -4);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

//spotlight
const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));