import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Contemplate the Meaning of Life Twice a Day", image: "https://picsum.photos/id/1018/800/600", content: "What is life? You can't spell 'life' without 'i'." },
  { id: 2, title: "5 Inspiring Apps for Your Next Trip", image: "https://picsum.photos/id/1025/800/600", content: "Discover 5 amazing apps to plan your next trip easily." },
  { id: 3, title: "Explore Minimalist Productivity", image: "https://picsum.photos/id/1035/800/600", content: "Learn how to stay productive with minimal tools." },
  { id: 4, title: "Top UI Trends 2025", image: "https://picsum.photos/id/1040/800/600", content: "Explore the UI trends that will define 2025." },
  { id: 5, title: "Daily Mindfulness Apps", image: "https://picsum.photos/id/1069/800/600", content: "Apps to keep you mindful and calm daily." },
  { id: 6, title: "Remote Work Essentials", image: "https://picsum.photos/id/1074/800/600", content: "Discover essentials for your remote workspace." },
];

export default function CardExpand() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-6 bg-gray-100">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => setSelectedId(card.id)}
            className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-lg ${
              index === 0 ? "md:col-span-4 h-[400px]" :             // prima riga larga
              index === 1 ? "md:col-span-2 h-[400px]" :             // prima riga stretta
              index === 2 ? "md:col-span-2 h-[300px]" :             // seconda riga stretta (modifica)
              index === 3 ? "md:col-span-4 h-[300px]" :             // seconda riga larga (modifica)
              "md:col-span-3 h-[250px]"                             // terza riga
            }`}
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="object-cover w-full h-full"
              layoutId={`image-${card.id}`}
            />
            <div className="absolute bottom-4 left-4 text-white drop-shadow-lg p-4">
              <p className="uppercase text-xs md:text-sm font-medium tracking-wide">HOW TO</p>
              <h2 className="font-semibold leading-tight text-sm md:text-lg">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              layoutId={`image-${selectedId}`}
            >
              <img
                src={cards.find((c) => c.id === selectedId).image}
                alt={cards.find((c) => c.id === selectedId).title}
                className="object-cover w-full h-full max-w-[90vw] max-h-[80vh] rounded-xl"
              />
              <div className="p-4 bg-white">
                <p className="uppercase text-sm font-medium text-gray-500">HOW TO</p>
                <h2 className="text-xl font-semibold">{cards.find((c) => c.id === selectedId).title}</h2>
                <p className="mt-2 text-gray-700">{cards.find((c) => c.id === selectedId).content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
