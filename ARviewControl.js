
const InitLeap = require('./lib/InitLeap')
const ThreeScene = require('./lib/ThreeScene')
const TWEEN = require('@tweenjs/tween.js');
const SpriteText = require('three-spritetext');

const keyModel = require('./keyboard.json')

function main() {
    
    const three = new ThreeScene();

    const leap = InitLeap(three.scene, three.camera)
  

    const loader = new THREE.ObjectLoader();
    const keyboard = loader.parse(keyModel)
    three.scene.add(keyboard)
    console.log(keyboard.children)

    const YELLOW = 0xA0A0A0
    const geometry = new THREE.RingGeometry( 0.010, 0.012, 32 );
    const material = new THREE.MeshBasicMaterial( { color: YELLOW, side: THREE.DoubleSide } );
    const cursor = new THREE.Mesh( geometry, material );
    three.scene.add(cursor);




    const Q = keyboard.children[0]
    // const label_Q = new SpriteText('Q');
    // label_Q.textHeight=0.0065
    // label_Q.position.set(0,0,-0.1)
    // three.scene.add(label_Q)
    // keyboard.add(label_Q)
    // label_Q.position.set(0,0.041,0.1)
    const D = keyboard.children[1]
    const O = keyboard.children[2]
    const E = keyboard.children[3]
    const H = keyboard.children[4]
    const Y = keyboard.children[5]
    const U = keyboard.children[6]
    const N = keyboard.children[7]
    const I = keyboard.children[8]
    const T = keyboard.children[9]
    const V = keyboard.children[10]
    const W = keyboard.children[11]
    const F = keyboard.children[12]
    const S = keyboard.children[13]
    const R = keyboard.children[14]
    const B = keyboard.children[15]
    const K = keyboard.children[16]
    const A = keyboard.children[17]
    const L = keyboard.children[18]
    const J = keyboard.children[19]
    const X = keyboard.children[20]
    const C = keyboard.children[21]
    const M = keyboard.children[22]
    const P = keyboard.children[23]
    const question = keyboard.children[24]
    const Z = keyboard.children[25]
    const period = keyboard.children[26]
    const at = keyboard.children[27]
    const G = keyboard.children[28]
    const Tab = keyboard.children[29]
    const Del = keyboard.children[30]
    const Back = keyboard.children[31]
    const Enter = keyboard.children[32]
    const Space = keyboard.children[33]

    leap.loopController.on('frame', function leapFrame(frame){
        
        frame.hands.forEach(hand => {
              // console.log("label_Q: ", label_Q.getWorldPosition())
              // console.log("Q: ",Q.getWorldPosition())
              // label_Q.position.set(0,0,0.1)
              //get palm position and palm vector
              let palmPos = hand.palmPosition;
              let palmNorm = hand.palmNormal;
              if(palmNorm[2] < 0 && hand.type == "left"){
                // tween animation shrink
                const t = new TWEEN.Tween(keyboard.scale)
                .to({x:0, y:0, z:0}, 5)
                t.start();
                keyboard.position.copy(toVector3(palmPos));
              }
              else if(palmNorm[2] > 0 && hand.type == "left"){
                keyboard.position.copy(toVector3(palmPos, 0.1, 0, 0.03));
                // tween animation enlarge
                const g = new TWEEN.Tween(keyboard.scale)
                .to({x: 0.01, y: 0.01, z: 0.01}, 200).easing(TWEEN.Easing.Elastic.Out)
                g.start();
              }

              if(hand.type=="right"){
                const indexFingerPos = hand.pointables[1].tipPosition
                cursor.position.copy(toVector3(indexFingerPos))

                if(Q.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Q.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(D.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  D.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(O.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  O.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(E.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  E.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(H.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  H.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Y.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Y.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(U.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  U.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(N.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  N.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(I.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  I.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(T.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  T.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(V.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  V.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(W.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  W.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(F.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  F.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(S.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  S.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(R.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  R.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(B.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  B.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(K.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  K.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(A.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  A.scale.set(1.2,1.2,1.2)
                }
                else if(L.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  L.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(J.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  J.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(X.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  X.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(C.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  C.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(M.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  M.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(P.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  P.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(question.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  question.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Z.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Z.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(period.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  period.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(at.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  at.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(G.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  G.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Tab.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Tab.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Del.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Del.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Back.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Back.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Enter.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Enter.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else if(Space.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < 0.025){
                  Space.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(0xffffff)
                }
                else{
                  cursor.material.color.setHex(YELLOW)
                  Q.scale.set(1,1,1)
                  D.scale.set(1,1,1)
                  O.scale.set(1,1,1)
                  E.scale.set(1,1,1)
                  H.scale.set(1,1,1)
                  Y.scale.set(1,1,1)
                  U.scale.set(1,1,1)
                  N.scale.set(1,1,1)
                  I.scale.set(1,1,1)
                  T.scale.set(1,1,1)
                  V.scale.set(1,1,1)
                  W.scale.set(1,1,1)
                  F.scale.set(1,1,1)
                  S.scale.set(1,1,1)
                  R.scale.set(1,1,1)
                  B.scale.set(1,1,1)
                  K.scale.set(1,1,1)
                  A.scale.set(1,1,1)
                  L.scale.set(1,1,1)
                  J.scale.set(1,1,1)
                  X.scale.set(1,1,1)
                  C.scale.set(1,1,1)
                  M.scale.set(1,1,1)
                  P.scale.set(1,1,1)
                  question.scale.set(1,1,1)
                  Z.scale.set(1,1,1)
                  period.scale.set(1,1,1)
                  at.scale.set(1,1,1)
                  G.scale.set(1,1,1)
                  Tab.scale.set(1,1,1)
                  Del.scale.set(1,1,1)
                  Back.scale.set(1,1,1)
                  Enter.scale.set(1,1,1)

                }

                
                

              } //end of if right

             
        })
        
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
    
        
        //tween allows for smooth animations
        TWEEN.update();
    
    
      }
      // end of render
    
      requestAnimationFrame(liveRender);

}

function toVector3(array, offset_x=0,offset_y=0, offset_z=0){
  var a = new THREE.Vector3( 0, 0, 0 );
  let x = parseFloat(array[0]);
  let y = parseFloat(array[1]);
  let z = parseFloat(array[2]); 

  a.x = x + offset_x;
  a.y = y + offset_y;
  a.z = z + offset_z;

  return a;
}


function attachToPalm(hand){

}

    // //create the pointer 
    // var ConeGeometry = new THREE.ConeGeometry( 0.005, 0.015, 32 );
    // var coneColor = new THREE.MeshPhongMaterial( {color: 0xffff00} );
    // var eggPointer = new THREE.Mesh( ConeGeometry, coneColor );
    // eggPointer.position.set(0,0,-0.5)
    // eggPointer.rotation.x = -1
    // eggPointer.rotation.y = 1
    // three.scene.add(eggPointer)

 // //attach pointer between index and thumb
            // let indexFingerPos = hand.fingers[1].dipPosition;
            // let thumbPos = hand.fingers[0].dipPosition;
            // let midpoint = new THREE.Vector3();
            // midpoint.add(toVector3(thumbPos));
            // midpoint.add(toVector3(indexFingerPos));
            // midpoint.multiplyScalar(0.5);
            // eggPointer.position.copy(midpoint)

main();