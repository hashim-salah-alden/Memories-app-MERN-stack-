import { useField } from "formik";
import { cn } from "../../lib/utils";

const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        )}
        {...field}
        {...props}
        margin="normal"
        required
        fullWidth
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomField;
