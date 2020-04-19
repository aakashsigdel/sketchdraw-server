import {Server, Socket} from 'socket.io';
import {v4 as uuidv4} from 'uuid';

interface User {
  id: string;
  name: string;
  isConnected: boolean;
  score: number;
  images: string[];
}

interface Game {
  users: User[];
  startedAt: number;
}

const game: Game = {
  users: [],
  startedAt: null,
};

export function room(socketIO: Server, socket: Socket): void {
  socket.on('disconnect', handleDisconnect);
  socket.on('join', handleJoin);
  socket.on('create', handleCreate);
  socket.on('draw', handleDraw);
  socket.on('message', handleMessage);
}

function createUser(name: string): User {
  return {
    id: uuidv4(),
    name,
    isConnected: true,
    score: 0,
    images: [],
  };
}

function handleDisconnect() {}

function handleJoin(name: string) {
  const userIndex = game.users.findIndex((u) => u.name === name);
}

function handleCreate() {}

function handleDraw() {}

function handleMessage() {}
