'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Checkbox, { type CheckboxProps } from '../Checkbox/Checkbox';
import Flex from '../Flex/Flex';

export interface PriorityItemProps extends Pick<CheckboxProps, 'onChange'> {
  label: string;
  dotColor?: CSSProperties['color'];
  checked?: boolean;
}

const PriorityItem: React.FC<PriorityItemProps> = ({
  label,
  checked = false,
  dotColor = 'blue',
  onChange,
}) => {
  return (
    <Flex alignItems="center" gap={10}>
      <Flex alignItems="center" gap={5}>
        <div></div>
        <label>{label}</label>
        <style jsx>{`
          label {
            color: var(--text-color-1);
            cursor: default;
            font-size: 14px;
            font-weight: 500;
            line-height: 21.7px;
          }

          div {
            width: 10px;
            height: 10px;
            border-radius: 50px;
            background-color: ${dotColor};
          }
        `}</style>
      </Flex>
      <Checkbox {...{ checked, onChange }} />
    </Flex>
  );
};

type PriorityTypes = 'extreme' | 'moderate' | 'low';

export interface PriorityProps {
  defaultValue?: PriorityTypes;
  onChange?: (priority: PriorityTypes | null) => void;
  name?: string;
}

export const Priority: React.FC<PriorityProps> = ({
  defaultValue,
  onChange = () => {},
  name = '',
}) => {
  const [priority, setPriority] = useState<PriorityTypes | null>(
    defaultValue ?? null,
  );

  const onChangeHandler = (checked: boolean, type: PriorityTypes) => {
    checked && setPriority(type);
    !checked && setPriority(null);
  };

  useEffect(() => {
    onChange(priority);
  }, [priority]);

  return (
    <Flex alignItems="center" gap={30}>
      <input type="hidden" value={priority ?? undefined} {...{ name }} />
      <PriorityItem
        label="Extreme"
        dotColor="#fa5252"
        checked={priority === 'extreme'}
        onChange={(checked) => onChangeHandler(checked, 'extreme')}
      />
      <PriorityItem
        label="Moderate"
        dotColor="#15aabf"
        checked={priority === 'moderate'}
        onChange={(checked) => onChangeHandler(checked, 'moderate')}
      />
      <PriorityItem
        label="Low"
        dotColor="#40c057"
        checked={priority === 'low'}
        onChange={(checked) => onChangeHandler(checked, 'low')}
      />
    </Flex>
  );
};

export default Priority;
