import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="py-5">
          <SignUp />
        </div>
      </div>
    </>
  );
}
