function submit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;
    const msg = document.getElementById('msg').value;
    alert (name + ' ' + mail + ' ' + msg + '\n\n\nThanks for your message!');
    console.log(name, mail, msg);
}
function clearForm() {
    document.getElementById('form').addEventListener('reset', clearForm)
}

document.getElementById('submit').addEventListener('click', submit);