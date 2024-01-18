import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";

export function Contact() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PaperAirplaneIcon className="h-6 w-6 text-black dark:text-white cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Biz bilan bog'laning.</DialogTitle>
          <DialogDescription>
            Kurslar haqida ma'lumot olishingiz uchun formani to'diring va
            yuborish tugmasini bosing!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Telegram username
            </Label>
            <Input id="username" className="col-span-3" placeholder="@username"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Xabaringiz
            </Label>
            <textarea id="message" placeholder="shu yerga yozing" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Yuborish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
