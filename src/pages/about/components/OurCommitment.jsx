import React from "react";
import { FileText, ShieldCheck, Users } from "lucide-react";

function OurCommitment() {
  const commitments = [
    {
      icon: FileText,
      title: "Clear Information",
      desc: "We provide accurate, up-to-date details so you can make informed decisions with confidence.",
    },
    {
      icon: ShieldCheck,
      title: "Official Sources",
      desc: "We partner with universities, foundations, and organizations to bring you verified opportunities.",
    },
    {
      icon: Users,
      title: "Student First",
      desc: "We design everything around your journey—saving you time and helping you achieve your goals.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Our Commitment to You
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start gap-4 rounded-2xl bg-white p-6 border border-gray-100 shadow-xs"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurCommitment;
