
var socket; // define a global variable called socket 
socket = io.connect(); // send a connection request to the server

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    } 
  };
   
  var game = new Phaser.Game(config);
   
  function preload() {}
   
  function create() {
    
    //listen to the “connect” message from the server. The server 
		//automatically emit a “connect” message when the cleint connets.When 
        //the client connects, call onsocketConnected. 
        
        
        socket.on("connect", onsocketConnected); 
        
        // send the players object to the new player
        socket.emit('players', "hello world");
  }
   
  function update() {}

  // this function is fired when we connect
function onsocketConnected () {
	console.log("connected to server"); 
}