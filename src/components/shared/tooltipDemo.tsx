import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{/* {children} */}</TooltipTrigger>
        <TooltipContent>{/* {links} */}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
