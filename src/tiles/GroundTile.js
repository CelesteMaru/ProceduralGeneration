import * as THREE from 'three';
import Tile from "./Tile.js";

class GroundTile extends Tile{
    constructor(rotation) {
        super(0);
    }

    build_geometry(position) {
        const geometry = new THREE.BufferGeometry();

        const vertices = new Float32Array( [
            position[0], position[1],  position[2], // v0
            1.0 + position[0], position[1],  position[2], // v1
            1.0 + position[0],  1.0 + position[1],  position[2], // v2
            position[0],  1.0 + position[1],  position[2], // v3
        ] );

        const indices = [
            0, 1, 2,
            2, 3, 0,
        ];

        geometry.setIndex( indices );
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ));
        return geometry;
    }
}

export default GroundTile;

