import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = 3005;

app.post('/generate-superhero', async (req, res) => {
    const firstLetter = req.body.firstLetter;

    try {
        const response = await fetch(`https://turnuintosuper.onrender.com/generate-superhero`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstLetter: firstLetter }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const jsonData = await response.json();

        res.json({ feature: jsonData.feature });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while generating the superhero feature.');
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
