export const useIsUrlUndefined = (link: string | null | undefined = ''): boolean => {
  
  return link === "" || link === null || link === undefined || link === "#"
  
}
