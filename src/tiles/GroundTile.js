import * as THREE from 'three';
import Tile from "./Tile.js";

class GroundTile extends Tile{
    constructor(rotation) {
        super(0);
    }

    build_geometry(position) {
        const geometry = new THREE.BufferGeometry();

        const vertices = new Float32Array( [
            position, position,  position, // v0
            1.0 + position, position,  position, // v1
            1.0 + position,  1.0 + position,  position, // v2
            position,  1.0 + position,  position, // v3
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

