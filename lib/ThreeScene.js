/*
 * Author: Graham Atlee
 * Date created: 5/8/2020
 *
 * Three.js scene object. All the boilerplate code to get a generic
 * three.js scene up and running has been abstracted into methods inside
 * of this class.
 * Instantiating the ThreeScene object will automatically create the entire
 * scene. There is no need to call individual methods outside of this class. 
*/
const StereoRender = require('./StereoRender')

class ThreeScene {

    //build the entire scene
    constructor(){
        this.canvas = document.querySelector('#c');
        this.renderer = this.buildRenderer(this.canvas); 
        this.camera = this.buildCamera();  
        this.scene =this.buildScene();
        this.buildGeneralLighting(); 

        this.effect = new StereoRender(this.renderer);
    }

    buildRenderer(canvas){
        let renderer = new THREE.WebGLRenderer({canvas, antialias:true});
        return renderer; 
    }

    buildScene(){
        let scene = new THREE.Scene();
        return scene; 
    }

    //this can be adjusted if needed but these values have worked sufficiently
    buildCamera(){
        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.001;
        const far = 50;
        let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        return camera; 
    }

    buildGeneralLighting(){
        this.buildAmbientLight();
        this.buildDirectionalLight();
    }

    buildAmbientLight(){
        /*maybe: add params to adjust values*/
        var ambLight = new THREE.AmbientLight( 0xffffff , 0.5);
        this.scene.add(ambLight);
    }

    buildDirectionalLight(){
        const color = 0xFFFFFF;
        const intensity = 0.5;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);
    }

    //call this function if you need to quickly create a 3d object
    makeInstance = function(geometry, color, x, y, z) {
        const material = new THREE.MeshPhongMaterial({color, flatShading: true});
        const object3d = new THREE.Mesh(geometry, material);
        object3d.position.set(x,y,z);
        this.scene.add(object3d);

        return object3d;
      } 

    resizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          this.renderer.setSize(width, height, false);
        }
        return needResize;
      } 

   
} //end of ThreeScene

module.exports = ThreeScene; 