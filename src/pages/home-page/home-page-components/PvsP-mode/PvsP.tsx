import Select from "../../../../components/atoms/select/Select";
import useStateRelatedToProp from "../../../../hooks/useStateRelatedToProp";

const options = [
  { value: "3", label: "3x3" },
  { value: "4", label: "4x4" },
  { value: "5", label: "5x5" },
];

type PvsPpropsType = {
  onChange: (size: number) => void;
  initialSize: number;
};

const PvsP = (props: PvsPpropsType) => {
  const [gridSize, setGridSize] = useStateRelatedToProp(
    props.initialSize.toString()
  );

  const onChange = (size: string) => {
    setGridSize(size);
    props.onChange(+size);
  };

  return (
    <Select
      options={options}
      value={gridSize}
      onChange={onChange}
      name="Size:"
    />
  );
};

export default PvsP;
