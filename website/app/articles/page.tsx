import { CTA } from "@/components/magic-ui/CTA";
import EditorialCard from "@/components/ui/cards/EditorialCard";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { useDebounce } from "@/lib/useDebounce";
import { motion } from "framer-motion";
// import { useState } from "react";
import { usePublicArticles } from "../features/articles/hook/useArticle";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/ui/Pagination";

export default function ArticlesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError } = usePublicArticles({
    page,
    limit: 2,
    sortBy: "createdAt",
    sortOrder: "desc",
    filter: "active",
    search: debouncedSearch,
    categories: filters,
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const totalPages = data?.pagination?.totalPages ?? 1;

  return (
    <main className="py-44 max-w-7xl mx-auto">
      <PrimaryHeading
        heading="Empower Your Workflow with AI"
        des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations."
      />

      <div>
        {isLoading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-5"
          >
            Loading articles....
          </motion.p>
        )}

        {isError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-5 text-danger"
          >
            Error loading articles.
          </motion.p>
        )}

        {!isLoading && data?.data?.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-5"
          >
            No articles available.
          </motion.p>
        )}
      </div>

      <section className="bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.data?.map((item) => (
            <EditorialCard
              key={item._id}
              image={item.thumbnail ?? "/image/placeholder.png"}
              title={item.title ?? "Untitle Article"}
              category_name={
                typeof item.category === "object" && item.category != null
                  ? item.category.name
                  : undefined
              }
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
      </section>

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </main>
  );
}
