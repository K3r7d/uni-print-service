import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Vector2Icon } from './Vector2Icon.js';
import classes from './DropDown.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  selectedValue: number | null;
  setSelectedValue: (value: number) => void; 

}

export const ChooseColour: FC<Props> = memo(function ChooseColour(props) {
  const { selectedValue, setSelectedValue } = props; // Receive props for external state management
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleOptionSelect = (option: number) => {
    setSelectedValue(option); // Update external state with integer value
    setDropdownOpen(false);   // Close dropdown
  };

  return (
    <div className={classes.root}>
      <div className={classes.dropdownToggle} onClick={toggleDropdown}>
        <span>{selectedValue === 1 ? "In màu" : selectedValue === 2 ? "In trắng đen" : "Màu in"}</span>
      </div>
      
      {isDropdownOpen && (
        <div className={classes.dropdownMenu}>
          <div className={classes.option} onClick={() => handleOptionSelect(1)}>In màu</div>
          <div className={classes.option} onClick={() => handleOptionSelect(2)}>In trắng đen</div>
        </div>
      )}


      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon} />
      </div>

    </div>
  );
});

