import udp from 'dgram'

const client = udp.createSocket('udp4')

const data = Buffer.from("nihaoma")

client.on('message', (msg, info) => {
  console.log("data received from server ", msg.toString())
  console.log("Received %d bytes from %s:%d \n", msg.length, info.address, info.port)
})

client.send(data, 8081, 'localhost', (error, bytes) => {
  if (error) {
    client.close()
  } else {
    console.log("Data sent ", bytes)
  }
})

