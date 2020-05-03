import dgram from 'dgram'
const socket = dgram.createSocket("udp4")

socket.on("message", (msg, info) => {
  console.log(`${info.address}:${info.port} - ${msg} - ${info.size}`)

  socket.send("wocao", info.port, info.address)
})

socket.bind(8081, () => {
  console.log("UDP running on port 8081")
})