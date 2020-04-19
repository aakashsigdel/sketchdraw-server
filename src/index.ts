import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as socketIO from 'socket.io';

import {createRoom, joinRoom} from './room';

const app = new Koa();
const server = require('http').createServer(app.callback());
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

const router = new Router();
app.use(bodyParser());

router
  .get('/', async (ctx, next) => {
    ctx.body = {msg: 'Sketch Games'};
    await next();
  })
  .post('/create', createRoom)
  .post('/join', joinRoom);

app.use(json());
app.use(logger());

// Routes
app.use(router.routes()).use(router.allowedMethods());

server.listen(5000, () => {
  console.log('Server started on 5000');
});
