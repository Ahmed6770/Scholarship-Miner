import React from "react";
import EmptyState from "./EmptyState";
import SavedScholarshipCard from "./SavedScholarshipCard";

function SavedContent({ savedData = [] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 pb-12">
      <div className="space-y-4">
        {savedData.length === 0 ? (
          <EmptyState />
        ) : (
          savedData.map((scholarship) => (
            <SavedScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))
        )}
      </div>
    </div>
  );
}

export default SavedContent;