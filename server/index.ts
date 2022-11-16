'use strict';

import { createServer } from './server';

const port = 8080;
const server = createServer();

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
