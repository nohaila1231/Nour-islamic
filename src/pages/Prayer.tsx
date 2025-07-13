import { Clock, MapPin, Calendar, Sun, Sunset, Moon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HadithReader from "@/components/HadithReader";
import prayerMosque from "@/assets/prayer-mosque.jpg";
import { useEffect, useState } from "react";

const Prayer = () => {
  const [prayerTimes, setPrayerTimes] = useState([
    { name: "Fajr", time: "05:30", arabic: "الفجر", icon: Sun, description: "Prière de l'aube" },
    { name: "Dhuhr", time: "13:15", arabic: "الظهر", icon: Sun, description: "Prière de midi" },
    { name: "Asr", time: "16:45", arabic: "العصر", icon: Sunset, description: "Prière de l'après-midi" },
    { name: "Maghrib", time: "19:20", arabic: "المغرب", icon: Sunset, description: "Prière du coucher du soleil" },
    { name: "Isha", time: "21:00", arabic: "العشاء", icon: Moon, description: "Prière de la nuit" }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}?city=Paris&country=France&method=2`
        );
        const data = await response.json();
        
        if (data.code === 200) {
          const timings = data.data.timings;
          setPrayerTimes([
            { name: "Fajr", time: timings.Fajr, arabic: "الفجر", icon: Sun, description: "Prière de l'aube" },
            { name: "Dhuhr", time: timings.Dhuhr, arabic: "الظهر", icon: Sun, description: "Prière de midi" },
            { name: "Asr", time: timings.Asr, arabic: "العصر", icon: Sunset, description: "Prière de l'après-midi" },
            { name: "Maghrib", time: timings.Maghrib, arabic: "المغرب", icon: Sunset, description: "Prière du coucher du soleil" },
            { name: "Isha", time: timings.Isha, arabic: "العشاء", icon: Moon, description: "Prière de la nuit" }
          ]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des temps de prière:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  const prayerSteps = [
    "Ablutions (Wudu) - Purification rituelle",
    "Orientation vers la Qibla (La Mecque)",
    "Intention (Niyyah) dans le cœur",
    "Récitation d'Al-Fatiha et d'une sourate",
    "Inclinaison (Ruku) avec glorification d'Allah",
    "Prosternation (Sujud) - rapprochement d'Allah"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={prayerMosque} 
            alt="Mosquée pour la prière" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-islamic font-bold mb-6 animate-fade-in">
            الصلاة
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            La Prière en Islam
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Le lien direct entre le croyant et Allah, cinq fois par jour
          </p>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
              Horaires de Prière Aujourd'hui
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Paris, France</span>
              <Calendar className="h-5 w-5 ml-4" />
              <span>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {prayerTimes.map((prayer, index) => (
              <Card key={prayer.name} className="text-center hover:shadow-mosque transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <prayer.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-islamic">{prayer.arabic}</CardTitle>
                  <CardDescription className="font-medium">{prayer.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">{prayer.time}</div>
                  <p className="text-sm text-muted-foreground">{prayer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Prayer Instructions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-sacred">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Clock className="h-6 w-6 text-accent" />
                  Comment Prier
                </CardTitle>
                <CardDescription>
                  Les étapes essentielles de la prière islamique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prayerSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 min-w-8 h-8 flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-golden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-islamic">
                  <Sun className="h-6 w-6 text-accent" />
                  Bienfaits de la Prière
                </CardTitle>
                <CardDescription>
                  L'importance spirituelle et personnelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Spirituels</h4>
                    <p className="text-sm text-muted-foreground">
                      Renforce la connexion avec Allah, purifie l'âme et apporte la paix intérieure.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Personnels</h4>
                    <p className="text-sm text-muted-foreground">
                      Développe la discipline, la patience et la gratitude envers Allah.
                    </p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Communautaires</h4>
                    <p className="text-sm text-muted-foreground">
                      Unit la communauté musulmane dans l'adoration collective.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section Hadiths */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-islamic font-bold mb-4 text-primary">
                الأحاديث النبوية
              </h2>
              <p className="text-lg text-muted-foreground">
                Paroles et enseignements du Prophète Muhammad ﷺ
              </p>
            </div>
            <HadithReader />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prayer;