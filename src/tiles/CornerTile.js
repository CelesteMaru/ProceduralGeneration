import * as THREE from 'three';
import Tile from "./Tile.js";

class CornerTile extends Tile{
    constructor(rotation) {
        super(rotation);
    }

    build_geometry(position) {
        const geometry = new THREE.BufferGeometry();

        const wall_start = 0.45;
        const wall_end = 0.55; 

        const vertices = new Float32Array( [
            position[0], position[1],  position[2], // v0 top left
            position[0] + 1.0, position[1] ,  position[2], // v1 top right
            position[0] , position[1] + 1.0,  position[2], //v2 bottom left
            position[0] + 1.0,  position[1] + 1.0,  position[2], //v3 bottom right
            position[0] , position[1] + wall_start , position[2], // v4 
            position[0] , position[1] + wall_start , position[2] + 1.0, // v5 Wall first point 
            position[0] + wall_end , position[1] + wall_start , position[2], // v6 
            position[0] + wall_end , position[1] + wall_start , position[2] + 1.0, // v7 Wall outer corner 
            position[0] , position[1] + wall_end , position[2], // v8 
            position[0] , position[1] + wall_end , position[2] + 1.0, // v9 Wall second point 
            position[0] + wall_start, position[1] + wall_end , position[2], // v10 
            position[0] + wall_start, position[1] + wall_end , position[2] + 1.0, // v11 Wall inner corner 
            position[0] + wall_start , position[1] + 1.0 , position[2], // v12 
            position[0] + wall_start, position[1] + 1.0 , position[2] + 1.0, // v13 Wall second point 
            position[0] + wall_end , position[1] + 1.0 , position[2], // v14 
            position[0] + wall_end, position[1] + 1.0 , position[2] + 1.0, // v15 Wall second point 
        ] );

        const indices = [
            0,1,4,
            4,1,6,
            1,3,6,
            6,3,14,
            2,8,10,
            10,12,2,
            5,4,6,
            5,6,7,
            7,6,14,
            7,14,15,
            5,7,9,
            9,7,11,
            11,7,13,
            13,7,15,
            8,9,10,
            10,9,11,
            10,11,12,
            12,11,13,
        ];

        geometry.setIndex( indices );
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ));
        return geometry;
    }
}

export default CornerTile;