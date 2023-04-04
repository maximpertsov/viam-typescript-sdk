import arm from './gen/component/arm/v1/arm_pb';
import base from './gen/component/base/v1/base_pb';
import board from './gen/component/board/v1/board_pb';
import camera from './gen/component/camera/v1/camera_pb';
import common from './gen/common/v1/common_pb';
import gantry from './gen/component/gantry/v1/gantry_pb';
import generic from './gen/component/generic/v1/generic_pb';
import gripper from './gen/component/gripper/v1/gripper_pb';
import inputController from './gen/component/inputcontroller/v1/input_controller_pb';
import motion from './gen/service/motion/v1/motion_pb';
import motor from './gen/component/motor/v1/motor_pb';
import movementSensor from './gen/component/movementsensor/v1/movementsensor_pb';
import navigation from './gen/service/navigation/v1/navigation_pb';
import robot from './gen/robot/v1/robot_pb';
import sensor from './gen/component/sensor/v1/sensor_pb';
import sensors from './gen/service/sensors/v1/sensors_pb';
import servo from './gen/component/servo/v1/servo_pb';
import slam from './gen/service/slam/v1/slam_pb';
import stream from './gen/proto/stream/v1/stream_pb';
import vision from './gen/service/vision/v1/vision_pb';

export {
  common,
  arm,
  base,
  board,
  camera,
  gantry,
  generic,
  gripper,
  inputController,
  motor,
  motion,
  movementSensor,
  servo,
  navigation,
  robot,
  sensor,
  sensors,
  slam,
  vision,
  stream,
};

// It doesn't matter which ServiceError we export really.
export type {
  ResponseStream,
  ServiceError,
} from './gen/robot/v1/robot_pb_service';
