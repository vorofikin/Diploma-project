import { Parameters } from './parameters.model';
import expectedValue from './parameters';
import { io } from 'socket.io-client';

const ws = io('http://monitor-app:3000');
ws.on('connect', () => console.log('connected'));
ws.on('error', (e) => console.log(e));

const getRandomParameterValue = (parameter: Parameters): number => {
  const isErrorValue = Math.random() < 0.5;
  const { minValue, maxValue } = expectedValue.get(parameter);
  return isErrorValue ?
    Math.random() * (maxValue - minValue) * maxValue :
    Math.random() * (maxValue - minValue) + minValue;
};

const setValue = async (): Promise<void> => {
  console.log(`Timestamp: ${new Date().toISOString()}`);
  const parameters = Object.values(Parameters);
  const params = [];
  for (const parameter of parameters) {
    const value = getRandomParameterValue(parameter);
    // ws.emit('set', { key: parameter, value });
    params.push({
      title: parameter,
      value,
    });
  }
  ws.emit('setAll', params);
};

setInterval(setValue, 10e3);