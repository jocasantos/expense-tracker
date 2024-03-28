"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { ExpenseFormProps, defaultValues } from "@/types/index.d";
import { useTheme } from "next-themes";

const formSchema = z.object({
  Descrição: z
    .string()
    .min(1, { message: "Insira a descrição da despesa" })
    .max(50, { message: "Descrição demasiado longa" }),
  Categoria: z.string({ required_error: "Escolha uma categoria" }),
  Valor: z.coerce.number({ invalid_type_error: "Insira o valor da despesa" }),
  Data: z.date(),
});

const ExpenseForm = ({ action, data }: ExpenseFormProps) => {
  const { theme, resolvedTheme } = useTheme(); // Access the theme state

  // Determine the text color based on the theme
  const textColor = resolvedTheme === "dark" ? "text-white" : "text-black";

  const initialValues =
    data && action === "Update"
      ? {
          Descrição: data.title,
          Categoria: data.category,
          Valor: data.amount,
          Data: data.date,
        }
      : defaultValues;

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Descrição"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-500">Descrição</FormLabel>
              <FormControl>
                <Input
                  className="${textColor}"
                  placeholder="ex: cinema"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Descrição da despesa que queres adicionar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-500">Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleciona a categoria da despesa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="carro">Carro</SelectItem>
                  <SelectItem value="lazer">Lazer</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Podes adicionar categorias{" "}
                <Link href="/examples/forms">AQUI</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Valor"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-500">Valor</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="${textColor}"
                  placeholder="€"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Valor da despesa referida acima.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Data"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-blue-500">Data</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Escolhe uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Dia da despesa</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submeter</Button>
      </form>
    </Form>
  );
};

export default ExpenseForm;
