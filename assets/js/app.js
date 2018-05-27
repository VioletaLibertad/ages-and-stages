function discover(btnFind) {
    let userAge = prompt("¿Cuál es la edad de tu hij@?");
    let age = parseInt(userAge);
    let mensaje = document.getElementById("text");

    if (1 < age < 3) {
        alert("Tienes un pequeñ@ Toddler");
        mensaje.innerHTML = "Your child is advancing from infancy toward and into the preschool years. During this time, his physical growth and motor development will slow, but you can expect to see some tremendous intellectual, social, and emotional changes.";
    } else if (3 < age < 5) {
        alert("Tienes un pequeñ@ Preschool");
        mensaje.innerHTML = "Your child is advancing from infancy toward and into the preschool years. During this time, his physical growth and motor development will slow, but you can expect to see some tremendous intellectual, social, and emotional changes.";
    } else if (5 < age < 12) {
        alert("Tienes un mini Gradeschooler");
        mensaje.innerHTML = "Your child should feel confident in her ability to meet the challenges in her life. This sense of personal power evolves from having successful life experiences in solving problems independently, being creative and getting results for her efforts.";
    };
};