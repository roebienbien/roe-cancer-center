import pino from 'pino'

const isDev = process.env.NODE_ENV !== 'production';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',

  timestamp: pino.stdTimeFunctions.isoTime,

  transport: isDev ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      // translateTime: "HH:MM:ss",
      // translateTime: "SYS:standard:HH:MM:ss",
      translateTime: "SYS:HH:MM:ss",
      ignore: "pid,hostname",
      // singleLine: true,
    }
  }
    : undefined
})
