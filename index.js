function dropShow(id) {
    if (document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'flex';
    }
    else{
        document.getElementById(id).style.display = 'none';
    }
}