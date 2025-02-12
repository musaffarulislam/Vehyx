import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LogoImage from "@/assets/VehyxLogo.png"
import Image from "next/image"
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-8 border-none", className)} {...props}>
      <Card className="border-none flex flex-col gap-12 bg-white p-6 py-16">
        <CardHeader className="w-full flex justify-center items-center p-0">
          <Image src={LogoImage} alt="Vehyx Logo" width={120} height={120} />
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-tertiary">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-tertiary">Password</Label>
                <Input id="password" showPasswordToggle type="password" required />
                <div className="flex justify-between items-center text-black">
                  <div className="flex justify-center items-center gap-2">
                    <Input id="rememberMe" type="checkbox" required className="rounded-md border-0 bg-transparent text-primary focus:ring-0" />
                    <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
                  </div>
                  <div>
                    <a href="#" className="text-sm">Forgot Password?</a>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
