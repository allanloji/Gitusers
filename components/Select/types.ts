type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  name: string;
  options: Option[];
  onChange: (value: string) => void;
};

export type { SelectProps };
