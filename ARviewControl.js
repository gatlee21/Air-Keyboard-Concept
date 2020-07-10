
const InitLeap = require('./lib/InitLeap')
const ThreeScene = require('./lib/ThreeScene')
const TWEEN = require('@tweenjs/tween.js');
const SpriteText = require('three-spritetext');
const { remote, ipcRenderer } = require ('electron');
const keyModel = require('./keyboard.json')

function main() {
    
    const three = new ThreeScene();

    const leap = InitLeap(three.scene, three.camera)

    let textWindow = remote.getGlobal("windows").TextWindow
    console.log("textWindow: ", textWindow)

    // textWindow.webContents.send('message', "Connected")
  

    const loader = new THREE.ObjectLoader();
    const keyboard = loader.parse(keyModel)
    three.scene.add(keyboard)
    console.log(keyboard.children)

    const YELLOW = 0xA0A0A0
    const geometry = new THREE.RingGeometry( 0.010, 0.012, 32 );
    const material = new THREE.MeshBasicMaterial( { color: YELLOW, side: THREE.DoubleSide } );
    const cursor = new THREE.Mesh( geometry, material );
    three.scene.add(cursor);


    const FONT_SIZE = 1.4

    const Q = keyboard.children[0]
    const label_Q = new SpriteText('Q');
    label_Q.textHeight=FONT_SIZE
    three.scene.add(label_Q)
    Q.add(label_Q)
    label_Q.position.set(0,0,0.95)

    const D = keyboard.children[1]
    const label_D = new SpriteText('D');
    label_D.textHeight=FONT_SIZE
    three.scene.add(label_D)
    D.add(label_D)
    label_D.position.set(0,0,0.95)


    const O = keyboard.children[2]
    const label_O = new SpriteText('O');
    label_O.textHeight=FONT_SIZE
    three.scene.add(label_O)
    O.add(label_O)
    label_O.position.set(0,0,0.95)

    const E = keyboard.children[3]
    const label_E = new SpriteText('E');
    label_E.textHeight=FONT_SIZE
    three.scene.add(label_E)
    E.add(label_E)
    label_E.position.set(0,0,1)

    const H = keyboard.children[4]
    const label_H = new SpriteText('H');
    label_H.textHeight=FONT_SIZE
    three.scene.add(label_H)
    H.add(label_H)
    label_H.position.set(0,0,1)

    const Y = keyboard.children[5]
    const label_Y = new SpriteText('Y');
    label_Y.textHeight=FONT_SIZE
    three.scene.add(label_Y)
    Y.add(label_Y)
    label_Y.position.set(0,0,1)

    const U = keyboard.children[6]
    const label_U = new SpriteText('U');
    label_U.textHeight=FONT_SIZE
    three.scene.add(label_U)
    U.add(label_U)
    label_U.position.set(0,0,1)

    const N = keyboard.children[7]
    const label_N = new SpriteText('N');
    label_N.textHeight=FONT_SIZE
    three.scene.add(label_N)
    N.add(label_N)
    label_N.position.set(0,0,1)

    const I = keyboard.children[8]
    const label_I = new SpriteText('I');
    label_I.textHeight=FONT_SIZE
    three.scene.add(label_I)
    I.add(label_I)
    label_I.position.set(0,0,1)

    const T = keyboard.children[9]
    const label_T = new SpriteText('T');
    label_T.textHeight=FONT_SIZE
    three.scene.add(label_T)
    T.add(label_T)
    label_T.position.set(0,0,1)

    const V = keyboard.children[10]
    const label_V = new SpriteText('V');
    label_V.textHeight=FONT_SIZE
    three.scene.add(label_V)
    V.add(label_V)
    label_V.position.set(0,0,1)

    const W = keyboard.children[11]
    const label_W = new SpriteText('W');
    label_W.textHeight=FONT_SIZE
    three.scene.add(label_W)
    W.add(label_W)
    label_W.position.set(0,0,1)

    const F = keyboard.children[12]
    const label_F = new SpriteText('F');
    label_F.textHeight=FONT_SIZE
    three.scene.add(label_F)
    F.add(label_F)
    label_F.position.set(0,0,1)

    const S = keyboard.children[13]
    const label_S = new SpriteText('S');
    label_S.textHeight=FONT_SIZE
    three.scene.add(label_S)
    S.add(label_S)
    label_S.position.set(0,0,1)

    const R = keyboard.children[14]
    const label_R = new SpriteText('R');
    label_R.textHeight=FONT_SIZE
    three.scene.add(label_R)
    R.add(label_R)
    label_R.position.set(0,0,1)

    const B = keyboard.children[15]
    const label_B = new SpriteText('B');
    label_B.textHeight=FONT_SIZE
    three.scene.add(label_B)
    B.add(label_B)
    label_B.position.set(0,0,1)

    const K = keyboard.children[16]
    const label_K = new SpriteText('K');
    label_K.textHeight=FONT_SIZE
    three.scene.add(label_K)
    K.add(label_K)
    label_K.position.set(0,0,1)

    const A = keyboard.children[17]
    const label_A = new SpriteText('A');
    label_A.textHeight=FONT_SIZE
    three.scene.add(label_A)
    A.add(label_A)
    label_A.position.set(0,0,1)

    const L = keyboard.children[18]
    const label_L = new SpriteText('L');
    label_L.textHeight=FONT_SIZE
    three.scene.add(label_L)
    L.add(label_L)
    label_L.position.set(0,0,1)

    const J = keyboard.children[19]
    const label_J = new SpriteText('J');
    label_J.textHeight=FONT_SIZE
    three.scene.add(label_J)
    J.add(label_J)
    label_J.position.set(0,0,1)

    const X = keyboard.children[20]
    const label_X = new SpriteText('X');
    label_X.textHeight=FONT_SIZE
    three.scene.add(label_X)
    X.add(label_X)
    label_X.position.set(0,0,1)

    const C = keyboard.children[21]
    const label_C = new SpriteText('C');
    label_C.textHeight=FONT_SIZE
    three.scene.add(label_C)
    C.add(label_C)
    label_C.position.set(0,0,0.95)

    const M = keyboard.children[22]
    const label_M = new SpriteText('M');
    label_M.textHeight=FONT_SIZE
    three.scene.add(label_M)
    M.add(label_M)
    label_M.position.set(0,0,1)

    const P = keyboard.children[23]
    const label_P = new SpriteText('P');
    label_P.textHeight=FONT_SIZE
    three.scene.add(label_P)
    P.add(label_P)
    label_P.position.set(0,0,1)

    const question = keyboard.children[24]
    const label_question = new SpriteText('?');
    label_question.textHeight=FONT_SIZE
    three.scene.add(label_question)
    question.add(label_question)
    label_question.position.set(0,0,1)

    const Z = keyboard.children[25]
    const label_Z = new SpriteText('Z');
    label_Z.textHeight=FONT_SIZE
    three.scene.add(label_Z)
    Z.add(label_Z)
    label_Z.position.set(0,0,1)

    const period = keyboard.children[26]
    const label_period = new SpriteText('.');
    label_period.textHeight=FONT_SIZE
    three.scene.add(label_period)
    period.add(label_period)
    label_period.position.set(0,0,1)

    const at = keyboard.children[27]
    const label_at = new SpriteText('@');
    label_at.textHeight=1.2
    three.scene.add(label_at)
    at.add(label_at)
    label_at.position.set(0,0,1)

    const G = keyboard.children[28]
    const label_G = new SpriteText('G');
    label_G.textHeight=FONT_SIZE
    three.scene.add(label_G)
    G.add(label_G)
    label_G.position.set(0,0,1)

    const Tab = keyboard.children[29]
    const label_Tab = new SpriteText('Tab');
    label_Tab.textHeight=0.8
    three.scene.add(label_Tab)
    Tab.add(label_Tab)
    label_Tab.position.set(0,0,1.2)

    const Del = keyboard.children[30]
    const label_Del = new SpriteText('Del');
    label_Del.textHeight=1
    three.scene.add(label_Del)
    Del.add(label_Del)
    label_Del.position.set(0,0,1.2)

    const Back = keyboard.children[31]
    const label_Back = new SpriteText('Back');
    label_Back.textHeight=0.8
    three.scene.add(label_Back)
    Back.add(label_Back)
    label_Back.position.set(0,0,1.2)

    const Enter = keyboard.children[32]
    const label_Enter = new SpriteText('Enter');
    label_Enter.textHeight=0.8
    three.scene.add(label_Enter)
    Enter.add(label_Enter)
    label_Enter.position.set(0,0,1.2)

    const Space = keyboard.children[33]
    const label_Space = new SpriteText('Space');
    label_Space.textHeight=0.8
    three.scene.add(label_Space)
    Space.add(label_Space)
    label_Space.position.set(0,0,1.2)

    const MIN_THRES = 0.018

    leap.loopController.on('frame', function leapFrame(frame){
        
        frame.hands.forEach(hand => {

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
                const GREEN = 0x000AA55
                const indexFingerPos = hand.pointables[1].tipPosition
                cursor.position.copy(toVector3(indexFingerPos))

                if(Q.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Q.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Q.name)
                }
                else if(D.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  D.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', D.name)
                }
                else if(O.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  O.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', O.name)
                }
                else if(E.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  E.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', E.name)
                }
                else if(H.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  H.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', H.name)
                }
                else if(Y.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Y.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Y.name)
                }
                else if(U.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  U.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', U.name)
                }
                else if(N.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  N.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', N.name)
                }
                else if(I.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  I.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', I.name)
                }
                else if(T.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  T.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', T.name)
                }
                else if(V.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  V.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', V.name)
                }
                else if(W.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  W.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', W.name)
                }
                else if(F.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  F.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', F.name)
                }
                else if(S.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  S.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', S.name)
                }
                else if(R.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  R.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', R.name)
                }
                else if(B.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  B.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', B.name)
                }
                else if(K.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  K.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', K.name)
                }
                else if(A.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  A.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', A.name)
                }
                else if(L.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  L.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', L.name)
                }
                else if(J.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  J.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', J.name)
                }
                else if(X.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  X.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', X.name)
                }
                else if(C.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  C.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', C.name)
                }
                else if(M.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  M.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', M.name)
                }
                else if(P.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  P.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', P.name)
                }
                else if(question.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  question.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', question.name)
                }
                else if(Z.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Z.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Z.name)
                }
                else if(period.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  period.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', period.name)
                }
                else if(at.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  at.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', at.name)
                }
                else if(G.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  G.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', G.name)
                }
                else if(Tab.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Tab.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Tab.name)
                }
                else if(Del.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Del.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Del.name)
                }
                else if(Back.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Back.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Back.name)
                }
                else if(Enter.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Enter.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Enter.name)
                }
                else if(Space.getWorldPosition().distanceTo(toVector3(indexFingerPos)) < MIN_THRES){
                  Space.scale.set(1.2,1.2,1.2)
                  cursor.material.color.setHex(GREEN)
                  textWindow.webContents.send('message', Space.name)
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
                  Space.scale.set(1,1,1)
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


main();