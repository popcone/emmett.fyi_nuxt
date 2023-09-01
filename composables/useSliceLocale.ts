export const useSliceLocale = (arg: string): string => {
    const length = arg.length - 2;
    return arg.slice(0, -length);
}