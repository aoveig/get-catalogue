export default interface catalogueType {
  title: string | null;
  rank: number;
  top: number;
  child: Array<catalogueType>;
}
