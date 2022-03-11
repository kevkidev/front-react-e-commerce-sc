import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DTO } from "types/dto";
import { CatalogStatus, FormAction } from "types/types";
import { v4 as uuidv4 } from "uuid";
import { object, string } from "yup";

interface Props {
  formId: string;
  resetTrigger: boolean;
  catalog?: DTO.Catalog;
  action: FormAction;
  onSave: (value: DTO.Catalog) => void;
}

const emptyCatalog: DTO.Catalog = {
  uid: uuidv4(),
  imageUrl: "",
  ownerUid: "",
  productsUids: [],
  title: "",
  status: "alive",
};

const schema = object({
  title: string()
    .matches(/^[\w\W]{3,200}$/, "3 to 200 characters")
    .required(),
}).required();

type FormInputs = {
  title: string;
  status: string;
};

export default function Catalogform(props: Props) {
  const { formId, resetTrigger, catalog, onSave, action } = props;
  const [value, setValue] = useState<DTO.Catalog>(
    catalog ? catalog : emptyCatalog
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset({ title: value.title, status: value.status });
  }, [resetTrigger, reset]);

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    const newCatalog = _.cloneDeep(value);
    newCatalog.title = data.title;
    setValue(newCatalog);
    onSave(newCatalog);
  };

  const availableStatus: { label: string; value: CatalogStatus }[] = [
    { label: "Alive", value: "alive" },
    { label: "Archived", value: "archived" },
    { label: "Disabled", value: "disabled" },
  ];

  const renderStatus = (
    <>
      {availableStatus.map(({ label, value }, index) => {
        return (
          <div className="form-check" key={`${index}${Date.now()}`}>
            <input
              {...register("status")}
              defaultValue={value}
              className="form-check-input"
              type="radio"
              name="status"
              id={`radio-status-${value}`}
              defaultChecked={catalog?.status === value}
            />
            <label
              className="form-check-label"
              htmlFor={`radio-status-${value}`}
            >
              {label}
            </label>
          </div>
        );
      })}
    </>
  );

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} defaultValue={value.title} />
      <div className="text-danger mt-2">{errors.title?.message}</div>
      {action === "update" && renderStatus}
    </form>
  );
}
