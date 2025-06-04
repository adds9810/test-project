// src/components/SajuTable.tsx
import { observer } from "mobx-react-lite";
import { sajuStore } from "@/stores/sajuStore";

type ElementType = {
  stem: string;
  branch: string;
  tenStar1: string;
  tenStar2: string;
  twelveLifeStage: string;
  twelveSpiritKill: string;
  noblePeople: string;
};

type SaJuTable = {
  hour: ElementType;
  day: ElementType;
  month: ElementType;
  year: ElementType;
};

type ElementKey = keyof ElementType;
type ColKey = keyof SaJuTable;

const rowDefs: { bigLabel: string; smallLabel: string; key: ElementKey }[] = [
  { bigLabel: "十星", smallLabel: "십성", key: "tenStar1" },
  { bigLabel: "天干", smallLabel: "천간", key: "stem" },
  { bigLabel: "地支", smallLabel: "지지", key: "branch" },
  { bigLabel: "十星", smallLabel: "십성", key: "tenStar2" },
  { bigLabel: "十二運星", smallLabel: "십이운성", key: "twelveLifeStage" },
  { bigLabel: "十二神殺", smallLabel: "십이신살", key: "twelveSpiritKill" },
  { bigLabel: "貴人", smallLabel: "귀인", key: "noblePeople" },
];

const colDefs: { key: ColKey; label: string }[] = [
  { key: "hour", label: "時" },
  { key: "day", label: "日" },
  { key: "month", label: "月" },
  { key: "year", label: "年" },
];

const elementStyle: Record<string, string> = {
  木: "bg-[#18868C] text-white",
  火: "bg-[#C23030] text-white",
  土: "bg-[#f1a10d] text-white",
  金: "bg-white border-1 border-black",
  水: "bg-[#2F2F2F] text-white",
};

export const SajuTable = observer(() => {
  const data = sajuStore.saju;

  function getElementStyle(val?: string): string {
    if (!val) return "";
    const element = val[val.length - 1]; // "乙木" → "木"
    return elementStyle[element] || "";
  }

  return (
    <table className="border-collapse border-r-2 border-b-2 text-center">
      <colgroup>
        <col span={1} className="w-15" />
        {colDefs.map((_, i) => (
          <col key={i} className="w-20" />
        ))}
      </colgroup>
      <thead>
        <tr className="font-chinese leading-none">
          <th className="py-[15px] text-[20px] border-b-2 border-r-2 border-black"></th>
          {colDefs.map((col) => (
            <th
              key={col.key}
              className="py-[15px] text-[20px] border-b-2 border-b-black border-r-1 border-r-[#8A8A8A] "
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowDefs.map(({ bigLabel, smallLabel, key }) => (
          <tr key={key}>
            <th
              className={` border-r-2 ${
                smallLabel === "천간"
                  ? "border-r-black border-b-1 border-b-[#8A8A8A]"
                  : "border-b-2 border-black"
              }`}
            >
              <span className="block font-chinese leading-none text-[12px] text-black">
                {bigLabel}
              </span>
              <span className="block text-[8px] leading-none text-black">
                ({smallLabel})
              </span>
            </th>
            {colDefs.map((col) => {
              const cell = data[col.key][key];

              return (
                <td
                  key={`${col.key}-${key}`}
                  className={`py-[8px] px-[4px] bg-white ${
                    col.key === "year" ? "" : "border-r-1 border-r-[#8A8A8A]"
                  } ${
                    key === "stem"
                      ? "border-b-1 border-b-[#8A8A8A]"
                      : "border-b-2 border-b-black"
                  }`}
                >
                  {Array.isArray(cell) ? (
                    cell.length > 0 ? (
                      cell.map((v, i) => (
                        <div key={i} className={`${i > 0 ? "mt-1" : ""}`}>
                          <span className="block font-chinese leading-none text-[15px] text-black">
                            {v.hanja}
                          </span>
                          <span className="block text-[10px] text-black">
                            ({v.label})
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="block text-[10px] text-black">
                        (없음)
                      </span>
                    )
                  ) : (
                    <>
                      {["stem", "branch"].includes(key) ? (
                        <div
                          className={`flex flex-col gap-1 rounded-xl p-1 box-border ${getElementStyle(
                            cell.val
                          )}`}
                        >
                          <span className="block text-[8px]">{cell.label}</span>
                          <span className="block font-chinese leading-none text-[16px]">
                            {cell.hanja}
                          </span>
                          <span className="block text-[8px] leading-none">
                            {cell.val}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <span className="block font-chinese leading-none text-[15px] text-black">
                            {cell.hanja}
                          </span>
                          <span className="block text-[10px] leading-none text-black">
                            ({cell.label})
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
});
