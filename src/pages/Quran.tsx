import { Book, Volume2, Heart, Star, Search, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuranReader from "@/components/QuranReader";
import quranBook from "@/assets/quran-book.jpg";

const Quran = () => {
  const quranFacts = [
    { number: "114", label: "Sourates", description: "Chapitres du Coran", icon: Book },
    { number: "6,236", label: "Versets", description: "Âyât au total", icon: Star },
    { number: "23", label: "Années", description: "Durée de révélation", icon: Volume2 },
    { number: "1400+", label: "Ans", description: "Préservé intact", icon: Heart }
  ];

  const popularSurahs = [
    {
      number: 1,
      name: "الفاتحة",
      french: "Al-Fatiha",
      meaning: "L'Ouverture",
      verses: 7,
      description: "La sourate d'ouverture, récitée dans chaque prière"
    },
    {
      number: 2,
      name: "البقرة",
      french: "Al-Baqarah",
      meaning: "La Vache",
      verses: 286,
      description: "La plus longue sourate du Coran"
    },
    {
      number: 112,
      name: "الإخلاص",
      french: "Al-Ikhlas",
      meaning: "La Pureté",
      verses: 4,
      description: "L'unicité d'Allah en quatre versets"
    },
    {
      number: 67,
      name: "الملك",
      french: "Al-Mulk",
      meaning: "La Royauté",
      verses: 30,
      description: "Protection dans la tombe"
    }
  ];

  const benefits = [
    "Guidance spirituelle et morale complète",
    "Paix intérieure et sérénité du cœur",
    "Sagesse pour les défis de la vie",
    "Récompenses spirituelles immenses",
    "Amélioration de la mémoire et concentration",
    "Connexion directe avec Allah"
  ];

  const recitationTips = [
    { title: "Ablutions", description: "Se purifier avant la lecture", icon: Star },
    { title: "Respect", description: "Traiter le Coran avec vénération", icon: Heart },
    { title: "Concentration", description: "Lire avec présence du cœur", icon: Book },
    { title: "Méditation", description: "Réfléchir sur les significations", icon: Search }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={quranBook} 
            alt="Le Noble Coran" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-islamic font-bold mb-6 animate-fade-in">
            القرآن الكريم
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Le Noble Coran
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            La parole d'Allah révélée au Prophète Muhammad ﷺ
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-lg font-islamic leading-relaxed">
              "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ"
            </p>
            <p className="text-sm mt-2 opacity-90">
              "Et Nous faisons descendre du Coran, ce qui est une guérison et une miséricorde pour les croyants"
            </p>
          </div>
        </div>
      </section>

      {/* Quran Facts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
              عن القرآن الكريم
            </h2>
            <p className="text-lg text-muted-foreground">
              Quelques chiffres sur le livre saint de l'Islam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quranFacts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-sacred transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center">
                      <fact.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-accent">{fact.number}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{fact.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Surahs */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
                السور المشهورة
              </h2>
              <p className="text-lg text-muted-foreground">
                Quelques sourates populaires et leurs bienfaits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularSurahs.map((surah, index) => (
                <Card key={index} className="shadow-golden hover:shadow-mosque transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-accent/10 text-accent">
                            Sourate {surah.number}
                          </Badge>
                          <Badge variant="secondary">
                            {surah.verses} versets
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-islamic mb-1">{surah.name}</CardTitle>
                        <CardDescription className="font-medium text-primary">
                          {surah.french} - {surah.meaning}
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{surah.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits and Recitation Tips */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-mosque">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Heart className="h-6 w-6 text-accent" />
                  Bienfaits de la Lecture
                </CardTitle>
                <CardDescription>
                  Les vertus de réciter le Coran
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 min-w-8 h-8 flex items-center justify-center">
                        ✓
                      </Badge>
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sacred">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Book className="h-6 w-6 text-accent" />
                  Étiquettes de Lecture
                </CardTitle>
                <CardDescription>
                  Comment bien lire le Coran
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recitationTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background border">
                      <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <tip.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lecteur de Coran */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
                قارئ القرآن
              </h2>
              <p className="text-lg text-muted-foreground">
                Lisez le Coran complet avec le texte arabe authentique
              </p>
            </div>
            <QuranReader />
          </div>

          {/* Verse of the Day */}
          <div className="mt-16">
            <Card className="shadow-golden bg-gradient-to-r from-accent/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Star className="h-6 w-6 text-accent" />
                  آية اليوم
                </CardTitle>
                <CardDescription>
                  Verset du jour pour la méditation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                    <p className="text-2xl font-islamic leading-loose text-primary mb-4">
                      "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
                    </p>
                    <p className="text-lg text-muted-foreground">
                      "Et quiconque craint Allah, Il lui donnera une issue favorable, et Il lui accordera Ses dons par [des moyens] sur lesquels il ne comptait pas."
                    </p>
                    <div className="mt-4">
                      <Badge variant="outline" className="bg-accent/20 text-accent">
                        Sourate At-Talaq (65:2-3)
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quran;