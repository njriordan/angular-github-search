export class AdvancedSearchModel {
  constructor(
    public q: string,
    public language?: string,
    public user?: string,
    public size?: number,
    public stars?: number,
    public topic?: string
  ) {}
}
