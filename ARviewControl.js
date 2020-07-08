
const InitLeap = require('./lib/InitLeap')
const ThreeScene = require('./lib/ThreeScene')


function main() {
    
    const three = new ThreeScene();

    const leap = InitLeap(three.scene, three.camera)
    console.log("%c leap: ","color:orange; background:black",leap)
    
    leap.loopController.on('frame', function leapFrame(frame){
        console.log(frame)
    })


    function liveRender() {

        //If canvas changes resize it
        if (three.resizeRendererToDisplaySize()) {
          const canvas = three.renderer.domElement;
          three.camera.aspect = canvas.clientWidth / canvas.clientHeight / 2;
          three.camera.updateProjectionMatrix();
        }
        
        //stereo rendering
        three.effect.renderStereoStuff(three.scene, three.camera);
    
        requestAnimationFrame(liveRender);
    
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        //tween allows for smooth animations
        // TWEEN.update();
    
    
      }
      // end of render
    
      requestAnimationFrame(liveRender);

}

main();