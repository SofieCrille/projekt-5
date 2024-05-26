console.log("Virker det??")

const accordion = document.getElementsByClassName
('contentbox');

for (a = 0; a<accordion.length; a++){
    accordion[a].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}