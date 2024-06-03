fetch('/src/js/async/data.json')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(item => {
            console.log(item.title);
        });
    })
    .catch(error => console.error('Error fetching data:', error));