import * as THREE from 'three';
import WallTile from "./tiles/WallTile.js";
import GroundTile from "./tiles/GroundTile.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let wall_tile = new WallTile(0.0);
const geometry = wall_tile.build_geometry(0.0);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const wall = new THREE.Mesh( geometry, material );
scene.add( wall );

wall.rotation.x = -Math.PI/4;


camera.position.z = 5;