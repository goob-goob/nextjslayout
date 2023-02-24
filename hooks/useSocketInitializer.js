import { io } from 'socket.io-client'

const useSocketInitializer = async (socket) => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', (socket) => {
      console.log('connected')
    })
    socket.on('disconnect', () => {
      console.log('disconnected')
    })

    return socket
  }

export default useSocketInitializer