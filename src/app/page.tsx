
const ENVIRONMENT_NAME = process.env.NEXT_PUBLIC_ENVIRONMENT_NAME

export default function Home() {
  return (
    <h1>Home section: Welcome to {ENVIRONMENT_NAME}</h1>
  );
}
