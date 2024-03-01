import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "San Antonio Chat" },
    { name: "description", content: "Your AI-powered guide to exploring the Alamo City" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-spursTurq">
        San Antonio Chat
        </h1>
    </div>

  );
}
