// export const API_ROOT = 'http://localhost:3000';
// export const API_WS_ROOT = 'ws://localhost:3000/cable';
// export const HEADERS = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
// };

import { createConsumer } from "@rails/actioncable";

global.addEventListener = () => {};
global.removeEventListener = () => {};

const consumer = createConsumer("ws://localhost:3000/cable");

export { consumer };