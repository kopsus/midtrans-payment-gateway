import { RegisterForm } from "@/components/form/register-form";

export default function SignUp() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
