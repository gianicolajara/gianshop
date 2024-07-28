"use client";

import InputCustom from "@/components/shared/InputCustom";
import { TypographySmall } from "@/components/shared/TypographySmall";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center dark">
      <Card className="h-min max-w-96 w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <TypographySmall>Only for employers</TypographySmall>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5 flex-1 h-full">
          <InputCustom
            type="text"
            placeholder="username"
            label="Username"
            name="username"
          />
          <InputCustom
            type="password"
            placeholder="password"
            label="Password"
            name="password"
          />
          <Button>Login</Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;
