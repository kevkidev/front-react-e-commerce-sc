// import "./AccountPage.scss";
import { Form as BForm } from "react-bootstrap";
import { Form } from "../../components/Form";
import FormInputGroup, {
  DEFAULT_VALID_FEEDBACK,
} from "../../components/FormInputGroup";
import ModalForm from "../../components/ModalForm";
import { Model } from "../../models";
import { RestService } from "../../services/RestService";

export default function CreateProductModal() {
  const FORM_ID = "product-form";
  const CATEGORY_ID = "product-category";
  const PRODUCT_ID = "product-name";
  const PRODUCT_QUANTITY = "product-quantity";
  const PRODUCT_DESCRIPTION = "product-description";

  const onNewProduct = (formData: FormData) => {
    let foundCategory = RestService.categories.find(
      (c) => c.uid === formData.get(CATEGORY_ID)
    );

    const newProduct: Model.Product = {
      uid: "1-product",
      category: foundCategory
        ? foundCategory
        : {
            name: "unknow",
            uid: "unknow",
          },
      imageUrl: "https://zezere",
      name: formData.get(PRODUCT_ID) as string,
      owner: RestService.currentAccount,
      quantity: parseInt(formData.get(PRODUCT_QUANTITY) as string) as number,
      description: formData.get(PRODUCT_DESCRIPTION) as string,
    };
    RestService.products.push(newProduct);
  };

  return (
    <ModalForm buttonTitle="New product" formId={FORM_ID} title="Add a product">
      <Form id={FORM_ID} onSubmit={onNewProduct}>
        <FormInputGroup
          id={PRODUCT_ID}
          label="Name"
          name={PRODUCT_ID}
          type="text"
          placeholder="What is his name please ?"
          required
          regexp="[a-zA-Z0-9._%+-]{2,100}"
          //TODO invalidFeedBack={}
          //TODO validityChecker={}
        />

        <div className="form-item">
          <label htmlFor={CATEGORY_ID} className="form-label">
            Category
          </label>
          <BForm.Select
            id={CATEGORY_ID}
            aria-label="Default select example"
            required
            name={CATEGORY_ID}
          >
            <option value="">Please select a category</option>
            {RestService.categories.map((c, i) => (
              <option key={i + c.uid} value={c.uid}>
                {c.name}
              </option>
            ))}
          </BForm.Select>
          <div className="valid-feedback">{DEFAULT_VALID_FEEDBACK}</div>
          <div className="invalid-feedback">Please select a category.</div>
        </div>

        <FormInputGroup
          id={PRODUCT_QUANTITY}
          label="Quantity"
          name={PRODUCT_QUANTITY}
          type="text"
          placeholder="How many you can sell ?"
          required
          regexp="[1-9][0-9]{0,6}" // 1 to 9.999.999
          //TODO invalidFeedBack={}
          //TODO validityChecker={}
        />
        <div className="form-item">
          <BForm.Label>Description</BForm.Label>
          <textarea
            className="form-control"
            id={PRODUCT_DESCRIPTION}
            name={PRODUCT_DESCRIPTION}
            placeholder="What do you sell ?"
            rows={3}
            required
          ></textarea>

          <div className="valid-feedback">{DEFAULT_VALID_FEEDBACK}</div>
          <div className="invalid-feedback">Please enter a description.</div>
        </div>
      </Form>
    </ModalForm>
  );
}
