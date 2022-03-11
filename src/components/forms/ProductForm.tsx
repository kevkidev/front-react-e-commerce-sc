import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RestService } from "services/RestService";
import { DTO } from "types/dto";
import { FormAction } from "types/types";
import {
  availableStatus,
  CATEGORY_ID,
  defaultValue,
  MAX_PRODUCT_QUANTITY,
  MIN_PRODUCT_QUANTITY,
  PRODUCT_DESCRIPTION,
  PRODUCT_ID,
  PRODUCT_QUANTITY,
  schema,
} from "./productFormConfig";

interface Props {
  formId: string;
  resetTrigger: boolean;
  value?: DTO.Product;
  action: FormAction;
  onSave: (value: DTO.Product) => void;
}

export default function ProductForm(props: Props) {
  const { formId, resetTrigger, value, onSave, action } = props;
  const [current] = useState<DTO.Product>(value ? value : defaultValue);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DTO.Product>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    resetTrigger && reset(defaultValue);
  }, [resetTrigger, reset]);

  const onSubmit = (data: DTO.Product) => {
    console.log(JSON.stringify(data));
    onSave(data);
  };

  const renderStatus = (
    <>
      {availableStatus.map((status, index) => {
        return (
          <div className="form-check" key={`${index}${Date.now()}`}>
            <input
              {...register("status")}
              id={`radio-status-${value}`}
              className="form-check-input"
              type="radio"
              value={status.value}
              defaultChecked={current?.status === status.value}
            />
            <label
              className="form-check-label"
              htmlFor={`radio-status-${value}`}
            >
              {status.label}
            </label>
          </div>
        );
      })}
    </>
  );

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      {/* product name */}
      <div className="form-item">
        <label htmlFor={PRODUCT_ID} className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id={PRODUCT_ID}
          className="form-control"
          defaultValue={current.name}
          placeholder="What is his name please ?"
        />
        <div className="text-danger mt-2">{errors.name?.message}</div>
      </div>

      {/* product category */}
      <div className="form-item">
        <label htmlFor={CATEGORY_ID} className="form-label">
          Category
        </label>

        <select
          {...register("categoryUid")}
          id={CATEGORY_ID}
          className="form-select"
          aria-label="None"
          defaultValue={current.categoryUid}
        >
          <option value="none">Please select a category</option>
          {RestService.categories.map((c, i) => (
            <option key={i + c.uid} value={c.uid}>
              {c.name}
            </option>
          ))}
        </select>
        <div className="text-danger mt-2">{errors.categoryUid?.message}</div>
      </div>

      {/* product quantity */}
      <div className="form-item">
        <label htmlFor={PRODUCT_QUANTITY} className="form-label">
          Quantity
        </label>
        <input
          {...register("quantity")}
          id={PRODUCT_QUANTITY}
          className="form-control"
          type="number"
          max={MAX_PRODUCT_QUANTITY}
          min={MIN_PRODUCT_QUANTITY}
          defaultValue={current.quantity}
          placeholder="How many you can sell ?"
        />
        <div className="text-danger mt-2">{errors.quantity?.message}</div>
      </div>

      {/* description */}
      <div className="form-item">
        <Form.Label>Description</Form.Label>
        <textarea
          {...register("description")}
          id={PRODUCT_DESCRIPTION}
          className="form-control"
          rows={3}
          defaultValue={current.description}
          placeholder="What do you sell ?"
        ></textarea>
        <div className="text-danger mt-2">{errors.description?.message}</div>
      </div>

      {/* product status */}
      {action === "update" && renderStatus}
    </form>
  );
}
