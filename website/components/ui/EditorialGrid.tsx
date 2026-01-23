"use client";

import { useState } from "react";
import EditorialCard from "@/components/ui/cards/EditorialCard";
import { editorials } from "@/data/editorials";
import { Pagination } from "@/components/ui/Pagination";

interface EditorialGridProps {
  itemsPerPage?: number;
  isPaggination?:boolean
}

export default function EditorialGrid({
  itemsPerPage = 6,
  isPaggination = false
}: EditorialGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(editorials.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = editorials.slice(start, end);

  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((item, index) => (
          <EditorialCard
            key={index}
            image={item.image}
            title={item.title}
            meta={item.meta}
          />
        ))}
      </div>

        {}
      {/* Pagination */}
      {/* {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )} */}
    </section>
  );
}
