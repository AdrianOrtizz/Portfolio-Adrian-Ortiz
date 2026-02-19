import ErrorMessage from "./MessageError";

const FormField = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
}: any) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-zinc-400 ml-1">{label}</label>
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={`w-full bg-zinc-950/50 border ${
        error ? "border-red-500/50" : "border-zinc-800"
      } rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all placeholder:text-zinc-700`}
    />
    <ErrorMessage message={error} />
  </div>
);

export default FormField;
