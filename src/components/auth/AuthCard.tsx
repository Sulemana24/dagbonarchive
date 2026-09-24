import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../public/images/logo.png";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type Mode = "login" | "signup";

export function AuthCard({ mode }: { mode: Mode }) {
  const isLogin = mode === "login";

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 py-12">
      <Card className="w-full max-w-md p-8  shadow-sm">
        <div className="flex justify-center">
          <Image
            src={LogoImg}
            alt="Dagbon Archive"
            width={160}
            height={160}
            priority
            className="h-40 w-auto object-contain"
          />
        </div>

        <div className=" text-center">
          <h1 className="font-display text-2xl font-semibold text-ink">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            {isLogin
              ? "Sign in to continue to your account"
              : "Join Dagbon Archive and start your journey"}
          </p>
        </div>

        <form className="mt-7 space-y-4">
          {!isLogin && (
            <Input
              id="name"
              label="Full name"
              type="text"
              placeholder="Your name"
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          {isLogin ? (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-forest focus:ring-forest/30"
                />
                Remember me
              </label>
              <Link
                href="#"
                className="font-medium text-forest hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          ) : (
            <Input
              id="confirm"
              label="Confirm password"
              type="password"
              placeholder="Re-enter your password"
            />
          )}

          <Button type="submit" className="w-full cursor-pointer" size="lg">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted">Or continue with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full cursor-pointer">
            Google
          </Button>
          <Button variant="outline" className="w-full cursor-pointer">
            Facebook
          </Button>
        </div>

        <p className="mt-7 text-center text-sm text-muted">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link
            href={isLogin ? "/signup" : "/login"}
            className="font-medium text-forest hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </Card>
    </div>
  );
}
