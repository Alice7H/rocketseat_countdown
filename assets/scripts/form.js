(() => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (name.value !== '' && email.value !== '') {
      alert(`Nome ${name.value} e e-mail ${email.value}`);
      name.value = '';
      email.value = '';
    }
  })
})()