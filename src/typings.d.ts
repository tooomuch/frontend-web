declare module "ms.macro" {
  const ms: {
    (time: string): number;
    (time: number): string;
  };
  export default ms;
}
