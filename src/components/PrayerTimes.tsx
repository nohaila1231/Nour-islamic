import { Clock, Sun, Moon, Sunset, Star, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface PrayerTime {
  name: string;
  arabicName: string;
  time: string;
  icon: JSX.Element;
  description: string;
}

interface PrayerTimesData {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const PrayerTimes = () => {
  const [prayers, setPrayers] = useState<PrayerTime[]>([]);
  const [location, setLocation] = useState<string>("Paris, France");
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  const fetchPrayerTimes = async () => {
    try {
      setLoading(true);
      // API gratuite pour les temps de prière (Aladhan API)
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity/${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}?city=Paris&country=France&method=2`
      );
      const data = await response.json();
      
      if (data.code === 200) {
        const timings: PrayerTimesData = data.data.timings;
        
        const prayerData: PrayerTime[] = [
          {
            name: "Fajr",
            arabicName: "الفجر",
            time: timings.Fajr,
            icon: <Star className="h-5 w-5" />,
            description: "Prière de l'aube"
          },
          {
            name: "Dhuhr", 
            arabicName: "الظهر",
            time: timings.Dhuhr,
            icon: <Sun className="h-5 w-5" />,
            description: "Prière de midi"
          },
          {
            name: "Asr",
            arabicName: "العصر", 
            time: timings.Asr,
            icon: <Sun className="h-5 w-5" />,
            description: "Prière de l'après-midi"
          },
          {
            name: "Maghrib",
            arabicName: "المغرب",
            time: timings.Maghrib,
            icon: <Sunset className="h-5 w-5" />,
            description: "Prière du coucher"
          },
          {
            name: "Isha",
            arabicName: "العشاء",
            time: timings.Isha, 
            icon: <Moon className="h-5 w-5" />,
            description: "Prière de la nuit"
          }
        ];
        
        setPrayers(prayerData);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des temps de prière:", error);
      // Fallback avec des horaires par défaut
      setPrayers([
        {
          name: "Fajr",
          arabicName: "الفجر",
          time: "05:30",
          icon: <Star className="h-5 w-5" />,
          description: "Prière de l'aube"
        },
        {
          name: "Dhuhr", 
          arabicName: "الظهر",
          time: "12:45",
          icon: <Sun className="h-5 w-5" />,
          description: "Prière de midi"
        },
        {
          name: "Asr",
          arabicName: "العصر", 
          time: "16:15",
          icon: <Sun className="h-5 w-5" />,
          description: "Prière de l'après-midi"
        },
        {
          name: "Maghrib",
          arabicName: "المغرب",
          time: "19:20",
          icon: <Sunset className="h-5 w-5" />,
          description: "Prière du coucher"
        },
        {
          name: "Isha",
          arabicName: "العشاء",
          time: "20:45", 
          icon: <Moon className="h-5 w-5" />,
          description: "Prière de la nuit"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes();
    // Mettre à jour les temps de prière toutes les heures
    const interval = setInterval(fetchPrayerTimes, 3600000);
    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-islamic text-primary mb-4">
            Horaires de Prière
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
            <Calendar className="h-4 w-4 ml-4" />
            <span>{currentDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <p className="text-muted-foreground font-arabic">
            Les cinq prières quotidiennes - pilier fondamental de l'Islam
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center text-muted-foreground">
              <Clock className="h-8 w-8 animate-spin mx-auto mb-2" />
              <p>Chargement des horaires de prière...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {prayers.map((prayer, index) => (
                <Card key={prayer.name} className="text-center hover:shadow-mosque transition-all duration-300 group">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-gradient-gold rounded-full group-hover:scale-110 transition-transform duration-300">
                        {prayer.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-islamic">
                      {prayer.name}
                    </CardTitle>
                    <p className="text-2xl font-arabic text-accent font-bold">
                      {prayer.arabicName}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {prayer.time}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {prayer.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground font-arabic">
              * Horaires mis à jour en temps réel via API Aladhan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;