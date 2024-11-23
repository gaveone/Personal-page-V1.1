function toastHandler(ses: number, Er: boolean, Message: string) {
     const toast = document.querySelector<HTMLDivElement>("[data-toast]");
     const toastMessage = document.querySelector<HTMLParagraphElement>(
          "[data-toast-message]"
     );

     if (toast && toastMessage) {
          toast.classList.add("showtoast");
          toastMessage.textContent = Message;

          if (Er) {
               toast.classList.add("toastError");
          } else {
               toast.classList.add("toastDefault");
          }
          setTimeout(() => {
               toast.classList.remove("showtoast");
          }, ses * 1000);
     }
}

document
     .querySelector<HTMLFormElement>("[data-mainForm]")
     ?.addEventListener("submit", (e) => {
          e.preventDefault();
          const formElement = e.currentTarget as HTMLFormElement;

          const form = new FormData(formElement);
          const name = form.get("Name");
          const email = form.get("Email");
          const content = form.get("Content");
          console.log(name);
          console.log(email);
          console.log(content);
          if (name && content && email) {
               toastHandler(4.5, false, "successful message sent")
               formElement.reset()

          } else {
               toastHandler(4.5, true, "Failed to enter required…")

          }


     });
