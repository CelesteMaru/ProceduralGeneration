import * as THREE from 'three';
import WallTile from "./tiles/WallTile.js";
import GroundTile from "./tiles/GroundTile.js";
import CornerTiLeTile from "./tiles/CornerTile.js";
import CornerTile from './tiles/CornerTile.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Choose an appropriate shadow map type
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let wall_tile = new WallTile(-1);
let geometry = wall_tile.build_geometry([0,0,0]);
geometry.computeVertexNormals();
const material = new THREE.MeshStandardMaterial({ color: 0xe4e4e4});
const wall = new THREE.Mesh( geometry, material );

scene.add( wall );

let corner_tile = new CornerTile(-1);
geometry = corner_tile.build_geometry([1,0,0]);
geometry.computeVertexNormals();

const corner = new THREE.Mesh( geometry, material );
scene.add( corner );

let ground_tile = new GroundTile(-1);
geometry = wall_tile.build_geometry([1,-2,0]);
geometry.computeVertexNormals();
const ground = new THREE.Mesh( geometry, material );

ground.rotation.z=(Math.PI/2)
scene.add( ground );


const directional_light = new THREE.DirectionalLight( 0xffffff, 5 );
directional_light.position.set(0, 1, 1);
scene.add( directional_light);

const helper = new THREE.DirectionalLightHelper( directional_light, 3 );
scene.add( helper );



camera.position.z = 5;
renderer.render( scene, camera );