type Option = {
  /**
   * Label to be display
   */
  label: string;

  /**
   * Value of the option
   */
  value: string;
};

type SelectProps = {
  /**
   * Name of the input
   */
  name: string;

  /**
   * Options of the select input
   */
  options: Option[];

  /**
   * Function to be executed when input value change
   * @param value - select value to be set
   */
  onChange: (value: string) => void;
};

export type { SelectProps };
