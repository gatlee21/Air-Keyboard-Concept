
const ThreeScene = require('./lib/ThreeScene')


function main() {
    
    const three = new ThreeScene();

    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var eggPointer = new THREE.Mesh( geometry, material );
    eggPointer.position.set(0,0,-15)
    three.scene.add(eggPointer);



    function liveRender() {

        //If canvas changes resize it
        if (three.resizeRendererToDisplaySize()) {
          const canvas = three.renderer.domElement;
          three.camera.aspect = canvas.clientWidth / canvas.clientHeight / 2;
          three.camera.updateProjectionMatrix();
        }
        
    
        requestAnimationFrame(liveRender);
    
        //tween allows for smooth animations
        // TWEEN.update();
    
    
      }
      // end of render
    
      requestAnimationFrame(liveRender);

}

main();