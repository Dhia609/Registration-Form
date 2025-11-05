<div class="container">
  <!-- General error / success messages -->
  <div id="error-message" style="display:none; color: #ffe6e6; margin-bottom: 8px;"></div>
  <div id="success-message" style="display:none; color: #eaffea; font-weight:700; margin-bottom: 8px;"></div>

  <form method="POST" id="registration-form">
    <p>Créez Votre Compte</p>

    <label for="name">Nom:</label><br>
    <input type="text" name="name" placeholder="Nom"><br>
    <span id="name-error" class="error"></span>

    <label for="email">E-Mail:</label><br>
    <input type="email" name="email" placeholder="E-mail"><br>
    <span id="email-error" class="error"></span>

    <label for="phone">Numéro de Téléphone:</label><br>
    <input type="number" name="phone" placeholder="Numéro de Téléphone"><br>
    <span id="phone-error" class="error"></span>

    <label for="password">Mot de passe:</label><br>
    <input type="password" name="password" placeholder="Mot de Passe"><br>
    <span id="password-error" class="error"></span>

    <label for="password_confirm">Confirmer le mot de passe:</label><br>
    <input type="password" name="password_confirm" placeholder="Répéter le Mot de Passe"><br>
    <span id="password-confirm-error" class="error"></span>

    <input type="submit" value="Go"><br>
    <a href="#">Forgot Password?</a>
  </form>
</div>
