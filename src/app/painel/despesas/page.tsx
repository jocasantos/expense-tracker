import ExpenseForm from "@/components/ExpenseForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Despesas() {
  const { userId } = auth();

  if (!userId) redirect("/");

  const user = await getUserById(userId);

  return (
    <>
      <div className="font-bold text-4xl tracking-tighter mb-4">Despesas</div>

      <Sheet>
        <Button asChild>
          <SheetTrigger>Adicionar Despesa</SheetTrigger>
        </Button>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Adicionar Despesa</SheetTitle>
            <div className="border-b-gray-100 border divide-border"></div>
            <div className="h-2"></div>
            <SheetDescription>
              <ExpenseForm action="Add" userId={user._id} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
