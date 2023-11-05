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
      <h1 className="text-5xl font-bold">Work Journal</h1>
      <p className="mt-2 text-lg text-gray-400">
        Learnings and doings and things.
      </p>

      <div className="my-8 border p-2">
        <form>
          <p className="italic">Create an entry</p>

          <div>
            <div className="mt-2">
              <input type="date" name="date" className="text-gray-700" />
            </div>

            <div className="mt-2 space-x-6">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="work"
                  className="mr-2"
                />
                Work
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="learning"
                  className="mr-2"
                />
                Learning
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="things"
                  className="mr-2"
                />
                Things
              </label>
            </div>
            <div className="mt-2">
              <textarea
                name="entry"
                className="w-full text-gray-700"
                placeholder="Write your entry..."
              />
            </div>
            <div className="mt-1">
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-4 font-bold">
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
