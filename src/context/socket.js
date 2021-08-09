import socketio from 'socket.io-client';

export const socket = socketio.connect('https://iotdevlab.herokuapp.com');
export const SocketContext = React.createContext();
