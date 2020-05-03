
import events from 'events'



const eventEmitter = events.EventEmitter

const emitter = new eventEmitter()

emitter.on('data_received', function (...args) {
  console.log(args)
  console.log('Data received successfully.')
})

emitter.on('data_received', function (...args) {
  console.log(args)
  console.log('Data received successfully.')
})

emitter.emit("data_received", {name:"jun"} )
emitter.emit("data_received", {name:"jun"} )

console.log(eventEmitter.listenerCount(emitter, "data_received"))