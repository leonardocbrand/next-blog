"use client";

import { Input } from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserLoginFormData, userLoginSchema } from "@/schemas/zod.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMsg } from "@/components/ErrorMsg.tsx";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(userLoginSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: UserLoginFormData) => {
    try {
      await axios.post("/login", data);
      router.refresh();

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        flex flex-col justify-center gap-2 rounded-lg bg-slate-200 p-12 text-center shadow-md sm:w-3/6 md:max-w-md"
      >
        <Input
          placeholder="email"
          id="email"
          type="email"
          register={register("email")}
        />
        <ErrorMsg errorState={errors.email} />
        <Input
          placeholder="password"
          id="password"
          type="password"
          register={register("password")}
        />
        <ErrorMsg errorState={errors.password} />
        <div className="mt-4">
          <button
            type="submit"
            className="w-full rounded-md border-2 bg-yellow-400 p-3 hover:bg-yellow-200 active:bg-yellow-500"
          >
            Cadastrar
          </button>
          <h4>
            Não possui uma conta?{" "}
            <Link
              href="/register"
              className="cursor-pointer text-sm text-blue-700 hover:text-blue-400"
            >
              Cadastrar
            </Link>
          </h4>
        </div>
      </form>
    </main>
  );
}

export default Register;
