import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Work Journal</h1>
      <p className="mt-2 text-lg text-gray-400">
        Learnings and doings and things.
      </p>

      <div className="mt-4">
        <p>
          Week of Nov 1<sup>st</sup>
        </p>
      </div>

      <div className="mt-3 space-y-4">
        <div>
          <p>Work</p>
          <ul className="ml-8 list-disc">
            <li>item one</li>
            <li>item two</li>
          </ul>
        </div>
        <div>
          <p>Learning</p>
          <ul className="ml-8 list-disc">
            <li>item one</li>
            <li>item two</li>
          </ul>
        </div>
        <div>
          <p>Things</p>
          <ul className="ml-8 list-disc">
            <li>item one</li>
            <li>item two</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
