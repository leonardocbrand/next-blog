import { FieldError } from "react-hook-form";

type Props = {
  errorState: FieldError | undefined;
};

const ErrorMsg = ({ errorState }: Props) => {
  return (
    errorState && (
      <span className="text-justify text-xs text-red-500">
        {errorState.message}
      </span>
    )
  );
};

export default ErrorMsg;
