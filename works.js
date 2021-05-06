let modal = document.getElementById('modal');
    let images = document.getElementsByClassName('images');
    let modalImage = document.getElementById('modal-image');

    for (let i=0; i<images.length; i++) {
      images[i].addEventListener('click', displayModal);
    }
    
    function displayModal() {
      modal.style.display = 'block';
      modalImage.src = this.src;
    }    

    let close = document.getElementsByClassName('close-btn')[0];  
    close.onclick = ()=>{
      modal.style.display = 'none';
    }