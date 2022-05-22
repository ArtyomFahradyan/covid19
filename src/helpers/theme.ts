import { light, dark } from "theme";
import { css } from "styled-components";

type themeKey = keyof typeof light | keyof typeof dark | string;
export type BreakPointName = keyof typeof breakpoints;
/* eslint-disable @typescript-eslint/no-explicit-any */

export type BreakpointMap = Record<
  string,
  {
    minWidth: number;
    maxWidth: number;
  }
>;

export const breakpoints: BreakpointMap = {
  mobile: {
    minWidth: 0,
    maxWidth: 768,
  },
  tablet: {
    minWidth: 768,
    maxWidth: 1200,
  },
  desktop: {
    minWidth: 1200,
    maxWidth: 3800,
  },
  xxs: {
    minWidth: 0,
    maxWidth: 360,
  },
  xs: {
    minWidth: 0,
    maxWidth: 576,
  },
  sm: {
    minWidth: 576,
    maxWidth: 768,
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
  },
  lg: {
    minWidth: 992,
    maxWidth: 1200,
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1600,
  },
  xxl: {
    minWidth: 1600,
    maxWidth: 3800,
  },
};

type PredictedProp = {
  [name: string]: any;
};
export type StyledComponentsInterpolation =
  | ((executionContext: Record<string, any>) => StyledComponentsInterpolation)
  | string
  | number
  | StyledComponentsInterpolation[];

export const getPreviousKey = (object: Record<string, any>, key: string) => {
  const keys = Object.keys(object);
  const index = keys.indexOf(key);
  return index !== -1 && keys[index - 1];
};

export const theme = (name: themeKey) => (props: PredictedProp) =>
  props.theme[name];

export enum MediaQueryConditions {
  LESSER,
  GREATER,
}

export const breakpoint = (
  name: BreakPointName | Array<BreakPointName>,
  styles: any,
  condition:
    | MediaQueryConditions.LESSER
    | MediaQueryConditions.GREATER
    | "" = "",
  ...interpolations: StyledComponentsInterpolation[]
) => {
  let minWidth;
  let maxWidth;
  if (typeof name === "string") {
    minWidth = breakpoints[name]?.minWidth || 0;
    maxWidth = breakpoints[name]?.maxWidth || 0;

    if (condition === MediaQueryConditions.LESSER) {
      minWidth = 0;
    } else if (condition === MediaQueryConditions.GREATER) {
      maxWidth = 0;
    }
  } else if (Array.isArray(name) && name.length === 2) {
    minWidth = breakpoints[name[0]]?.minWidth || 0;
    maxWidth = breakpoints[name[1]]?.maxWidth || 0;
    if (minWidth > maxWidth) {
      throw new Error(
        "The provided responsive range is not correct, the `inRange` responsive helper receives an array with [`smallViewName`, `largeViewName`] and apply your styles between them"
      );
    }
  } else {
    throw new Error(
      "The responsive breakpoint parameters are not valid : " + name
    );
  }

  const offset = 1;
  let mediaCondition = "";
  if (minWidth) {
    mediaCondition += `(min-width: ${minWidth}px)`;
  }
  if (maxWidth) {
    mediaCondition += mediaCondition ? " and " : "";
    mediaCondition += `(max-width: ${maxWidth - offset}px)`;
  }

  return css`
    @media ${mediaCondition} {
      ${css(styles, ...interpolations)}
    }
  `;
};

export const inLessThan =
  (size: BreakPointName) =>
  (styles: any, ...interpolations: StyledComponentsInterpolation[]) => {
    const tempSize = getPreviousKey(breakpoints, size) || size;
    return breakpoint(
      tempSize,
      styles,
      MediaQueryConditions.LESSER,
      interpolations
    );
  };
