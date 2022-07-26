const formEl = document.querySelector("#contact-me-form");

formEl.addEventListener("submit", async function contactMe(e) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(formEl).entries());

  if (!formData.name || !formData.email || !formData.message) {
    return alert("Please fill out all fields");
  }

  const res = await fetch(
    "https://maker.ifttt.com/trigger/contact_me/with/key/o7Eta94e_dBOFFC1sNQ0vSbTBzC-x9nixnSJ1DsBS-G",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value1: formData.name,
        value2: formData.email,
        value3: formData.message,
      }),
    }
  );

  if (res.ok) {
    alert("Message sent successfully");
  } else {
    alert("Something went wrong");
  }
});
