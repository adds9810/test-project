import { makeAutoObservable } from "mobx";

type SajuValue = {
  label: string;
  hanja: string;
  val?: string;
};

type ElementType = {
  stem: SajuValue;
  branch: SajuValue;
  tenStar1: SajuValue;
  tenStar2: SajuValue;
  twelveLifeStage: SajuValue;
  twelveSpiritKill: SajuValue;
  noblePeople: SajuValue[];
};

type SaJuTable = {
  hour: ElementType;
  day: ElementType;
  month: ElementType;
  year: ElementType;
};

export class SajuStore {
  birthDate: Date | null = null;
  saju: SaJuTable = {
    hour: blankColumn(),
    day: blankColumn(),
    month: blankColumn(),
    year: blankColumn(),
  };

  constructor() {
    makeAutoObservable(this);
    this.calculateSaju();
  }

  setBirthDate(date: Date) {
    this.birthDate = date;
    this.calculateSaju();
  }

  calculateSaju() {
    // 임시데이터
    this.saju = {
      hour: {
        stem: { label: "갑", hanja: "甲", val: "甲木" },
        branch: { label: "신", hanja: "申", val: "庚金" },
        tenStar1: { label: "편재", hanja: "偏財" },
        tenStar2: { label: "장생", hanja: "長生" },
        twelveLifeStage: { label: "장생", hanja: "長生" },
        twelveSpiritKill: { label: "천살", hanja: "天煞" },
        noblePeople: [],
      },
      day: {
        stem: { label: "을", hanja: "乙", val: "乙木" },
        branch: { label: "해", hanja: "亥", val: "壬水" },
        tenStar1: { label: "비견", hanja: "比肩" },
        tenStar2: { label: "제왕", hanja: "帝旺" },
        twelveLifeStage: { label: "제왕", hanja: "帝旺" },
        twelveSpiritKill: { label: "월살", hanja: "月煞" },
        noblePeople: [{ label: "천을귀인", hanja: "天乙" }],
      },
      month: {
        stem: { label: "무", hanja: "戊", val: "戊土" },
        branch: { label: "오", hanja: "午", val: "丁火" },
        tenStar1: { label: "식신", hanja: "食神" },
        tenStar2: { label: "양인", hanja: "陽刃" },
        twelveLifeStage: { label: "절", hanja: "絶" },
        twelveSpiritKill: { label: "망신", hanja: "亡神" },
        noblePeople: [{ label: "태을귀인", hanja: "太乙" }],
      },
      year: {
        stem: { label: "경", hanja: "庚", val: "庚金" },
        branch: { label: "자", hanja: "子", val: "癸水" },
        tenStar1: { label: "상관", hanja: "傷官" },
        tenStar2: { label: "장생", hanja: "長生" },
        twelveLifeStage: { label: "사", hanja: "死" },
        twelveSpiritKill: { label: "장성", hanja: "將星" },
        noblePeople: [
          { label: "문을귀인", hanja: "文乙" },
          { label: "문을귀인", hanja: "文乙" },
        ],
      },
    };
  }
}

function blankColumn(): ElementType {
  return {
    stem: { label: "", hanja: "", val: "" },
    branch: { label: "", hanja: "", val: "" },
    tenStar1: { label: "", hanja: "" },
    tenStar2: { label: "", hanja: "" },
    twelveLifeStage: { label: "", hanja: "" },
    twelveSpiritKill: { label: "", hanja: "" },
    noblePeople: [],
  };
}

export const sajuStore = new SajuStore();
