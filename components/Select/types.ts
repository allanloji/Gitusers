type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  name: string;
  options: Option[];
  onChange: (value: string) => void;
};

export type { SelectProps };
