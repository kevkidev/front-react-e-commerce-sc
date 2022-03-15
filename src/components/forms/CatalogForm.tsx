import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DTO } from "types/dto";
import { FormAction } from "types/types";
import { availableStatus, defaultValue, schema } from "./catalogFormConfig";

interface Props {
  formId: string;
  resetTrigger: boolean;
  catalog?: DTO.Catalog;
  action: FormAction;
  onSave: (value: DTO.Catalog) => void;
}

export default function CatalogForm(props: Props) {
  const { formId, resetTrigger, catalog, onSave, action } = props;
  const [value, setValue] = useState<DTO.Catalog>(
    catalog ? catalog : defaultValue
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DTO.Catalog>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(value);
  }, [resetTrigger, reset, value]);

  const onSubmit = (data: DTO.Catalog) => {
    console.log(data);
    const newCatalog = _.cloneDeep(value);
    newCatalog.title = data.title;
    setValue(newCatalog);
    onSave(newCatalog);
  };

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

  const IMAGE_ID = "catalog-image";
  const TITLE_ID = "catalog-title";

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      {/* catalog title */}
      <div className="form-item">
        <label htmlFor={TITLE_ID} className="form-label">
          Title
        </label>

        <input
          {...register("title")}
          id={TITLE_ID}
          className="form-control"
          defaultValue={value.title}
          placeholder="What is his title ?"
        />
        <div className="text-danger mt-2">{errors.title?.message}</div>
      </div>

      {/* catalog image url */}
      <div className="form-item">
        <label htmlFor={IMAGE_ID} className="form-label">
          Image URL
        </label>
        <input
          {...register("imageUrl")}
          id={IMAGE_ID}
          className="form-control"
          defaultValue={value.imageUrl}
          placeholder="What is his image url ?"
        />
        <div className="text-danger mt-2">{errors.imageUrl?.message}</div>
      </div>

      {action === "update" && renderStatus}
    </form>
  );
}
