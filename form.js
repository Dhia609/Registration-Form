// form.js - Demo-only (no server calls)


$(function () {
  $("#registration-form").on("submit", function (e) {
    e.preventDefault();

    // quick UI housekeeping
    $(".error").text("");
    $("#error-message").hide().empty();

    const $form = $(this);
    const $submit = $form.find("input[type=submit]");
    $submit.prop("disabled", true).val("Processing...");

    // gather values
    const formData = {
      name: ($form.find("input[name=name]").val() || "").trim(),
      email: ($form.find("input[name=email]").val() || "").trim(),
      phone: ($form.find("input[name=phone]").val() || "").trim(),
      password: ($form.find("input[name=password]").val() || ""),
      password_confirm: ($form.find("input[name=password_confirm]").val() || "")
    };

    // Client-side quick checks (UX only)
    const clientErrors = {};
    if (!formData.name) clientErrors.name = "Le nom est requis.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) clientErrors.email = "E-mail invalide.";
    if (!formData.phone || formData.phone.length < 6) clientErrors.phone = "Numéro invalide.";
    if (!formData.password || formData.password.length < 6) clientErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    if (formData.password !== formData.password_confirm) clientErrors.password_confirm = "Les mots de passe ne correspondent pas.";

    if (Object.keys(clientErrors).length) {
      showErrors(clientErrors);
      $submit.prop("disabled", false).val("Go");
      return;
    }

  
    // You can tweak the logic below to test different responses.
    setTimeout(function () {
    
      const demoResponse = simulateServer(formData);

      if (demoResponse.status === "success") {
        $form.find("input[type=password]").val("");
        showSuccess(demoResponse.message || "Compte demo créé (mock).", demoResponse.redirect || null);
      } else {
        showErrors(demoResponse.errors || { _general: "Erreur inconnue (demo)." });
      }

      $submit.prop("disabled", false).val("Go");
    }, 600); 
  });

  function simulateServer(data) {
    if (data.email.indexOf("exists") !== -1) {
      return {
        status: "error",
        errors: {
          email: "Cet e-mail est déjà utilisé.",
          _general: "Veuillez corriger les erreurs et réessayer."
        }
      };
    }

    if (data.phone.startsWith("000")) {
      return {
        status: "error",
        errors: {
          phone: "Numéro invalide (détecté comme test).",
          _general: "Numéro de téléphone invalide."
        }
      };
    }

    
    return {
      status: "success",
      message: "Compte demo créé (mock).",
      redirect: null 
    };
  }

  function showErrors(errors) {
    $(".error").text("");
    $("#error-message").hide().empty();

    if (errors.name) $("#name-error").text(errors.name);
    if (errors.email) $("#email-error").text(errors.email);
    if (errors.phone) $("#phone-error").text(errors.phone);
    if (errors.password) $("#password-error").text(errors.password);
    if (errors.password_confirm) $("#password-confirm-error").text(errors.password_confirm);

    if (errors._general) {
      $("#error-message").show().html("<p>" + errors._general + "</p>");
    }
  }

  function showSuccess(message, redirectUrl) {
    if ($("#success-message").length === 0) {
      $("<div id='success-message' style='color: #eaffea; font-weight:700; margin-bottom: 8px;'></div>").insertBefore("#registration-form");
    }
    $("#success-message").text(message || "Succès (demo).");
    if (redirectUrl) setTimeout(() => window.location.replace(redirectUrl), 400);
  }
});
