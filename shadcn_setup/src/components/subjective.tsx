import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LogOutIcon,
  MenuIcon,
  MicIcon,
} from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function Subjective() {
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <div className="flex w-full justify-between items-center">
        <MenuIcon />
        <Label className="text-xl">Subjective Question</Label>
        <LogOutIcon />
      </div>

      <div className="p-8 flex flex-col w-full">
        <Label className={"my-2 text-neutral-400"}>Question</Label>
        <Label className="px-4 py-2">
          What does the first law of thermodynamics state?
        </Label>
        <div className="flex w-full items-center justify-between">
          <Label className={"my-2 text-neutral-400"}>Answer</Label>
          <Button variant={"outline"} size={"icon"}>
            <MicIcon className="h-4 w-4" />
          </Button>
        </div>
        <Textarea className="my-2" placeholder="Write your answer here..." />
        <div className="flex w-full  justify-between items-center my-2">
          <Button>
            <ChevronLeftIcon /> Prev
          </Button>
          <Button>Submit</Button>
          <Button>
            Next <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
