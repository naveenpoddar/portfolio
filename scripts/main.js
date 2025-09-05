const formEl = document.querySelector("#contact-me-form");

formEl.addEventListener("submit", async function contactMe(e) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(formEl).entries());

  if (!formData.name || !formData.email || !formData.message) {
    return alert("Please fill out all fields");
  }

  const params = new URLSearchParams();
  params.set("value1", formData.name);
  params.set("value2", formData.email);
  params.set("value3", formData.message);

  try {
    const res = await fetch(
      `https://maker.ifttt.com/trigger/contact_me/with/key/o7Eta94e_dBOFFC1sNQ0vSbTBzC-x9nixnSJ1DsBS-G?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
          "accept-language": "es-ES,es;q=0.9",
          "content-type": "text/plain",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
        },
        credentials: "omit",
        mode: "no-cors",
      }
    );
  } catch (err) {}

  alert("Message sent successfully");
});
