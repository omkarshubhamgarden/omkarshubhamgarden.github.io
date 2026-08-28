declare module 'justified-layout' {
  interface JustifiedLayoutBox {
    top: number;
    left: number;
    width: number;
    height: number;
    aspectRatio: number;
  }

  interface JustifiedLayoutResult {
    boxes: JustifiedLayoutBox[];
    containerHeight: number;
    widowCount: number;
  }

  interface JustifiedLayoutOptions {
    containerWidth?: number;
    containerPadding?: number;
    boxSpacing?: number;
    targetRowHeight?: number;
    targetRowHeightTolerance?: number;
    maxRowHeight?: number | boolean;
    fullWidthBreakoutRowCadence?: number | boolean;
    widowLayoutStyle?: 'left' | 'center' | 'justify';
  }

  type JustifiedLayoutInput = Array<{ width: number; height: number }>;

  function justifiedLayout(
    input: JustifiedLayoutInput,
    options?: JustifiedLayoutOptions
  ): JustifiedLayoutResult;

  export default justifiedLayout;
}
