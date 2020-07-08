/*
 * Author: Graham Atlee
 * Date created: 4/12/2020
 *
 * Intialize the leap motion stuff
 */

/*
 * require any dependencies created by leap motion
 * here.
 */
require('../lib/leap-1.0.0.js')
require('../lib/leap-plugins-0.1.12.js')
require('../lib/leap-widgets-0.1.0.js')


leap = function (scene, camera){

  const DEFAULT_BONE_COLOR= 0xffffff
  const DEFAULT_JOINT_COLOR= 0x5daa00
  const DEFAULT_BONE_SCALE = 1/6
  const DEFAULT_JOINT_SCALE = 1/5
  const DEFAULT_OPACITY = 1


  // Connect to localhost and start getting frames
  Leap.loop();


  // Docs: http://leapmotion.github.io/leapjs-plugins/main/transform/
  Leap.loopController.use('transform', {

    // This matrix flips the x, y, and z axis, scales to meters, and offsets the hands by -8cm.
    vr: true,

    // This causes the camera's matrix transforms (position, rotation, scale) to be applied to the hands themselves
    // The parent of the bones remain the scene, allowing the data to remain in easy-to-work-with world space.
    // (As the hands will usually interact with multiple objects in the scene.)
    effectiveParent: camera

  });

  // Docs: http://leapmotion.github.io/leapjs-plugins/main/bone-hand/
  Leap.loopController.use('boneHand', {

    // If you already have a scene or want to create it yourself, you can pass it in here
    // Alternatively, you can pass it in whenever you want by doing
    // Leap.loopController.plugins.boneHand.scene = myScene.
    scene: scene,

    // Display the arm
    // arm: leapHandData.arms,

    // opacity: leapHandData.opacity,

    // set custom bone and joint color
    // boneColor: (new THREE.Color).setHex(parseInt(customBoneColor)),
    // jointColor: (new THREE.Color).setHex(parseInt(customJointColor)),

    boneScale: DEFAULT_BONE_SCALE,
    jointScale: DEFAULT_JOINT_SCALE

  });

  //required to use widgets library
  Leap.loopController.use('proximity');

  return Leap;

};

module.exports = leap;