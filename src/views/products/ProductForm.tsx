// import "./AccountPage.scss";
import { useEffect, useState } from "react";
import { Form as BForm } from "react-bootstrap";
import { Form } from "../../components/Form";
import FormInputGroup, {
  DEFAULT_VALID_FEEDBACK,
} from "../../components/FormInputGroup";
import { Model } from "../../models";
import { RestService } from "../../services/RestService";

// eslint-disable-next-line no-unused-vars
export const FORM_ID = "product-form";

type Props = {
  productId?: string; // if exists => update product
};

export default function ProductForm({ productId }: Props) {
  const CATEGORY_ID = "product-category";
  const PRODUCT_ID = "product-name";
  const PRODUCT_QUANTITY = "product-quantity";
  const PRODUCT_DESCRIPTION = "product-description";

  const [product, setProduct] = useState<Model.Product>({
    uid: "",
    category: {
      name: "unknow",
      uid: "unknow",
    },
    imageUrl: "",
    name: "",
    owner: RestService.currentAccount,
    quantity: 1,
    description: "",
  });

  useEffect(() => {
    console.log("effect");
    const foundProduct = RestService.products.find((p) => p.uid === productId);
    if (productId && foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  // useEffect(() => {
  //   function handleChange() {
  //     console.log("effect2");
  //     setProduct(product);
  //   }
  // }, [product]);

  // useEffect(() => {
  //   function handleProductChange() {
  //     setProduct(product);
  //   }
  // });

  function onUpdateProduct(formData: FormData): void {
    console.log(formData);

    // let foundCategory = RestService.categories.find(
    //   (c) => c.uid === formData.get(CATEGORY_ID)
    // );
    // const newProduct: Model.Product = {
    //   uid: "1-product",
    //   category: foundCategory
    //     ? foundCategory
    //     : {
    //         name: "unknow",
    //         uid: "unknow",
    //       },
    //   imageUrl: "https://zezere",
    //   name: formData.get(PRODUCT_ID) as string,
    //   owner: RestService.currentAccount,
    //   quantity: parseInt(formData.get(PRODUCT_QUANTITY) as string) as number,
    //   description: formData.get(PRODUCT_DESCRIPTION) as string,
    // };
    // setProduct({
    //   uid: "1-product",
    //   category: foundCategory
    //     ? foundCategory
    //     : {
    //         name: "unknow",
    //         uid: "unknow",
    //       },
    //   imageUrl: "https://zezere",
    //   name: formData.get(PRODUCT_ID) as string,
    //   owner: RestService.currentAccount,
    //   quantity: parseInt(formData.get(PRODUCT_QUANTITY) as string) as number,
    //   description: formData.get(PRODUCT_DESCRIPTION) as string,
    // });
    // RestService.products.push(product);
  }

  return (
    <Form id={FORM_ID} onSubmit={onUpdateProduct}>
      {/* product name */}
      <FormInputGroup
        id={PRODUCT_ID}
        label="Name"
        name={PRODUCT_ID}
        type="text"
        placeholder="What is his name please ?"
        required
        regexp="[A-Za-z0-9._%+-]{2,100}"
        value={product.name}
        onInputChange={() => {
          // console.log("value = " + value);
          // const p = Object.assign(product);
          // p.name = value;
          // setProduct(p);
        }}
        //TODO invalidFeedBack={}
        //TODO validityChecker={}
      />

      {/* product category */}
      <div className="form-item">
        <label htmlFor={CATEGORY_ID} className="form-label">
          Category
        </label>
        <BForm.Select
          id={CATEGORY_ID}
          aria-label="Default select example"
          required
          name={CATEGORY_ID}
          value={product.category.uid}
          onChange={() => {}}
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

      {/* product quantity */}
      <FormInputGroup
        id={PRODUCT_QUANTITY}
        label="Quantity"
        name={PRODUCT_QUANTITY}
        type="text"
        placeholder="How many you can sell ?"
        required
        regexp="[1-9][0-9]{0,6}" // 1 to 9.999.999
        value={product.quantity.toString()}
        //TODO invalidFeedBack={}
        //TODO validityChecker={}
        onInputChange={(value) => {
          product.quantity = parseInt(value);
        }}
      />

      {/* description */}
      <div className="form-item">
        <BForm.Label>Description</BForm.Label>
        <textarea
          className="form-control"
          id={PRODUCT_DESCRIPTION}
          name={PRODUCT_DESCRIPTION}
          placeholder="What do you sell ?"
          rows={3}
          required
          value={product.description}
          onChange={(event) => {
            const prod = Object.assign(product);
            prod.description = (event.target as HTMLTextAreaElement).value;
            setProduct(prod);
            console.log(product.description);
          }}
        ></textarea>

        {/* test */}
        <input
          type="text"
          value={product.name}
          onChange={(e) => {
            product.name = e.target.value;
            setProduct(product);
            console.log(product);
          }}
        />
        <div className="valid-feedback">{DEFAULT_VALID_FEEDBACK}</div>
        <div className="invalid-feedback">Please enter a description.</div>
      </div>
    </Form>
  );
}
