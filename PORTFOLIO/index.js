let receiverEmail = document.getElementById('fromEmail').value;
let subject = document.getElementById('subject').value;
let body = document.getElementById('body').value;
let form = document.getElementById('form');
form.addEventListener('submit',sendEmail);
function sendEmail(event) {
    event.preventDefault();
    Email.send({
        Host: "smtp.gmail.com",
        Server: 'smtp.elasticemail.com',
        Port: '2525',
        Username: "sksahilali.ind@gmail.com",
        Password: "",
        To: receiverEmail,
        From: "sksahilali.ind@gmail.com",
        Subject: subject,
        Body: body,
    })
        .then(function (message) {
            console.log(message);
            alert("mail sent successfully")
        });
}