let nicknames = ['Crusher', 'the Scientist', 'Twinkle-toes', 'the Coder', 'the Jester', 'the Sloth', 'Quick-Silver'];

function allNames(){
    document.getElementById('output').innerHTML='';
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    for(let i = 0; i < nicknames.length; i++){
        document.getElementById('output').innerHTML+=`${i}: ${firstname} "${nicknames[i]}" ${lastname} <br>`;
    }
}

function randomName(){
    document.getElementById('output').innerHTML='';
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let randomNum = Math.floor(Math.random() * 7);
    document.getElementById('output').innerHTML=`${randomNum}: ${firstname} "${nicknames[randomNum]}" ${lastname}`;
}