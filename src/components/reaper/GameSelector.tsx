import { useState } from "react";
import { Search, Gamepad2, Star } from "lucide-react";

const games = [
  { id: "ml", name: "Mobile Legends", category: "MOBA", popular: true, image: "🎮" },
  { id: "ff", name: "Free Fire", category: "Battle Royale", popular: true, image: "🔥" },
  { id: "pubg", name: "PUBG Mobile", category: "Battle Royale", popular: true, image: "🎯" },
  { id: "genshin", name: "Genshin Impact", category: "RPG", popular: true, image: "⚔️" },
  { id: "valorant", name: "Valorant", category: "FPS", popular: false, image: "🎪" },
  { id: "codm", name: "Call of Duty Mobile", category: "FPS", popular: false, image: "💥" },
  { id: "hsr", name: "Honkai Star Rail", category: "RPG", popular: true, image: "✨" },
  { id: "roblox", name: "Roblox", category: "Sandbox", popular: false, image: "🧱" },
];

const categories = ["Semua", "MOBA", "Battle Royale", "RPG", "FPS", "Sandbox"];

const GameSelector = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
    // Scroll to top-up section
    setTimeout(() => {
      document.getElementById("topup")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <section id="games" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pilih Game Favorit
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tersedia berbagai game populer dengan harga terbaik dan proses instan
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Cari game..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredGames.map((game) => (
            <button
              key={game.id}
              onClick={() => handleGameSelect(game.id)}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                selectedGame === game.id
                  ? "bg-red-600/20 border-red-500"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {game.popular && (
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] text-yellow-500 font-medium">Popular</span>
                </div>
              )}
              
              <div className="text-4xl mb-3">{game.image}</div>
              <h3 className="font-semibold text-white text-sm mb-1">{game.name}</h3>
              <span className="text-xs text-gray-500">{game.category}</span>

              {selectedGame === game.id && (
                <div className="absolute inset-0 rounded-2xl ring-2 ring-red-500 pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">Game tidak ditemukan</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameSelector;
