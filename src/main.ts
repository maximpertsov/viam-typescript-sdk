import { RobotClient as Client } from './robot';
import { version } from '../package.json';

export {
  type Robot,
  type DialDirectConf,
  type DialWebRTCConf,
  RobotClient,
  createRobotClient,
} from './robot';
export { type Arm, ArmClient } from './components/arm';
export { type Base, BaseClient } from './components/base';
export { type Board, BoardClient } from './components/board';
export { type Camera, CameraClient } from './components/camera';
export { type Motor, MotorClient } from './components/motor';
export {
  type MovementSensor,
  MovementSensorClient,
} from './components/movementsensor';
export { type Sensor, SensorClient } from './components/sensor';
export { type Stream, StreamClient } from './extra/stream';

export { Client, version };

import * as proto from './proto';
export { proto };
