import { BookmarkX } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border 
    border-gray-200 bg-white px-6 py-10 text-center shadow-xs">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
        <BookmarkX size={26} />
      </div>

      <h2 className="mt-4 text-lg font-bold text-gray-900 md:text-xl">
        No Saved Scholarships Yet
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
        Start exploring scholarships and save the opportunities you want
        to come back to later.
      </p>

      <Link className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      to="/search">
        Browse Scholarships
      </Link>
    </div>
  );
}

export default EmptyState;