import { Label } from "./ui/label";

export function Result() {
  const progressData = [74, 68, 52];

  const avg = Number(
    (
      progressData.reduce((acc, curr) => acc + curr, 0) / progressData.length
    ).toFixed(2),
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <Label className="text-2xl">Result</Label>
      <RadialProgress label="Overall" progress={avg} radius={40} stroke={6} />
      <div className="flex items-center justify-center">
        <RadialProgress
          bottomLabel="MCQ's"
          progress={progressData[0]}
          radius={30}
          stroke={5}
        />
        <RadialProgress
          bottomLabel="OneWord"
          progress={progressData[1]}
          radius={30}
          stroke={5}
        />
        <RadialProgress
          bottomLabel="Subjective"
          progress={progressData[2]}
          radius={30}
          stroke={5}
        />
      </div>
    </div>
  );
}

function RadialProgress(props: {
  bottomLabel?: string;
  label?: string;
  progress: number;
  radius: number;
  stroke?: number;
}) {
  const circumference = props.radius * 2 * Math.PI;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-red-200 stroke-current"
            strokeWidth={`${props.stroke}`}
            cx="50"
            cy="50"
            r={`${props.radius}`}
            fill="transparent"
            style={{
              color: "hsl(var(--secondary))",
            }}
          ></circle>
          <circle
            className="text-indigo-500 stroke-current"
            strokeWidth={`${props.stroke}`}
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={`${props.radius}`}
            fill="transparent"
            strokeDashoffset={`calc(${circumference} - (${props.progress} / 100) * ${circumference})`}
            style={{
              strokeDasharray: `${circumference}`,
              transition: "stroke-dashoffset 0.35s",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          ></circle>
        </svg>
        <div className="flex flex-col absolute top-0 left-0 w-full h-full items-center justify-center">
          <Label className="text-lg">{props.progress}%</Label>
          <Label className="text-lg">{props.label}</Label>
        </div>
      </div>
      <Label className="text-lg">{props.bottomLabel}</Label>
    </div>
  );
}
