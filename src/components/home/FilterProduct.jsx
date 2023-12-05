import React, { useContext } from "react";
import {
  Card,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ProductContext } from "../../store/product-context";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const types = [
  {
    id: 1,
    value: "Sedan",
  },
  {
    id: 2,
    value: "Jeep",
  },
  {
    id: 3,
    value: "Van",
  },
  // {
  //   id: 4,
  //   value: "Hypercar",
  // },
];
function FilterProduct({ filteredProduct }) {
  const [sort, setsort] = React.useState(0);
  const [value, setValue] = React.useState(1);

  let PrContext = useContext(ProductContext);
  const filteredIncrease = () => {
    if (PrContext.products) {
      PrContext.products = PrContext.products.sort(function (a, b) {
        return a.price - b.price;
      });
    }
  };

  const filteredDecrease = () => {
    if (PrContext.products) {
      PrContext.products = PrContext.products.sort(function (a, b) {
        return b.price - a.price;
      });
    }
  };
  const handleChange = (event) => {
    setsort(event.target.value);
    switch (sort) {
      case 1:
        filteredDecrease();
        PrContext.handleFilter();
        break;
      case 2:
        filteredIncrease();
        PrContext.handleFilter();
      default:
        break;
    }
  };

  const handleChangeTab = function (event, newValue) {
    setValue(newValue);

    console.log(PrContext.products);
    PrContext.filteredProducts = PrContext.handleFilterForType(
      newValue,
      PrContext.products
    );

    PrContext.handleFilter();
  };
  return (
    <Box
      sx={{
        width: "900px",
        padding: "16px 36px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FormControl
        sx={{
          width: "300px",
        }}
      >
        <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={sort}
          label='Filter'
          onChange={handleChange}
        >
          <MenuItem value={1}>Qiymət çox</MenuItem>
          <MenuItem value={2}>Çoxdan aza</MenuItem>
        </Select>
      </FormControl>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChangeTab} aria-label='lab API tabs example'>
            {types.map((tb) => (
              <Tab label={tb.value} value={tb.id} />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}

export default FilterProduct;
