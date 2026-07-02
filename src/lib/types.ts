export interface Competitor {
  id: string;
  sellerId: string;
  name: string;
  sellerAmpUrl: string;
}

export interface ScanRecord {
  id: string;
  competitorId: string;
  timestamp: string;
  asins: string[];
  newAsinsDetected: string[];
}
