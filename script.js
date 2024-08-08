emailjs.init("O6m-i3ZUSyhafKlxO"); 

function initializePage() {
    document.getElementById("passwordLength").value = 12;
    document.getElementById("generatedPassword").value = "";
    document.getElementById("encryptedPassword").value = "";
    document.getElementById("inputEncryptedPassword").value = "";
    document.getElementById("decryptedPassword").value = "";
    document.getElementById("manualPassword").value = "";
    document.getElementById("manualEncryptedPassword").value = "";
    document.getElementById("manualDecryptedPassword").value = "";
    document.getElementById("recipientEmail").value = "";
}

window.addEventListener("load", function() {
    initializePage(); 
});

function generatePassword() {
    var length = document.getElementById("passwordLength").value;
    var password = generateRandomPassword(length);
    document.getElementById("generatedPassword").value = password;
}

function generateRandomPassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function copyToClipboard(elementId) {
    var element = document.getElementById(elementId);
    element.select();
    document.execCommand("copy");
    alert("Copied to clipboard: " + element.value);
}

function encryptPassword() {
    var password = document.getElementById("generatedPassword").value;
    var key = "11Hussein11_key"; // Replace this with a secure key

  
    var encryptedPassword = sjcl.encrypt(key, password);

    document.getElementById("encryptedPassword").value = encryptedPassword;
}

function decryptPassword() {
    var encryptedPassword = document.getElementById("inputEncryptedPassword").value;
    var key = "11Hussein11_key"; 

    try {
        
        var decryptedPassword = sjcl.decrypt(key, encryptedPassword);
        document.getElementById("decryptedPassword").value = decryptedPassword;
    } catch (e) {
        alert("Decryption failed: " + e.message);
        document.getElementById("decryptedPassword").value = "";
    }
}


function encryptManualPassword() {
    var password = document.getElementById("manualPassword").value;
    var key = "11Hussein11_key"; // Replace this with a secure key

    var encryptedPassword = sjcl.encrypt(key, password);

    document.getElementById("manualEncryptedPassword").value = encryptedPassword;
}

function decryptManualPassword() {
    var encryptedPassword = document.getElementById("manualEncryptedPassword").value;
    var key = "11Hussein11_key"; // Use the same key for decryption

    try {
        var decryptedPassword = sjcl.decrypt(key, encryptedPassword);
        document.getElementById("manualDecryptedPassword").value = decryptedPassword;
    } catch (e) {
        alert("Decryption failed: " + e.message);
        document.getElementById("manualDecryptedPassword").value = "";
    }
}

function sendEmail() {
    var recipientEmail = document.getElementById("recipientEmail").value;
    var generatedPassword = document.getElementById("generatedPassword").value;
    var encryptedPassword = document.getElementById("encryptedPassword").value;
    var decryptedPassword = document.getElementById("decryptedPassword").value;
    var manualPassword = document.getElementById("manualPassword").value;
    var manualEncryptedPassword = document.getElementById("manualEncryptedPassword").value;
    var manualDecryptedPassword = document.getElementById("manualDecryptedPassword").value;

    // Send email using EmailJS
    emailjs.send("service_zxzuz1c", "template_24va3o7", {
        to_email: recipientEmail,
        generated_password: generatedPassword,
        encrypted_password: encryptedPassword,
        decrypted_password: decryptedPassword,
        manual_password: manualPassword,
        manual_encrypted_password: manualEncryptedPassword,
        manual_decrypted_password: manualDecryptedPassword
    }).then(function(response) {
        alert("Email sent successfully!");
        initializePage();
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });
}

function resetPage() {
    initializePage();
}
