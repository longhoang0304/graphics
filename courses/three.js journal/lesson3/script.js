// check if THREE is loaded
// console.log(THREE)

// we need 4 elements to get started

// 1. a scene
// a scene is like a container
// put objects, light, models, etc in it
// create scene
const scene = new THREE.Scene();

// 2. objects
// to create an object, we need a mesh
// a mesh is a combination of a geometry (the shape) and a material (how it looks)
// create a geometry with size of 1x1x1
const geometry = new THREE.BoxGeometry(1, 1, 1);
// add material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// create the mesh
const mesh = new THREE.Mesh(geometry, material);
// add the cube to the scene
// the cube is not display here because the camera is not setup
scene.add(mesh);

// 3. a camera
// you can have multiple cameras and switch between them
// 3 type of cameras. but we will use PerspectiveCamera at this point
// PerspectiveCamera works like a human eye. Object far -> small, close -> bigger
const viewportSizes = {
    width: 800,
    height: 600,
}
const fieldOfView = 75; // vertical vision angel, in degree unit, also called fov
const aspectRatio = viewportSizes.width / viewportSizes.height;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio);

camera.position.z = 3;
camera.position.x = 2;

scene.add(camera);

// 4. a render
// this part will help you to render what you have setup above
const canvas = document.getElementById("webgl");
const renderer = new THREE.WebGLRenderer({
    canvas,
});
renderer.setSize(viewportSizes.width, viewportSizes.height);
// you should see a black rectangle
// because we are inside the cube
renderer.render(scene, camera);

// to fix that, we have to move the camera back a little bit
// to move/transform object, we can use the following properties
// position(x, y, z), rotation, scale
// three.js consider z axis is forward/backward axis