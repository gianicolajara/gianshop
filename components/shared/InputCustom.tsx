import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  label?: string;
} & InputProps;

const InputCustom = ({ label, name, ...rest }: Props) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={name}>{label ?? label}</Label>
      <Input {...rest} />
    </div>
  );
};

export default InputCustom;
