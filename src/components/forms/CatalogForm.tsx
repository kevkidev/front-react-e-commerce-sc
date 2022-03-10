import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DTO } from "types/dto";
import { v4 as uuidv4 } from "uuid";
import { object, string } from "yup";

interface Props {
  formId: string;
  resetTrigger: boolean;
  catalog?: DTO.Catalog;
  onSave: (value: DTO.Catalog) => void;
}

type FormData = {
  title: string;
};

const schema = object({
  title: string()
    .matches(/^[\w\W]{3,200}$/, "3 to 200 characters")
    .required(),
}).required();

const emptyCatalog = {
  uid: uuidv4(),
  imageUrl: "",
  ownerUid: "",
  productsUids: [],
  title: "",
};

export default function Catalogform(props: Props) {
  const { formId, resetTrigger, catalog, onSave } = props;
  const [value, setValue] = useState<DTO.Catalog>(
    catalog ? catalog : emptyCatalog
  );
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
    console.log(data);
    const newCatalog = _.cloneDeep(value);
    newCatalog.title = data.title;
    setValue(newCatalog);
    onSave(newCatalog);
  };

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} defaultValue={value.title} />
      <p>{errors.title?.message}</p>
    </form>
  );
}
