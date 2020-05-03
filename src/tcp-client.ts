import net from 'net'

const socket = new net.Socket

socket.connect(8080, 'localhost', () => {
  console.log("Connected to server")
})

socket.write("nihaoma", (error) => {
  if(error){
    socket.end()
  }
})

socket.on("data", (data) => {
  console.log("received - ", data.toString())
})



