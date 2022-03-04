export interface BPageProps {
  name: string;
}
export function BPage({ name }: BPageProps) {
  return <h1>{name}</h1>;
}
