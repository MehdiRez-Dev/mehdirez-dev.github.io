"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // aovid rehydration errors

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
