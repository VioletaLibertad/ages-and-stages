function discover(btnFind) {
    let age = parseInt(prompt("¿Cuál es la edad de tu hij@?"));
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
    } else if (12 < age < 18) {
           alert("Tienes un Teen salvaje");
         mensaje.innerHTML = "Adolescence can be a challenge for parents. Your youngster may at times be a source of frustration and exasperation, not to mention financial stress. But these years also bring many, many moments of joy, pride, laughter and closeness.";
    } else {
            alert("Ya es un Young Adult, let him go");
            mensaje.innerHTML = "A young adult who goes away to a college or a job far from home has to build a social support system from the ground up. At the same time, he may have to acclimate himself to a drastically different environment.";
    };

};