async function promptPassword() {
  const password = prompt("Enter password to decrypt this note:");
  if (!password) return;

  const encryptedText = document.getElementById("encrypted-data").innerText.trim();

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) throw new Error("Wrong password or corrupted data.");

    document.getElementById("encrypted-data").style.display = "none";
    const content = document.getElementById("decrypted-content");
    content.style.display = "block";
    content.innerText = decrypted;
  } catch (e) {
    alert("❌ Failed to decrypt: " + e.message);
  }
}

window.onload = promptPassword;
