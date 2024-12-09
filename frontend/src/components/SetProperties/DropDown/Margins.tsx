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
}

export const Margins: FC<Props> = memo(function MeniuSelectPages_optionDefault(props = {}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Cài đặt lề");

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  // Handle selecting an option from the dropdown
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {/* Trigger button for the dropdown */}
      <div className={classes.dropdownToggle} onClick={toggleDropdown}>
        <span className={classes.labelWrapper}>{selectedOption}</span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className={classes.dropdownMenu}>
          <div className={classes.option} onClick={() => handleOptionSelect("Mặc định")}>
            Mặc định
          </div>
          <div className={classes.option} onClick={() => handleOptionSelect("Rộng")}>
            Rộng
          </div>
          <div className={classes.option} onClick={() => handleOptionSelect("Hẹp")}>
            Hẹp
          </div>
        </div>
      )}

      {/* Icon */}
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon} />
      </div>
    </div>
  );
});
