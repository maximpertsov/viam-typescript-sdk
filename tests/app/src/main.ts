import * as VIAM from '@viamrobotics/sdk';

async function connect() {
  const host = 'https://localhost:8080';
  const signalingAddress = host;

  return VIAM.createRobotClient({ host, signalingAddress });
}

function value() {
  return <HTMLParagraphElement>document.getElementById('value');
}

async function main() {
  console.log("connecting...");
  const client = await connect();
  console.log("connected");
  const armClient = new VIAM.ArmClient(client, 'arm1');

  const result = await armClient.isMoving();
  console.log(result);
  value().textContent = (result) ? 'Y' : 'N';
}

main();
