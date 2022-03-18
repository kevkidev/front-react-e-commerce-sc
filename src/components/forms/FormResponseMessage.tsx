import {
  FormResponse,
  FormResponseDisplay,
  FormResponseLevel,
} from "types/types.d";

interface Props {
  formResponse: FormResponse;
}

export function FormResponseMessage({ formResponse }: Props) {
  return (
    <div
      className={`alert alert-${formResponse.level}`}
      style={{ display: formResponse.display }}
      role="alert"
    >
      {formResponse.message}
    </div>
  );
}

export namespace FormResponseMessageUtil {
  export const defaultFormResponse: FormResponse = {
    message: "",
    level: "danger",
    display: "none",
  };

  export function buildResponse(
    message: string,
    level: FormResponseLevel = "danger",
    display: FormResponseDisplay = "block"
  ) {
    return {
      message,
      level,
      display,
    };
  }
}
