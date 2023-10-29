require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Piyakorn:ZTLBDSsRKJOYGTQd@project01.g7ummbq.mongodb.net/Users'; 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
// const store = new MongoDBSession({
//   uri: mongoURI,
//   collection: "mySessions",
// })

module.export = mongoose;