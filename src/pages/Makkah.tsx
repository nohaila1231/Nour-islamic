import { MapPin, Camera, Clock, Users, Star, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroMakkah from "@/assets/hero-makkah.jpg";

const Makkah = () => {
  const holyPlaces = [
    {
      name: "الكعبة المشرفة",
      french: "La Noble Kaaba",
      description: "La maison sacrée d'Allah, direction de toutes les prières",
      importance: "Centre spirituel de l'Islam",
      icon: Star
    },
    {
      name: "المسجد الحرام",
      french: "La Grande Mosquée",
      description: "La plus sacrée des mosquées entourant la Kaaba",
      importance: "Plus de 2 millions de fidèles",
      icon: Users
    },
    {
      name: "الحجر الأسود",
      french: "La Pierre Noire",
      description: "Pierre bénie placée par le Prophète Ibrahim",
      importance: "Point de départ du Tawaf",
      icon: Heart
    },
    {
      name: "مقام إبراهيم",
      french: "Station d'Ibrahim",
      description: "Empreinte du Prophète Ibrahim lors de la construction",
      importance: "Lieu de prière après le Tawaf",
      icon: MapPin
    }
  ];

  const pilgrimage = [
    { step: "Ihram", description: "État de sacralisation et vêtements blancs", order: 1 },
    { step: "Tawaf", description: "7 tours autour de la Kaaba", order: 2 },
    { step: "Sa'i", description: "Course entre Safa et Marwah", order: 3 },
    { step: "Arafat", description: "Station sur le mont Arafat", order: 4 },
    { step: "Jamarat", description: "Lapidation des stèles", order: 5 },
    { step: "Sacrifice", description: "Sacrifice animal en commémoration d'Ibrahim", order: 6 }
  ];

  const facts = [
    { label: "Altitude", value: "277 m", description: "Au-dessus du niveau de la mer" },
    { label: "Population", value: "2M+", description: "Habitants permanents" },
    { label: "Pèlerins", value: "3M+", description: "Visiteurs annuels pour le Hajj" },
    { label: "Histoire", value: "1400+", description: "Années d'histoire islamique" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroMakkah} 
            alt="La Kaaba à La Mecque" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-islamic font-bold mb-6 animate-fade-in">
            مكة المكرمة
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            La Mecque, Ville Sainte
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Qibla des musulmans du monde entier, cœur spirituel de l'Islam
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="h-5 w-5" />
            <span>Arabie Saoudite • مملكة العربية السعودية</span>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {facts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-golden transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent">{fact.value}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{fact.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Holy Places */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
                الأماكن المقدسة
              </h2>
              <p className="text-lg text-muted-foreground">
                Les lieux saints de La Mecque
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {holyPlaces.map((place, index) => (
                <Card key={index} className="shadow-sacred hover:shadow-mosque transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <place.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-islamic mb-1">{place.name}</CardTitle>
                        <CardDescription className="font-medium text-primary">
                          {place.french}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{place.description}</p>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {place.importance}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pilgrimage Steps */}
          <Card className="shadow-sacred">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                <Camera className="h-6 w-6 text-accent" />
                مناسك الحج
              </CardTitle>
              <CardDescription>
                Les étapes du pèlerinage à La Mecque
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pilgrimage.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                    <Badge variant="default" className="min-w-8 h-8 flex items-center justify-center bg-gradient-gold">
                      {step.order}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1">{step.step}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spiritual Significance */}
          <div className="mt-16">
            <Card className="shadow-mosque">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Heart className="h-6 w-6 text-accent" />
                  Signification Spirituelle
                </CardTitle>
                <CardDescription>
                  L'importance de La Mecque pour les musulmans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Direction de la Prière</h3>
                    <p className="text-muted-foreground mb-4">
                      Tous les musulmans du monde se tournent vers La Mecque lors de leurs cinq prières quotidiennes, 
                      créant une unité spirituelle globale autour de la Kaaba.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Clock className="h-4 w-4" />
                      <span>5 fois par jour, 1,8 milliard de musulmans</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Pèlerinage Obligatoire</h3>
                    <p className="text-muted-foreground mb-4">
                      Le Hajj à La Mecque est l'un des cinq piliers de l'Islam, obligatoire pour tout musulman 
                      ayant les moyens physiques et financiers de l'accomplir au moins une fois dans sa vie.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <Users className="h-4 w-4" />
                      <span>Plus de 2 millions de pèlerins annuellement</span>
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

export default Makkah;