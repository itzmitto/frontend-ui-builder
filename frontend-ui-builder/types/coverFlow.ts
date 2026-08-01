export type CoverFlowSettings = {
    rotate: number;
    spacing: number;
    depth: number;
    perspective: number;
    centerScale: number;
    sideOpacity: number;
};

export const defaultCoverFlowSettings: CoverFlowSettings = {
    rotate: 55,
    spacing: 180,
    depth: 0,
    perspective: 1800,
    centerScale: 1,
    sideOpacity: 0.55,
};