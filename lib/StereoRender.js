/*
 * Author: Graham Atlee
 * Date created: 4/12/2020
 *
 * This file performs the actions necessary to get stereo rendering
 * working on the Triton.
 */

THREE.StereoRender = function ( renderer ){

    const stereo = new THREE.StereoCamera();
    let updatedIpd;
    

    this.setInitialIPD = function(initIpd){
        stereo.eyeSep = initIpd;
    }

    this.getIPD = function(){
        const ipd = stereo.eyeSep;
        return ipd;
    }

    this.updateIPD = function(){
        updatedIpd = localStorage.getItem('ipd');
        stereo.eyeSep = parseFloat(updatedIpd);
    }

    this.renderStereoStuff = function(scene, camera){

    
        camera.updateWorldMatrix();
        stereo.update(camera);
    
        const size = new THREE.Vector2();
        renderer.getSize(size);
    
        renderer.setScissorTest(true);
    
        renderer.setScissor(0, 0, size.width / 2, size.height);
        renderer.setViewport(0, 0, size.width / 2, size.height);
        renderer.render(scene, stereo.cameraL);
    
        renderer.setScissor(size.width / 2, 0, size.width / 2, size.height);
        renderer.setViewport(size.width / 2, 0, size.width / 2, size.height);
        renderer.render(scene, stereo.cameraR);
    
        renderer.setScissorTest(false);
    
      };

};
//end of StereoRender

module.exports = THREE.StereoRender;