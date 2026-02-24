"use client";

import Image from "next/image";

interface TextContentProps {
  heading?: string;
  description?: string;
  long_description?: string[];
  highlight?: string;
}

interface ImageSectionProps {
  image: string;
  imagePosition?: "left" | "right" | string;
  content: string[];
  highlight?: string;
  pre_heading?: string;
  heading?: string;
  // pre_heading?: string;
}

interface DynamicSectionProps {
  textContent?: TextContentProps;
  imageSections?: ImageSectionProps[];
}

export default function DynamicSection({
  textContent,
  imageSections,
}: DynamicSectionProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-transparent text-white ">
      <div className="max-w-6xl mx-auto">
        {/* ================= TEXT CONTENT ================= */}
        {textContent && (
          <div className="text-center max-w-3xl mx-auto mb-6">
            {textContent.heading && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {textContent.heading}
              </h2>
            )}
            {textContent.description && (
              <p className="text-lg text-gray-300 leading-relaxed">
                {textContent.description}
              </p>
            )}
          </div>
        )}
        {textContent?.long_description && (
          <div className="mt-16 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
            {textContent.long_description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {textContent?.highlight && (
          <p className="font-semibold text-white text-lg sm:text-xl pt-6">
            {textContent.highlight}
          </p>
        )}
        {/* {textContent?.long_description && (
          <div className="mt-6 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
            {textContent.long_description.map((one, two) => (
              <p key={one}>{two}</p>
            ))}
          </div>
        )} */}

        {/* ================= IMAGE + CONTENT ================= */}
        {imageSections && imageSections.length > 0 && (
          <div className="space-y-16">
            {imageSections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-12 ${
                  section.imagePosition === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={section.image}
                      alt="Service Image"
                      width={1200}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed items-center md:text-justify">
                  {/* SMALL PRE HEADING */}
                  {section.pre_heading && (
                    <p className="text-sm uppercase tracking-widest text-neutral-400">
                      {section.pre_heading}
                    </p>
                  )}

                  {/* MAIN HEADING */}
                  {section.heading && (
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-left">
                      {section.heading}
                    </h2>
                  )}
                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {section.highlight && (
                    <p className="font-semibold text-white text-lg sm:text-xl pt-6">
                      {section.highlight}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// 'use client'

// interface DynamicContentProps {
//   heading?: string;
//   content: string[];
//   highlighted?: string[];
// }

// export default function DynamicContent({
//   heading,
//   content,
//   highlighted,
// }: DynamicContentProps) {
//   return (
//     <section className="w-full py-16 px-6 bg-white">
//       <div className="max-w-4xl mx-auto">

//         {/* Heading */}
//         {heading && (
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//             {heading}
//           </h2>
//         )}

//         {/* Paragraph Content */}
//         <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
//           {content.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>

//         {/* Highlighted Features */}
//         {highlighted && highlighted.length > 0 && (
//           <div className="mt-10">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               Key Features
//             </h3>

//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {highlighted.map((item, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
