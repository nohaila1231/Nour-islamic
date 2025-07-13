import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Search, Heart, Loader, Star } from "lucide-react";

interface Hadith {
  number: number;
  arab: string;
  id: number;
}

interface HadithCollection {
  id: string;
  name: string;
  arabicName: string;
  hasBooks: boolean;
  hasChapters: boolean;
  collection: Hadith[];
}

const HadithReader = () => {
  const [collections] = useState([
    { id: "bukhari", name: "Sahih al-Bukhari", arabicName: "صحيح البخاري", total: 7563 },
    { id: "muslim", name: "Sahih Muslim", arabicName: "صحيح مسلم", total: 7190 },
    { id: "abudawud", name: "Sunan Abu Dawud", arabicName: "سنن أبي داود", total: 5274 },
    { id: "tirmidhi", name: "Jami' at-Tirmidhi", arabicName: "جامع الترمذي", total: 3956 },
    { id: "nasai", name: "Sunan an-Nasa'i", arabicName: "سنن النسائي", total: 5761 },
    { id: "ibnmajah", name: "Sunan Ibn Majah", arabicName: "سنن ابن ماجه", total: 4341 }
  ]);

  const [selectedCollection, setSelectedCollection] = useState("");
  const [hadiths, setHadiths] = useState<Hadith[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hadithOfDay, setHadithOfDay] = useState<Hadith | null>(null);

  // Charger un hadith du jour aléatoire
  useEffect(() => {
    const randomHadith: Hadith = {
      number: 1,
      arab: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      id: 1
    };
    setHadithOfDay(randomHadith);
  }, []);

  // Charger les hadiths d'une collection
  const loadCollection = async (collectionId: string) => {
    setLoading(true);
    try {
      // Simulation de données (en production, utiliser une vraie API comme sunnah.com API)
      const mockHadiths: Hadith[] = Array.from({ length: 20 }, (_, i) => ({
        number: i + 1,
        arab: `حديث رقم ${i + 1} من مجموعة ${collectionId}. هذا نص تجريبي للحديث الشريف.`,
        id: i + 1
      }));
      
      setHadiths(mockHadiths);
      setSelectedCollection(collectionId);
    } catch (error) {
      console.error("Erreur lors du chargement des hadiths:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredHadiths = hadiths.filter(hadith =>
    hadith.arab.includes(searchTerm) || hadith.number.toString().includes(searchTerm)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hadith du jour */}
      {hadithOfDay && (
        <Card className="mb-8 shadow-sacred bg-gradient-to-r from-accent/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
              <Star className="h-6 w-6 text-accent" />
              حديث اليوم
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                <p className="text-xl font-arabic leading-loose text-primary mb-4" dir="rtl">
                  {hadithOfDay.arab}
                </p>
                <p className="text-lg text-muted-foreground">
                  "Les actions ne valent que par les intentions, et chacun n'a que ce qu'il a eu l'intention de faire."
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="bg-accent/20 text-accent">
                    Sahih al-Bukhari, Hadith 1
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Collections de hadiths */}
        <div className="lg:col-span-1">
          <Card className="shadow-sacred">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-islamic">
                <BookOpen className="h-5 w-5 text-accent" />
                Collections de Hadiths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {collections.map((collection) => (
                  <Button
                    key={collection.id}
                    variant={selectedCollection === collection.id ? "default" : "ghost"}
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => loadCollection(collection.id)}
                  >
                    <div className="flex flex-col items-start w-full">
                      <div className="font-medium">{collection.name}</div>
                      <div className="text-sm text-muted-foreground font-arabic">{collection.arabicName}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {collection.total.toLocaleString()} hadiths
                      </Badge>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recherche */}
          {selectedCollection && (
            <Card className="mt-6 shadow-golden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Search className="h-5 w-5 text-accent" />
                  Recherche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Rechercher dans les hadiths..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CardContent>
            </Card>
          )}
        </div>

        {/* Lecteur de hadiths */}
        <div className="lg:col-span-2">
          {selectedCollection ? (
            <Card className="shadow-golden">
              <CardHeader className="border-b bg-gradient-subtle">
                <CardTitle className="text-2xl font-islamic">
                  {collections.find(c => c.id === selectedCollection)?.arabicName}
                </CardTitle>
                <p className="text-muted-foreground">
                  {collections.find(c => c.id === selectedCollection)?.name}
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader className="h-6 w-6 animate-spin text-primary" />
                    <span className="ml-2">Chargement des hadiths...</span>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredHadiths.map((hadith) => (
                      <div key={hadith.id} className="border-l-2 border-accent/20 pl-4 py-3">
                        <div className="flex items-start gap-4">
                          <Badge variant="outline" className="mt-1 min-w-12">
                            {hadith.number}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-lg font-arabic leading-relaxed text-right mb-3" dir="rtl">
                              {hadith.arab}
                            </p>
                            <p className="text-muted-foreground mb-2">
                              Traduction française du hadith sera affichée ici...
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Hadith {hadith.number}</span>
                                <span>•</span>
                                <span>{collections.find(c => c.id === selectedCollection)?.name}</span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Heart className="h-4 w-4 mr-1" />
                                Sauvegarder
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-sacred">
              <CardContent className="flex flex-col items-center justify-center py-20">
                <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sélectionnez une collection</h3>
                <p className="text-muted-foreground text-center">
                  Choisissez une collection de hadiths pour commencer la lecture
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default HadithReader;