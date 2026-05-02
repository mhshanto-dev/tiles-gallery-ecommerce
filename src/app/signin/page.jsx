"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    // ✅ FIX: correct way to get values from HeroUI Form
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      return toast.error(error.message || "Something went wrong");
    }

    toast.success("Login successful!");

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-[420px] py-8 px-6 mt-10 shadow-lg rounded-2xl">
      <Toaster position="top-center" richColors />

      <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

      <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium">Email</Label>
          <Input
            name="email"
            placeholder="john@example.com"
            className="rounded-lg"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium">Password</Label>
          <Input
            name="password"
            placeholder="Enter your password"
            type="password"
            className="rounded-lg"
          />
          <Description className="text-xs text-gray-500">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            <Check />
            Submit
          </Button>

          <Button
            type="reset"
            variant="secondary"
            className="rounded-lg px-4 py-2"
          >
            Reset
          </Button>
        </div>
      </Form>

      <p className="text-center text-2xl text-blue-500">OR</p>

      <Button onClick={handleGoogleSignIn} className="w-full">
        <GrGoogle />
        Sign In With Google
      </Button>
    </Card>
  );
}