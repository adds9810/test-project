// src/components/SajuTable.tsx
import { observer } from "mobx-react-lite";
import { sajuStore } from "@/stores/sajuStore";

type ElementType = {
  천간: string;
  지지: string;
  십성1: string;
  십성2: string;
  십이운성: string;
  십이신살: string;
  귀인: string;
};

type SaJuTable = {
  시: ElementType;
  일: ElementType;
  월: ElementType;
  년: ElementType;
};

type ElementKey = keyof ElementType;
type ColKey = keyof SaJuTable;

const rowDefs: { bigLabel: string; smallLabel: string; key: ElementKey }[] = [
  { bigLabel: "十星", smallLabel: "십성", key: "십성1" },
  { bigLabel: "天干", smallLabel: "천간", key: "천간" },
  { bigLabel: "地支", smallLabel: "지지", key: "지지" },
  { bigLabel: "十星", smallLabel: "십성", key: "십성2" },
  { bigLabel: "十二運星", smallLabel: "십이운성", key: "십이운성" },
  { bigLabel: "十二神殺", smallLabel: "십이신살", key: "십이신살" },
  { bigLabel: "貴人", smallLabel: "귀인", key: "귀인" },
];

const colDefs: { key: ColKey; label: string }[] = [
  { key: "시", label: "時" },
  { key: "일", label: "日" },
  { key: "월", label: "月" },
  { key: "년", label: "年" },
];

const elementStyle: Record<string, string> = {
  木: "bg-[#18868C] text-white", // 목 → 초록
  火: "bg-[#C23030] text-white", // 화 → 빨강
  土: "bg-[#f1a10d] text-white", // 토 → 노랑
  金: "bg-white border-1 border-black", // 금 → 회색
  水: "bg-[#2F2F2F] text-white", // 수 → 파랑
};

export const SajuTable = observer(() => {
  const data = sajuStore.saju;

  function getElementColor(val?: string): string {
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
                    col.key === "년" ? "" : "border-r-1 border-r-[#8A8A8A]"
                  } ${
                    key === "천간"
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
                      {["천간", "지지"].includes(key) ? (
                        <div
                          className={`flex flex-col gap-1 rounded-xl p-1 box-border ${getElementColor(
                            cell.val
                          )}`}
                        >
                          <span className="block text-[8px]">{cell.label}</span>
                          <span className="block font-chinese leading-none text-[16px]">
                            {cell.hanja}
                          </span>
                          <span className="block text-[8px]">{cell.val}</span>
                        </div>
                      ) : (
                        <>
                          <span className="block font-chinese leading-none text-[15px] text-black">
                            {cell.hanja}
                          </span>
                          <span className="block text-[10px] text-black">
                            ({cell.label})
                          </span>
                        </>
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
