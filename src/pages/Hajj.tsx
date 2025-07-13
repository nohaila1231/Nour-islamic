import { MapPin, Users, Calendar, Star, Mountain, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroMakkah from "@/assets/hero-makkah.jpg";

const Hajj = () => {
  const hajjSteps = [
    {
      day: "8 Dhul Hijjah",
      name: "Mina",
      arabic: "منى",
      description: "Arrivée à Mina et nuit de méditation",
      activities: ["Installation à Mina", "Prières", "Préparation spirituelle"]
    },
    {
      day: "9 Dhul Hijjah",
      name: "Arafat",
      arabic: "عرفات",
      description: "Station sur le mont Arafat - jour le plus important",
      activities: ["Wuquf à Arafat", "Invocations intensives", "Recherche du pardon"]
    },
    {
      day: "10 Dhul Hijjah",
      name: "Eid al-Adha",
      arabic: "عيد الأضحى",
      description: "Lapidation, sacrifice et célébration",
      activities: ["Lapidation de Jamarat", "Sacrifice animal", "Rasage des cheveux"]
    },
    {
      day: "11-13 Dhul Hijjah",
      name: "Tashriq",
      arabic: "أيام التشريق",
      description: "Jours de Tashriq à Mina",
      activities: ["Lapidation quotidienne", "Adoration", "Préparation au départ"]
    }
  ];

  const requirements = [
    {
      category: "Spirituelles",
      items: [
        "Être musulman",
        "Intention sincère (Niyyah)",
        "Repentir sincère",
        "Connaissance des rites"
      ]
    },
    {
      category: "Physiques",
      items: [
        "Santé suffisante",
        "Capacité de voyager",
        "Endurance physique",
        "Âge approprié"
      ]
    },
    {
      category: "Financières",
      items: [
        "Moyens financiers suffisants",
        "Dettes remboursées",
        "Famille pourvue",
        "Voyage halal"
      ]
    }
  ];

  const rituals = [
    {
      name: "Ihram",
      arabic: "الإحرام",
      description: "État de sacralisation avec vêtements blancs",
      significance: "Égalité devant Allah"
    },
    {
      name: "Tawaf",
      arabic: "الطواف",
      description: "7 tours autour de la Kaaba",
      significance: "Unité et dévotion"
    },
    {
      name: "Sa'i",
      arabic: "السعي",
      description: "Course entre Safa et Marwah",
      significance: "Persévérance de Hajar"
    },
    {
      name: "Wuquf",
      arabic: "الوقوف",
      description: "Station sur le mont Arafat",
      significance: "Jour du Jugement"
    }
  ];

  const benefits = [
    "Purification complète des péchés",
    "Renouveau spirituel total",
    "Égalité fraternelle universelle",
    "Renforcement de la foi",
    "Expérience spirituelle unique",
    "Rapprochement avec Allah"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMakkah} 
            alt="Pèlerinage du Hajj" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-islamic font-bold mb-6 animate-fade-in">
            الحج
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Le Grand Pèlerinage
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Le cinquième pilier de l'Islam, voyage spirituel d'une vie
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-lg font-islamic leading-relaxed mb-2">
              "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا"
            </p>
            <p className="text-sm opacity-90">
              "Et c'est un devoir envers Allah pour les gens qui ont les moyens, d'aller faire le pèlerinage de la Maison"
            </p>
          </div>
        </div>
      </section>

      {/* Hajj Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
              مناسك الحج
            </h2>
            <p className="text-lg text-muted-foreground">
              Les étapes du pèlerinage jour par jour
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {hajjSteps.map((step, index) => (
              <Card key={index} className="shadow-sacred hover:shadow-mosque transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge variant="default" className="bg-gradient-gold text-white min-w-20 justify-center">
                      Jour {index + 1}
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl font-islamic">{step.arabic}</CardTitle>
                        <CardTitle className="text-xl text-primary">{step.name}</CardTitle>
                      </div>
                      <CardDescription className="text-lg font-medium">
                        {step.day}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.activities.map((activity, actIndex) => (
                      <Badge key={actIndex} variant="outline" className="bg-accent/10 text-accent">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Requirements */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
                شروط الحج
              </h2>
              <p className="text-lg text-muted-foreground">
                Les conditions requises pour accomplir le Hajj
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {requirements.map((req, index) => (
                <Card key={index} className="shadow-golden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-islamic">
                      {index === 0 && <Heart className="h-5 w-5 text-accent" />}
                      {index === 1 && <Users className="h-5 w-5 text-accent" />}
                      {index === 2 && <Star className="h-5 w-5 text-accent" />}
                      {req.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {req.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Rituals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-mosque">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Mountain className="h-6 w-6 text-accent" />
                  الشعائر الأساسية
                </CardTitle>
                <CardDescription>
                  Les rites principaux du pèlerinage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rituals.map((ritual, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background border">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 bg-accent/10 text-accent">
                          {index + 1}
                        </Badge>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-primary">{ritual.name}</h4>
                            <span className="text-sm font-islamic text-muted-foreground">
                              {ritual.arabic}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{ritual.description}</p>
                          <p className="text-xs text-accent font-medium">{ritual.significance}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sacred">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Star className="h-6 w-6 text-accent" />
                  فضائل الحج
                </CardTitle>
                <CardDescription>
                  Les bienfaits spirituels du pèlerinage
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
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm font-islamic text-center text-primary">
                    "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ"
                  </p>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    "Celui qui accomplit le Hajj sans commettre de rapports intimes ni de péchés, 
                    revient comme le jour où sa mère l'a mis au monde"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <Card className="shadow-golden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                <Users className="h-6 w-6 text-accent" />
                إحصائيات الحج
              </CardTitle>
              <CardDescription>
                Quelques chiffres sur le pèlerinage moderne
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">2.5M+</div>
                  <div className="text-sm font-medium text-primary">Pèlerins annuels</div>
                  <div className="text-xs text-muted-foreground">Toutes nationalités</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">180+</div>
                  <div className="text-sm font-medium text-primary">Pays représentés</div>
                  <div className="text-xs text-muted-foreground">Diversité mondiale</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm font-medium text-primary">Jours principaux</div>
                  <div className="text-xs text-muted-foreground">8-12 Dhul Hijjah</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">1400+</div>
                  <div className="text-sm font-medium text-primary">Années d'histoire</div>
                  <div className="text-xs text-muted-foreground">Tradition continue</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hajj;