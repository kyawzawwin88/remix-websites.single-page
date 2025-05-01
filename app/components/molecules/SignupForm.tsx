import { Button } from "~/components/atoms/Button";
import { Input } from "~/components/atoms/Input";
import { useState } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for signing up: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Notify Me</Button>
    </form>
  );
}
