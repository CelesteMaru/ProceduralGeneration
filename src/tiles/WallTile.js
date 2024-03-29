import * as THREE from 'three';
import Tile from "./Tile.js";

class WallTile extends Tile{
    constructor(rotation) {
        super(rotation);
    }

    build_geometry(position) {
        const geometry = new THREE.BufferGeometry();

        const wall_start = 0.45;
        const wall_end = 0.55; 

        const vertices = new Float32Array( [
            position[0], position[1],  position[2], // v0
            position[0] + 1.0, position[1] ,  position[2], // v1
            position[0] , position[1] + wall_start , position[2], // v2
            position[0] + 1.0, position[1] + wall_start, position[2], // v3
            position[0] , position[1] + wall_start , position[2] + 1, // v4
            position[0] + 1.0, position[1] + wall_start, position[2] + 1, // v5
            position[0] , position[1] + wall_end , position[2] + 1, // v6
            position[0] + 1.0 , position[1] + wall_end, position[2] + 1, // 7
            position[0] , position[1] + wall_end, position[2], // 8
            position[0] + 1.0, position[1] + wall_end, position[2], // 9
            position[0] , position[1] + 1.0,  position[2], //10
            position[0] + 1.0,  position[1] +1.0,  position[2], //11

        ] );

        const indices = [
            0, 1, 2,
            1, 3, 2,
            2, 3, 5,
            5, 4, 2,
            4, 5, 6,
            7, 6, 5,
            6, 7, 9,
            9, 8, 6,
            8, 9, 11,
            11, 10, 8
        ];

        geometry.setIndex( indices );
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ));
        return geometry;
    }
}

export default WallTile;