import * as VIAM from '@viamrobotics/sdk';

async function connect() {
  const host = 'https://localhost:8080';
  const signalingAddress = host;

  return VIAM.createRobotClient({ host, signalingAddress });
}

async function main() {
  const client = await connect();
  const armClient = new VIAM.ArmClient(client, 'arm1');

  console.log(armClient.isMoving());
}

main();
