import React, { useRef, useEffect, FC, useState } from 'react';
import './styles.scss';
import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';
import { ReactComponent as RemoveIcon } from './close.svg';
import {
  MultiselectItem,
  MultiselectProps,
  OptionListProps,
  SelectedValuesProps,
} from './types';
import { Input } from '../input';

const OptionsList = ({
  options,
  hideCheckbox,
  selectedValues,
  onItemSelect,
}: OptionListProps) => {
  return options.length === 0 ? (
    <p className="option__empty">No available options</p>
  ) : (
    <ul className="option__list">
      {options.map((option) => {
        const isActive = selectedValues.includes(option.value);
        return (
          <li
            key={option.value}
            className={`option__item ${hideCheckbox ? 'no-checkbox' : ''} ${
              isActive ? 'is-active' : ''
            }`}
            onClick={() => onItemSelect(option)}
          >
            {!hideCheckbox && (
              <span className="option__checkbox">
                <Input type="checkbox" checked={isActive} onChange={() => {}} />
              </span>
            )}
            <span className="option__text">{option.text}</span>
          </li>
        );
      })}
    </ul>
  );
};

const SelectedValues = ({
  values,
  isAllSelected,
  isSingle,
  onRemoveItem,
}: SelectedValuesProps) => (
  <>
    {isAllSelected ? (
      <p className="chip__single">All</p>
    ) : isSingle ? (
      <p className="chip__single">{values[0]?.text}</p>
    ) : (
      values.map((option, index) => (
        <button
          type="button"
          className="chip"
          key={index}
          onClick={() => onRemoveItem(option.value)}
        >
          {option.text}
          <span className="chip__remove">
            <RemoveIcon />
          </span>
        </button>
      ))
    )}
  </>
);

const Multiselect: FC<MultiselectProps> = ({
  options,
  values,
  hideCheckbox,
  isSingle,
  placeholder,
  dropdownPlaceholder,
  disabled,
  onChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAllSelected, setAllSelected] = useState(false);
  const [selectedValueObjs, setSelectedValueObj] = useState<MultiselectItem[]>(
    []
  );
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    resetSelectedValues();
    if (values.includes('all')) {
      setAllSelected(true);
      onChange(['all']);
    }
  }, []);

  useEffect(() => {
    resetSelectedValues();
  }, [values, options]);

  useEffect(() => {
    if (showDropdown) {
      dropdownRef.current?.focus();
    }
  }, [showDropdown]);

  const resetSelectedValues = () => {
    const valuesObj = values.reduce((acc: MultiselectItem[], v) => {
      const val = options.find((o) => o.value === v);
      if (val) acc.push(val);
      return acc;
    }, []);
    setSelectedValueObj(valuesObj as MultiselectItem[]);
  };

  const handleRemoveItem = (value: string) => {
    const newValues = removeItem(value);
    onChange(newValues);
  };

  const handleItemSelect = (item: MultiselectItem) => {
    if (isSingle) {
      handleSingleSelect(item.value);
    } else {
      handleMultiSelect(item.value);
    }
  };

  const handleMultiSelect = (value: string) => {
    if (value === 'all') {
      setAllSelected(true);
      onChange(['all']);
      return;
    }

    let localValues = [...values];
    let returnVal: string[] = [];
    if (isAllSelected) {
      setAllSelected(false);
      localValues = removeItem('all');
    }
    if (localValues.includes(value)) {
      returnVal = removeItem(value);
    } else {
      returnVal = [...localValues, value];
    }

    onChange(returnVal);
  };

  const handleSingleSelect = (value: string) => {
    setAllSelected(value === 'all');
    onChange([value]);
    setShowDropdown(false);
  };

  const removeItem = (value: string) => {
    return values.filter((v) => v !== value);
  };

  return (
    <div className="select__container">
      <div
        className={`input-box ${values.length > 0 && 'has-values'} ${
          showDropdown && 'dropdown-open'
        }`}
      >
        {placeholder && values.length === 0 && (
          <span className="input-box__placeholder">{placeholder}</span>
        )}
        <SelectedValues
          isAllSelected={isAllSelected}
          isSingle={isSingle}
          placeholder={placeholder}
          values={selectedValueObjs}
          onRemoveItem={handleRemoveItem}
        />
        <button
          type="button"
          className="input-box__arrow"
          onClick={() => setShowDropdown(true)}
        >
          <ArrowDownIcon />
        </button>
      </div>
      <div
        className={`dropdown ${showDropdown ? 'show' : ''}`}
        tabIndex={-1}
        ref={dropdownRef}
        onBlur={() => {
          setShowDropdown(false);
        }}
      >
        {dropdownPlaceholder && (
          <p className="placeholder">{dropdownPlaceholder}</p>
        )}
        <OptionsList
          options={options}
          hideCheckbox={hideCheckbox || isSingle}
          selectedValues={values}
          onItemSelect={handleItemSelect}
        />
      </div>
    </div>
  );
};

export { Multiselect };
