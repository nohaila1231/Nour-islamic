import { Moon, Sun, Calendar, Heart, Users, Gift } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ramadanMoon from "@/assets/ramadan-moon.jpg";

const Ramadan = () => {
  const ramadanFacts = [
    { title: "9ème mois", description: "Du calendrier lunaire islamique", icon: Moon },
    { title: "30 jours", description: "De jeûne et de spiritualité", icon: Calendar },
    { title: "Révélation", description: "Du Coran durant ce mois", icon: Heart },
    { title: "Communauté", description: "Union de tous les musulmans", icon: Users }
  ];

  const dailySchedule = [
    { time: "05:00", event: "Suhur", description: "Repas avant l'aube", type: "meal" },
    { time: "05:30", event: "Imsak", description: "Début du jeûne", type: "prayer" },
    { time: "19:20", event: "Iftar", description: "Rupture du jeûne", type: "meal" },
    { time: "21:00", event: "Tarawih", description: "Prières spéciales", type: "prayer" }
  ];

  const benefits = [
    "Purification de l'âme et du corps",
    "Développement de l'empathie envers les moins fortunés",
    "Renforcement de la maîtrise de soi",
    "Rapprochement avec Allah et la communauté",
    "Augmentation de la générosité et de la charité",
    "Amélioration de la santé physique et mentale"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ramadanMoon} 
            alt="Croissant de lune Ramadan" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-islamic font-bold mb-6 animate-fade-in">
            رمضان مبارك
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Le Mois Béni du Ramadan
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Un mois de jeûne, de prière, de réflexion et de communion
          </p>
        </div>
      </section>

      {/* Ramadan Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
              Le Ramadan en Chiffres
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les aspects essentiels de ce mois sacré
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ramadanFacts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-sacred transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-mosque rounded-full flex items-center justify-center">
                      <fact.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-islamic text-primary">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Daily Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-golden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Calendar className="h-6 w-6 text-accent" />
                  Programme Quotidien
                </CardTitle>
                <CardDescription>
                  Le rythme d'une journée de Ramadan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-background border">
                      <Badge 
                        variant={item.type === 'meal' ? 'default' : 'secondary'}
                        className="min-w-16 justify-center"
                      >
                        {item.time}
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{item.event}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      {item.type === 'meal' ? 
                        <Gift className="h-5 w-5 text-accent" /> : 
                        <Moon className="h-5 w-5 text-secondary" />
                      }
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-mosque">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Heart className="h-6 w-6 text-accent" />
                  Bienfaits du Ramadan
                </CardTitle>
                <CardDescription>
                  Les vertus spirituelles et physiques
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
          </div>

          {/* Progress Tracker */}
          <Card className="shadow-sacred">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                <Moon className="h-6 w-6 text-accent" />
                Progression du Ramadan
              </CardTitle>
              <CardDescription>
                Suivez votre parcours spirituel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Jours de jeûne accomplis</span>
                    <span className="text-sm text-muted-foreground">15/30</span>
                  </div>
                  <Progress value={50} className="h-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <Sun className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-primary">Lever du soleil</h4>
                    <p className="text-2xl font-bold text-accent">06:45</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <Moon className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <h4 className="font-semibold text-primary">Coucher du soleil</h4>
                    <p className="text-2xl font-bold text-secondary">19:20</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-primary">Jours restants</h4>
                    <p className="text-2xl font-bold text-primary">15</p>
                  </div>
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

export default Ramadan;