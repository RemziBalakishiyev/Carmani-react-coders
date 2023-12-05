import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, Button, FormHelperText } from "@mui/material";
function ProductForm() {
  const initalFormValue = useMemo(
    () => ({
      productName: "",
      productPrice: 0,
      productModel: "",
    }),
    []
  );

  const [productForm, setproductForm] = useState(initalFormValue);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setproductForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    // console.log(validate(productForm));
    setformErrors(validate(productForm));

    const content = {
      method: "POST",
      body: JSON.stringify({
        Model: productForm.productModel,
        id: Math.random(),
        name: productForm.productName,
        img:
          "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: productForm.productPrice,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch(
      "https://carmani-projects-default-rtdb.firebaseio.com/products.json",
      content
    )
      .then((response) => {
        return response.json();
      })
      .then((responseValue) => {
        console.log(responseValue);
      });
    setisSubmit(true);
  };
  const validate = (value) => {
    const errorMessage = {};

    if (!value.productName) {
      errorMessage.productName = "Product Name is required";
    }
    if (value.productPrice < 0 || value.productPrice > 10000000) {
      errorMessage.productPrice = "Product Price is required";
    }

    if (!value.productModel) {
      errorMessage.productModel = "Product model is required";
    }

    return errorMessage;
  };

  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },

        width: "100%",
        padding: "16px 36px",
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <FormControl
          component={"form"}
          size='medium'
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          fullWidth={true}
        >
          <div>
            <TextField
              error={!productForm.productName && isSubmit}
              id='outlined-required'
              label='Product Name'
              name='productName'
              value={productForm.productName}
              onChange={handleChange}
            />

            <FormHelperText error={isSubmit}>
              {formErrors.productName}
            </FormHelperText>
          </div>
          <div>
            <TextField
              error={!productForm.productName && isSubmit}
              id='outlined-required'
              label='Product Price'
              type='number'
              name='productPrice'
              onChange={handleChange}
              value={productForm.value}
            />
            <FormHelperText error={isSubmit}>
              {formErrors.productPrice}
            </FormHelperText>
          </div>
          <div>
            <TextField
              error={!productForm.productModel && isSubmit}
              id='outlined-required'
              label='Product Model'
              type='text'
              name='productModel'
              value={productForm.productModel}
              onChange={handleChange}
            />
            <FormHelperText error={isSubmit}>
              {formErrors.productModel}
            </FormHelperText>
          </div>

          <Button
            variant='contained'
            type='submit'
            sx={{ width: "300px", height: "50px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </Box>
  );
}

export default ProductForm;
