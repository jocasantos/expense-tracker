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

export default function Despesas() {
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
              <ExpenseForm />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
