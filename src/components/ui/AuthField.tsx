type AuthFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  autoComplete?: string;
  error?: string;
};

export function AuthField({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  error,
}: AuthFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div className="flex w-[453px] flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[14px] font-medium leading-[1.2] text-shuttle-gray-950"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="h-[52px] w-full rounded-xl border border-solid border-shuttle-gray-100 bg-white px-6 text-[18px] leading-[1.6] text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400 focus-visible:border-persian-blue-800"
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-[12px] leading-[1.6] text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}