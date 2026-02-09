



type Props = {
  values: any;
  onChange: (name: string, value: any) => void;
};

export default function PersonalForm({ values, onChange }: Props) {
   {
  return (
    <div className="space-y-4">
      <input
        placeholder="First Name"
        value={values.first_name}
        onChange={(e) => onChange("first_name", e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={values.last_name}
        onChange={(e) => onChange("last_name", e.target.value)}
      />

      <input
        type="date"
        value={values.dob}
        onChange={(e) => onChange("dob", e.target.value)}
      />
    </div>
  );
}
}
