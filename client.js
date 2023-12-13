document.getElementById('nameForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
console.log(name)



    if (name) {
        try {
            const response = await fetch(`https://turnuintosuper.onrender.com/generate-superhero`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstLetter: name.charAt(0).toUpperCase() })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            const jsonData = await response.json();

            document.getElementById('superhero-profile').textContent = jsonData.feature;
            
        } catch (error) {
            console.error('Error fetching superhero profile:', error);
            document.getElementById('superhero-profile').textContent = 'Failed to load superhero profile. Please try again.';
        }
    } else {
        document.getElementById('superhero-profile').textContent = 'Please enter a name to generate a superhero profile.';
    }
});
