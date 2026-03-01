const express = require('express');  
 
const path = require('path');
const app = express();
const PORT = 3000;   // server will listen on http://localhost:3000

// app.use(express.static(path.join(__dirname,'..')))
 
  
app.use(express.static(path.join(__dirname,'html')));
  
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'html', 'index.html'));
// });

app.get('/api/data',(req,res) => {
    res.json({message: 'Hello from real API!'}); 
 
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});