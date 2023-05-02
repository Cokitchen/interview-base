export type MultiselectItem = {
  text: string;
  value: string;
};

export type MultiselectProps = {
  options: MultiselectItem[];
  values: string[];
  placeholder?: string;
  dropdownPlaceholder?: string;
  disabled?: boolean;
  hasAll?: boolean;
  isSingle?: boolean;
  hideCheckbox?: boolean;
  onChange: (values: string[]) => void;
};

export type SelectedValuesProps = {
  values: MultiselectItem[];
  isAllSelected: boolean;
  isSingle?: boolean;
  placeholder?: string;
  onRemoveItem: (value: string) => void;
};

export type OptionListProps = {
  options: MultiselectItem[];
  hideCheckbox?: boolean;
  selectedValues: string[];
  onItemSelect: (option: MultiselectItem) => void;
};
