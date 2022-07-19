(() => {
  const openModal = document.querySelector(".button-open");
  const closeModal = document.querySelector(".button-close");
  const modal = document.querySelector(".modal");

  openModal.addEventListener('click', handleToggleShowModal);
  closeModal.addEventListener('click', handleToggleShowModal);

  closeModal.addEventListener('keydown', (event) => {
    event = event || window.event;
    event.key === "Enter" && handleToggleShowModal();
  });

  document.addEventListener("keydown", (event) => {
    event = event || window.event;
    (event.key === "Esc" || event.key === "Escape") && hideModal();
  });

  function handleToggleShowModal() {
    modal.classList.contains("closed") ? showModal() : hideModal();
  }

  const hideModal = () => modal.classList.add("closed");
  const showModal = () => modal.classList.remove("closed");

})()