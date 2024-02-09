import * as THREE from 'three';
import Tile from "./Tile.js";

class WallTine extends Tile{
    constructor(rotation) {
        super(rotation);
    }

    build_geometry(position) {
        const geometry = new THREE.BufferGeometry();

        const wall_start = 0.45;
        const wall_end = 0.55; 

        const vertices = new Float32Array( [
            position, position,  position, // v0
            position + 1.0, position ,  position, // v1
            position , position + wall_start , position, // v2
            position + 1.0, position + wall_start, position, // v3
            position , position + wall_start , position + 1, // v4
            position + 1.0, position + wall_start, position + 1, // v5
            position , position + wall_end , position + 1, // v6
            position + 1.0 , position + wall_end, position + 1, // 7
            position , position + wall_end, position, // 8
            position + 1.0, position + wall_end, position, // 9
            position , position + 1.0,  position, //10
            position + 1.0,  position +1.0,  position, //11

        ] );

        const indices = [
            0, 1, 3,
            3, 2, 0,
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

export default WallTine;