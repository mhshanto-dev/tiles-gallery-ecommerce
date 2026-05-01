"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
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

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, image, email, password)
    const {data, error} = await authClient.signUp.email({
      name,email,password,image,
    })
    console.log({data, error})
  };

  return (
    <Card className="border mx-auto w-[420px] py-8 px-6 mt-10 shadow-lg rounded-2xl">
      <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>

      <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
        
        <TextField isRequired name="name" type="text">
          <Label className="text-sm font-medium">Name</Label>
          <Input placeholder="Enter your name" className="rounded-lg" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label className="text-sm font-medium">Image URL</Label>
          <Input placeholder="Image URL" className="rounded-lg" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium">Email</Label>
          <Input placeholder="john@example.com" className="rounded-lg" />
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
          <Input placeholder="Enter your password" className="rounded-lg" />
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
    </Card>
  );
}