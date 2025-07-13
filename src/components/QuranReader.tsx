import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Book, Search, Play, Volume2, Loader } from "lucide-react";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

interface QuranData {
  surahs: {
    references: Surah[];
  };
}

interface SurahDetail {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
}

const QuranReader = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [surahLoading, setSurahLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Charger la liste des sourates
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://api.alquran.cloud/v1/meta");
        const data: QuranData = await response.json();
        setSurahs(data.surahs.references);
      } catch (error) {
        console.error("Erreur lors du chargement des sourates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  // Charger une sourate spécifique
  const loadSurah = async (surahNumber: number) => {
    setSurahLoading(true);
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
      const data = await response.json();
      setSelectedSurah(data.data);
    } catch (error) {
      console.error("Erreur lors du chargement de la sourate:", error);
    } finally {
      setSurahLoading(false);
    }
  };

  const filteredSurahs = surahs.filter(surah =>
    surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.name.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Chargement du Coran...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des sourates */}
        <div className="lg:col-span-1">
          <Card className="shadow-sacred">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-islamic">
                <Book className="h-5 w-5 text-accent" />
                Sourates du Coran
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher une sourate..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredSurahs.map((surah) => (
                  <Button
                    key={surah.number}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-accent/10"
                    onClick={() => loadSurah(surah.number)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="font-medium">{surah.number}. {surah.englishName}</div>
                        <div className="text-sm text-muted-foreground font-arabic">{surah.name}</div>
                        <div className="text-xs text-muted-foreground">{surah.englishNameTranslation}</div>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        {surah.numberOfAyahs} versets
                      </Badge>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lecteur de sourate */}
        <div className="lg:col-span-2">
          {selectedSurah ? (
            <Card className="shadow-golden">
              <CardHeader className="border-b bg-gradient-subtle">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-islamic">
                      {selectedSurah.englishName} - {selectedSurah.name}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {selectedSurah.englishNameTranslation} • {selectedSurah.numberOfAyahs} versets • 
                      {selectedSurah.revelationType === "Meccan" ? " Mecquoise" : " Médinoise"}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Volume2 className="h-4 w-4 mr-2" />
                    Écouter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {surahLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader className="h-6 w-6 animate-spin text-primary" />
                    <span className="ml-2">Chargement de la sourate...</span>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {selectedSurah.ayahs.map((ayah) => (
                      <div key={ayah.number} className="border-l-2 border-accent/20 pl-4 py-2">
                        <div className="flex items-start gap-4">
                          <Badge variant="outline" className="mt-1 min-w-10">
                            {ayah.numberInSurah}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-xl font-arabic leading-relaxed text-right mb-2" dir="rtl">
                              {ayah.text}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Verset {ayah.numberInSurah}</span>
                              <span>•</span>
                              <span>Juz {ayah.juz}</span>
                              <span>•</span>
                              <span>Page {ayah.page}</span>
                              {ayah.sajda && (
                                <>
                                  <span>•</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Prosternation
                                  </Badge>
                                </>
                              )}
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
                <Book className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sélectionnez une sourate</h3>
                <p className="text-muted-foreground text-center">
                  Choisissez une sourate dans la liste pour commencer la lecture du Coran
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuranReader;