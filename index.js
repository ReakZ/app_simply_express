const  app = require('./app')
// Start server
app.listen(process.env.SERVER_PORT,()=>console.log('Server up on '+process.env.SERVER_PORT))