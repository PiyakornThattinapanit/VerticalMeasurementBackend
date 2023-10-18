require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Piyakorn:ZTLBDSsRKJOYGTQd@project01.g7ummbq.mongodb.net/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

module.export = mongoose;