function submit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;
    const msg = document.getElementById('msg').value;
    console.log(name, mail, msg);
}
function clearForm() {
    const form = document.getElementById('form').value; 
    console.log('All clear');
}
document.getElementById('submit').addEventListener('click', submit);
document.getElementById('clearForm').addEventListener('reset', clearForm());