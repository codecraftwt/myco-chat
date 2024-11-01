export type Conversation = {
  address: string;
  event: string;
  metadata: {
    id: string;
    role: string;
    content: string;
    conversationId: string;
    questionId: string;
    uniqueId: string;
  };
  points: number;
  timestamp: string;
};