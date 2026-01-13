import EditorialCard from "@/components/ui/cards/EditorialCard";

export default function EditorialGrid() {
  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        <EditorialCard
          image="/assets/images/articals/1x1.webp"
          title="Inside Mirakl’s agentic commerce vision"
          meta="API"
        />

        <EditorialCard
          image="/assets/images/articals/1x1.webp"
          title="Inside JetBrains—the company reshaping how the world writes code"
          meta="ChatGPT"
        />

        <EditorialCard
          image="/assets/images/articals/1x1.webp"
          title="How Scania is accelerating work with AI across its global workforce"
          meta="ChatGPT"
        />

      </div>
    </section>
  );
}
