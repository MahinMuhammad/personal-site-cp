function contexMenuSwitchPressed() {
    let mobileNavGroup = document.getElementById('rightNavItemGroupMobile')
    if (mobileNavGroup.style.display !== 'flex'){
        document.getElementById('rightNavItemGroupMobile').style.display = 'flex';
        document.getElementById('cross-icon').style.display = 'block'
        document.getElementById('bar-icon').style.display = 'none'
    }else{
        document.getElementById('rightNavItemGroupMobile').style.display = 'none';
        document.getElementById('cross-icon').style.display = 'none'
        document.getElementById('bar-icon').style.display = 'block'
    }
}

function sendClicked(){
    let elements = document.getElementsByClassName('field')
    
    for(let i=0; i<elements.length; i++){
        elements[i].value = "";
    }
    alert("Message Sent!")
}