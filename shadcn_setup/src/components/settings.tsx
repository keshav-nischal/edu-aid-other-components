import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface SettingsDataModel {
  model: string;
  difficulty: string;
  length: string;
  type: string;
}

export function Settings() {
  const types = ["MCQ", "Oneword", "Long"];
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  const lengths = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

  const models = ["GPT-4", "Llama", "Eleuther", "GPT-3"];

  const [settingsData, setSettingsData] = useState<SettingsDataModel>({
    model: models[0],
    difficulty: difficultyLevels[0],
    length: "3",
    type: types[0],
  });

  const onDataChange = (name: keyof SettingsDataModel, value: string) => {
    setSettingsData((prev) => ({ ...prev, [name]: value }));
  };

  const onSaveClick = () => {
    console.log(settingsData);
  };

  const onAddClick = () => { };

  return (
    <div className="p-8">
      <div className="flex justify-end mb-8">
        <Button onClick={onSaveClick} variant={"outline"}>
          Save
        </Button>
      </div>
      <div className="rounded-md py-[4px] px-[8px] bg-secondary flex justify-between items-center mb-4">
        <Label>Select model</Label>
        <Select
          value={settingsData.model}
          onValueChange={(val) => onDataChange("model", val)}
        >
          <SelectTrigger className="w-fit h-fit px-[8px] py-[2px] m-2">
            <SelectValue placeholder="Model" className="px-[4px]" />
          </SelectTrigger>
          <SelectContent>
            {models.map((model, idx) => (
              <SelectItem key={idx} value={model}>
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ChoiceWidget
        value={settingsData.type}
        choices={types}
        onChange={(v) => onDataChange("type", v)}
      />
      <ChoiceWidget
        value={settingsData.difficulty}
        choices={difficultyLevels}
        onChange={(v) => onDataChange("difficulty", v)}
      />
      <ChoiceWidget
        value={settingsData.length}
        choices={lengths}
        onChange={(v) => onDataChange("length", v)}
      />
      <div className="flex justify-center mt-8">
        <Button variant={"outline"} onClick={onAddClick}>
          Add
        </Button>
      </div>
    </div>
  );
}

function ChoiceWidget(props: {
  choices: string[];
  onChange: (val: string) => void;
  value: string;
}) {
  return (
    <ToggleGroup
      onValueChange={props.onChange}
      type="single"
      className="w-fill justify-between my-2"
      value={props.value.toString()}
    >
      {props.choices.map((choice, idx) => (
        <ToggleGroupItem
          key={idx}
          value={choice}
          aria-label="Toggle"
          variant={"outline"}
        >
          <Label>{choice} </Label>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
