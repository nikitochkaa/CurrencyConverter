export interface IExchangeRate {
  date?: string;
  historical?: boolean;
  info: {
    quote: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}