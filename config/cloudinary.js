const cloudinary = require('cloudinary').v2
          
cloudinary.config({ 
  cloud_name: 'dhtjmlhyu', 
  api_key: '674141454961844', 
  api_secret: 'cSO-1V4iYYToPLwy0wNL0qNOlXc' 
});

module.exports = cloudinary;