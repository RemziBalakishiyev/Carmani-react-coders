import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ProductContext } from "../store/product-context";
import Card from "./Styles/Card";

const Basket = forwardRef(({ title }, ref) => {
  const innerRef = useRef();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const PrContext = useContext(ProductContext);
  useImperativeHandle(ref, () => {
    return {
      closeHandle: () => setOpen(false),
      openHandle: () => setOpen(true),
    };
  });

  return (
    <Dialog
      ref={innerRef}
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      sx={{ height: "600px" }}
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {PrContext.cardItems.map((item) => (
            <Card
              id={item.id}
              image={item.img}
              title={item.productName}
              price={item.price}
              description={item.model}
            ></Card>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default Basket;
