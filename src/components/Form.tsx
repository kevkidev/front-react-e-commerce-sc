// declare const grecaptcha: any;
type FormResponseLevel = "danger" | "success";
type FormResponseDisplay = "none" | "block";
export type FormResponse = {
  message: string;
  level: FormResponseLevel;
  display: FormResponseDisplay;
};

export const resetFormResponse = (): FormResponse => {
  return createFormResponse("", "danger", "none");
};

export const createFormResponse = (
  message: string,
  level = "danger" as FormResponseLevel,
  display = "block" as FormResponseDisplay
): FormResponse => {
  return {
    message,
    level,
    display,
  };
};

type Props = {
  id: string;
  children: React.ReactNode;
  onSubmit: Function;
  formResponse?: FormResponse;
};

export function Form({
  id,
  children,
  onSubmit,
  formResponse = resetFormResponse(),
}: Props) {
  const handleSubmit = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) return;

    // _sendReCaptcha();
    const formData = new FormData();
    const formItems = form.getElementsByClassName("form-item");

    for (let i = 0; i < formItems.length; i++) {
      const item = formItems[i];
      const input = item.getElementsByTagName("input")[0] as HTMLInputElement;

      if (input) {
        formData.set(input.name, input.value);
        continue;
      }

      const selectTag = item.getElementsByTagName(
        "select"
      )[0] as HTMLSelectElement;

      if (selectTag) {
        const selectedOption = selectTag[
          selectTag.selectedIndex
        ] as HTMLOptionElement;
        formData.set(selectTag.name, selectedOption.value);
      }
    }

    onSubmit(formData);

    form.classList.add("was-validated");
  };

  // const _sendReCaptcha = () => {
  //   grecaptcha.ready(function () {
  //     const key = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;
  //     grecaptcha
  //       .execute(key, { action: "submit" })
  //       .then(function (token: string) {
  //         // Add your logic to submit to your backend server here.
  //         alert("reCaptcha Token has send to server!:" + token);
  //       });
  //   });
  // };

  return (
    <form
      id={id}
      className="g-3 needs-validation"
      onSubmit={handleSubmit}
      noValidate
    >
      {children}
      <div
        className={`alert alert-${formResponse.level}`}
        style={{ display: formResponse.display }}
        role="alert"
      >
        {formResponse.message}
      </div>
    </form>
  );
}
