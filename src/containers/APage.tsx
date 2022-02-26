export interface APageProps {
  name: string;
}
export function APage({ name }: APageProps) {
  return <h1>{name}</h1>;
}
