import { Select } from "@chakra-ui/react";
const SelectBar = () => {
  return (
    <Select placeholder="Select country" size="md" maxW="80%">
      <option value="usa">United states of America</option>
      <option value="uk">United Kingdom</option>
      <option value="aus">Australia</option>
    </Select>
  );
};

export default SelectBar;
