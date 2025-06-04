import { makeAutoObservable } from "mobx";

type SajuValue = {
  label: string; // 한글
  hanja: string; // 한문
};
type SajuValueWithVal = SajuValue & {
  val: string; // 추가 정보
};

type ElementType = {
  천간: SajuValueWithVal;
  지지: SajuValueWithVal;
  십성1: SajuValue;
  십성2: SajuValue;
  십이운성: SajuValue;
  십이신살: SajuValue;
  귀인: SajuValue[];
};

type SaJuTable = {
  시: ElementType;
  일: ElementType;
  월: ElementType;
  년: ElementType;
};

export class SajuStore {
  birthDate: Date | null = null;
  saju: SaJuTable = {
    시: blankColumn(),
    일: blankColumn(),
    월: blankColumn(),
    년: blankColumn(),
  };

  constructor() {
    makeAutoObservable(this);
    this.calculateSaju();
  }

  setBirthDate(date: Date) {
    this.birthDate = date;
    this.calculateSaju(); // 자동 계산 트리거
  }

  calculateSaju() {
    // 여기에 실제 계산 로직 연결
    this.saju = {
      시: {
        천간: { label: "갑", hanja: "甲", val: "甲木" }, // 목
        지지: { label: "신", hanja: "申", val: "庚金" }, // 금
        십성1: { label: "편재", hanja: "偏財" },
        십성2: { label: "장생", hanja: "長生" },
        십이운성: { label: "장생", hanja: "長生" },
        십이신살: { label: "천살", hanja: "天煞" },
        귀인: [],
      },
      일: {
        천간: { label: "을", hanja: "乙", val: "乙木" }, // 목
        지지: { label: "해", hanja: "亥", val: "壬水" }, // 수
        십성1: { label: "비견", hanja: "比肩" },
        십성2: { label: "제왕", hanja: "帝旺" },
        십이운성: { label: "제왕", hanja: "帝旺" },
        십이신살: { label: "월살", hanja: "月煞" },
        귀인: [{ label: "천을귀인", hanja: "天乙" }],
      },
      월: {
        천간: { label: "무", hanja: "戊", val: "戊土" }, // 토
        지지: { label: "오", hanja: "午", val: "丁火" }, // 화
        십성1: { label: "식신", hanja: "食神" },
        십성2: { label: "양인", hanja: "陽刃" },
        십이운성: { label: "절", hanja: "絶" },
        십이신살: { label: "망신", hanja: "亡神" },
        귀인: [{ label: "태을귀인", hanja: "太乙" }],
      },
      년: {
        천간: { label: "경", hanja: "庚", val: "庚金" }, // 금
        지지: { label: "자", hanja: "子", val: "癸水" }, // 수
        십성1: { label: "상관", hanja: "傷官" },
        십성2: { label: "장생", hanja: "長生" },
        십이운성: { label: "사", hanja: "死" },
        십이신살: { label: "장성", hanja: "將星" },
        귀인: [
          { label: "문을귀인", hanja: "文乙" },
          { label: "문을귀인", hanja: "文乙" },
        ],
      },
    };
  }
}

function blankColumn(): ElementType {
  return {
    천간: { label: "", hanja: "", val: "" },
    지지: { label: "", hanja: "", val: "" },
    십성1: { label: "", hanja: "" },
    십성2: { label: "", hanja: "" },
    십이운성: { label: "", hanja: "" },
    십이신살: { label: "", hanja: "" },
    귀인: [],
  };
}

export const sajuStore = new SajuStore();
