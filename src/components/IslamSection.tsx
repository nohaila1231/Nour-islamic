import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Moon, MapPin, Book, Mountain, Heart } from "lucide-react";
import prayerMosque from "@/assets/prayer-mosque.jpg";
import ramadanMoon from "@/assets/ramadan-moon.jpg";
import quranBook from "@/assets/quran-book.jpg";

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  content: string[];
  id: string;
}

const SectionCard = ({ icon, title, description, image, content, id }: SectionCardProps) => {
  return (
    <Card className="overflow-hidden shadow-mosque hover:shadow-sacred transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            {icon}
            <h3 className="text-xl font-bold font-islamic">{title}</h3>
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardDescription className="text-muted-foreground font-arabic">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {content.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const IslamSection = () => {
  const sections = [
    {
      id: "prayer",
      icon: <Clock className="h-6 w-6" />,
      title: "La Prière (Salah)",
      description: "Les cinq prières quotidiennes, pilier fondamental de l'Islam",
      image: prayerMosque,
      content: [
        "Fajr (l'aube) - 2 rakats avant le lever du soleil",
        "Dhuhr (midi) - 4 rakats après que le soleil ait passé le zénith", 
        "Asr (après-midi) - 4 rakats dans l'après-midi",
        "Maghrib (coucher) - 3 rakats après le coucher du soleil",
        "Isha (nuit) - 4 rakats quand la nuit tombe"
      ]
    },
    {
      id: "ramadan",
      icon: <Moon className="h-6 w-6" />,
      title: "Le Ramadan",
      description: "Le mois sacré de jeûne, de réflexion et de purification spirituelle",
      image: ramadanMoon,
      content: [
        "Jeûne de l'aube au coucher du soleil pendant un mois",
        "Abstinence de nourriture, boisson et relations intimes",
        "Augmentation des prières et de la lecture du Coran",
        "Zakat al-Fitr - aumône obligatoire de fin de Ramadan",
        "Eid al-Fitr - fête marquant la fin du Ramadan"
      ]
    },
    {
      id: "quran",
      icon: <Book className="h-6 w-6" />,
      title: "Le Coran",
      description: "Le livre saint de l'Islam, parole divine révélée au Prophète Muhammad",
      image: quranBook,
      content: [
        "114 chapitres (sourates) révélés sur 23 ans",
        "Guide spirituel et moral pour tous les aspects de la vie",
        "Récitation recommandée quotidiennement",
        "Mémorisation encouragée (Hafiz du Coran)",
        "Traductions disponibles mais l'arabe reste l'original"
      ]
    },
    {
      id: "makkah",
      icon: <MapPin className="h-6 w-6" />,
      title: "Makkah (La Mecque)",
      description: "La ville la plus sacrée de l'Islam, direction de toutes les prières",
      image: prayerMosque,
      content: [
        "Lieu de naissance du Prophète Muhammad (paix soit sur lui)",
        "Abrite la Kaaba, première maison construite pour adorer Allah",
        "Direction (Qibla) vers laquelle tous les musulmans prient",
        "Destination du pèlerinage (Hajj) obligatoire",
        "Millions de pèlerins visitent chaque année"
      ]
    },
    {
      id: "hajj",
      icon: <Mountain className="h-6 w-6" />,
      title: "Le Hajj",
      description: "Le pèlerinage à La Mecque, cinquième pilier de l'Islam",
      image: prayerMosque,
      content: [
        "Obligatoire une fois dans la vie pour qui en a les moyens",
        "Se déroule pendant le mois de Dhul-Hijjah",
        "Rituel du Tawaf - tourner 7 fois autour de la Kaaba",
        "Station à Arafat - pilier principal du Hajj",
        "Sacrifice symbolique commémorant Ibrahim (Abraham)"
      ]
    },
    {
      id: "values",
      icon: <Heart className="h-6 w-6" />,
      title: "Valeurs Islamiques",
      description: "Les principes moraux et éthiques qui guident la vie musulmane",
      image: quranBook,
      content: [
        "Compassion et miséricorde envers toutes les créatures",
        "Justice et équité dans tous les aspects de la vie",
        "Honnêteté et intégrité dans les relations",
        "Respect des parents et des aînés",
        "Charité et aide aux plus démunis"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-islamic text-primary mb-4">
            Les Fondements de l'Islam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic">
            Explorez les piliers, pratiques et valeurs qui forment le cœur de la foi islamique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <SectionCard key={section.id} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IslamSection;