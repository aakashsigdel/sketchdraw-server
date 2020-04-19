import {Middleware} from 'koa';

export const createRoom: Middleware = async (ctx, next) => {
  const {username} = ctx.request.body;
  ctx.body = {roomId: '1234', username};
  await next();
};

export const joinRoom: Middleware = async (ctx, next) => {
  const {username, roomId} = ctx.request.body;
  ctx.body = {roomId, username};
  await next();
};
