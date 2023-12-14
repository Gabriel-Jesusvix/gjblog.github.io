export interface Issue {
  active_lock_reason: null | string;
  assignee: null | string;
  assignees: string[];
  author_association: string;
  body: string;
  closed_at: null | string;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: string[];
  labels_url: string;
  locked: boolean;
  milestone: null | string;
  node_id: string;
  number: number;
  performed_via_github_app: null | string;
  reactions: Reaction;
  repository_url: string;
  score: number;
  state: "open" | "closed"; // Pode ser apenas "open" ou "closed"
  state_reason: null | string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
}