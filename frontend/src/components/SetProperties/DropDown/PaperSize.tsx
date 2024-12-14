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

export const PaperSize: FC<Props> = memo(function PrintSide(props) {
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
      <span>
          {selectedValue === 1 
            ? "A3" 
            : selectedValue === 2 
            ? "A4" 
            : selectedValue === 3 
            ? "A5" 
            : "Khổ giấy"}
        </span>
      </div>
      
      {isDropdownOpen && (
        <div className={classes.dropdownMenu}>
          <div className={classes.option} onClick={() => handleOptionSelect(1)}>A3</div>
          <div className={classes.option} onClick={() => handleOptionSelect(2)}>A4</div>
          <div className={classes.option} onClick={() => handleOptionSelect(3)}>A5</div>
        </div>
      )}


      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon} />
      </div>

    </div>
  );
});


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

export const PaperSize: FC<Props> = memo(function PrintSide(props) {
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
      <span>
          {selectedValue === 1 
            ? "A3" 
            : selectedValue === 2 
            ? "A4" 
            : selectedValue === 3 
            ? "A5" 
            : "Khổ giấy"}
        </span>
      </div>
      
      {isDropdownOpen && (
        <div className={classes.dropdownMenu}>
          <div className={classes.option} onClick={() => handleOptionSelect(1)}>A3</div>
          <div className={classes.option} onClick={() => handleOptionSelect(2)}>A4</div>
          <div className={classes.option} onClick={() => handleOptionSelect(3)}>A5</div>
        </div>
      )}


      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon} />
      </div>

    </div>
  );
});

