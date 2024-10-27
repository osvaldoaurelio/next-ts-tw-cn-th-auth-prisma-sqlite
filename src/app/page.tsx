"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-6 h-screen w-100 justify-center items-center">
      <ModeToggle />
      <Button
        onClick={() => {
          toast({
            title: "Teste do toast",
            description: "Tá funcionando!",
          });
        }}
      >
        toast
      </Button>
    </div>
  );
}
