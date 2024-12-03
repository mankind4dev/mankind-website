import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="py-5">
          <SignIn />
        </div>
      </div>
    </>
  );
}
