document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.querySelector('input[type="password"]');
  const strengthDisplay = document.createElement('div');
  strengthDisplay.id = 'strength-meter';
  passwordInput.parentNode.insertBefore(strengthDisplay, passwordInput.nextSibling);

  passwordInput.addEventListener('input', () => {
    const strength = checkPasswordStrength(passwordInput.value);
    strengthDisplay.textContent = `Strength: ${strength.label}`;
    strengthDisplay.style.color = strength.color;
  });
});

function checkPasswordStrength(password) {
  let score = 0;
  if (password.length > 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { label: "Very Weak", color: "#ff4d4d" },
    { label: "Weak", color: "#ff944d" },
    { label: "Moderate", color: "#ffeb3b" },
    { label: "Strong", color: "#8bc34a" },
    { label: "Very Strong", color: "#4caf50" }
  ];

  return levels[Math.min(score, levels.length - 1)];
}
