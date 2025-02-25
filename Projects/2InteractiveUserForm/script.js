
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    let strength = "Weak";
    if (password.length >= 10) {
        strength = "Strong";
    } else if (password.length >= 6) {
        strength = "Medium";
    }
    document.getElementById('passwordStrength').textContent = `Password Strength: ${strength}`;
});
