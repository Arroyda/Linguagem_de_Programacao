fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o header:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));

fetch('MenuLat.html')
.then(response => response.text())
.then(data => {
    document.getElementById('menuLat-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));