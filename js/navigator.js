function switchVisible() {
            if (document.getElementById('introduction')) {

                if (document.getElementById('introduction').style.display == 'none') {
                    document.getElementById('introduction').style.display = 'block';
                    document.getElementById('mainsection').style.display = 'none';
                }
                else {
                    document.getElementById('introduction').style.display = 'none';
                    document.getElementById('mainsection').style.display = 'block';
                }
            }
}