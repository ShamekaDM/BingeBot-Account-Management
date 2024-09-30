const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

console.log('Server starting...');  // Add this line

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('BingeBot Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  // Add this line
});

