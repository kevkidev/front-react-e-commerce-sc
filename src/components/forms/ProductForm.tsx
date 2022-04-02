import { yupResolver } from "@hookform/resolvers/yup";
import { CatalogContext } from "components/contexts";
import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProductService } from "services/ProductService";
import { RestService } from "services/RestService";
import { DTO } from "types/dto";
import { ACTION_CREATE, ACTION_UPDATE, FormAction } from "types/types.d";
import {
  availableStatus,
  buildSchema,
  CATEGORY_ID,
  defaultValue,
  IMAGE_ID,
  MAX_PRODUCT_QUANTITY,
  MIN_PRODUCT_QUANTITY,
  PRODUCT_DESCRIPTION,
  PRODUCT_ID,
  PRODUCT_QUANTITY,
} from "./productFormConfig";

interface Props {
  formId: string;
  resetTrigger: boolean;
  value?: DTO.Product;
  action: FormAction;
  onSave: () => void;
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
    resolver: yupResolver(
      ACTION_UPDATE ? buildSchema(current) : buildSchema(defaultValue)
    ),
  });

  useEffect(() => {
    resetTrigger && reset(current);
  }, [resetTrigger, reset, current]);

  const catalog = useContext(CatalogContext);

  const onSubmit = (data: DTO.Product) => {
    if (!catalog) {
      throw Error("No catalog reference uid found for this product.");
    }

    if (action === ACTION_CREATE) {
      ProductService.create({ ...data, catalogUid: catalog.uid });
    }
    if (action === ACTION_UPDATE) {
      ProductService.update({ ...data });
    }
    onSave();
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
      {/* product image url */}
      <div className="form-item">
        <label htmlFor={IMAGE_ID} className="form-label">
          Image URL
        </label>
        <input
          {...register("imageUrl")}
          id={IMAGE_ID}
          className="form-control"
          defaultValue={current.imageUrl}
          placeholder="What is his image ?"
        />
        <div className="text-danger mt-2">{errors.imageUrl?.message}</div>
      </div>

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
          {RestService.categories.map((category, index) => (
            <option key={index + category.uid} value={category.uid}>
              {category.name}
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
