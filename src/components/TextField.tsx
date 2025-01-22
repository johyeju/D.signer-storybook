import { useState } from 'react';
import IconButton from './IconButton';
import { IconType } from './IconTypes';

interface ITextFieldProps {
  iconType: IconType; // IconType으로 수정
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  id: string;
}

export default function TextField({
  id,
  iconType,
  onIconClick,
  placeholder,
  onChange,
  value,
}: ITextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          data-testid={id}
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          type="text"
          onChange={onChange}
        />
        {!!value && <IconButton onClick={onIconClick} type={iconType} />}
      </div>
    </div>
  );
}
