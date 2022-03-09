import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

type FormData = {
  label: string;
};

const schema = object({
  label: string()
    .matches(/^[\w\W]{3,200}$/, "3 to 200 characters")
    .required(),
}).required();

interface Props {
  formId: string;
  resetTrigger: boolean;
}

export default function NewCatalogform({ formId, resetTrigger }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    resetTrigger && reset();
  }, [resetTrigger]);

  const onSubmit = (data: FormData) => {
    // @todo
    console.log(data);
  };

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("label")} />
      <p>{errors.label?.message}</p>
    </form>
  );
}
