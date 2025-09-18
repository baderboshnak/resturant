import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Heart, Utensils, Users } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";
import {  Link } from "react-router-dom";
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image: food1,
      title: "מנות עיקריות",
      category: "food",
      description: "הסטייק הפילה המפורסם שלנו עם רוטב פטריות"
    },
    {
      id: 2,
      image: food2,
      title: "דגים טריים",
      category: "food",
      description: "דג ים טרי עם ירקות עונתיים"
    },
    {
      id: 3,
      image: food3,
      title: "קינוחים מפנקים",
      category: "food",
      description: "הטירמיסו הביתי שלנו"
    },
    {
      id: 4,
      image: heroImage,
      title: "האווירה שלנו",
      category: "atmosphere",
      description: "פינת ישיבה אינטימית במסעדה"
    },
    {
      id: 5,
      image: food1,
      title: "מנות פתיחה",
      category: "food",
      description: "מבחר המנות הראשונות שלנו"
    },
    {
      id: 6,
      image: heroImage,
      title: "ערב רומנטי",
      category: "atmosphere",
      description: "הסידור המושלם לערב רומנטי"
    },
    {
      id: 7,
      image: food2,
      title: "מנות חגיגיות",
      category: "events",
      description: "מנה מיוחדת לאירועים"
    },
    {
      id: 8,
      image: food3,
      title: "קינוח חגיגי",
      category: "events",
      description: "עוגת יום הולדת מיוחדת"
    },
    {
      id: 9,
      image: heroImage,
      title: "אירועים פרטיים",
      category: "events",
      description: "אירוח בסגנון גדול"
    }
  ];

  const categories = [
    { id: "all", name: "הכל", icon: Camera },
    { id: "food", name: "אוכל", icon: Utensils },
    { id: "atmosphere", name: "אווירה", icon: Heart },
    { id: "events", name: "אירועים", icon: Users }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            גלריית התמונות
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הציצו לחוויה הקולינרית והאווירה הייחודית שמחכות לכם במסעדת טעמים
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? "bg-accent text-accent-foreground shadow-md" 
                    : "hover:bg-accent/10"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <IconComponent className="h-4 w-4 ml-2" />
                {category.name}
              </Badge>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                  <div className="relative">
                    <div 
                      className="aspect-square bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4 left-4">
                        <h3 className="text-white font-bold text-lg mb-1 font-serif">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-bold text-2xl mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-white/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-subtle rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-serif">
            מתלהבים ממה שראיתם?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            בואו לחוות בעצמכם את הטעמים המיוחדים והאווירה הנעימה 
            שמחכים לכם במסעדת טעמים
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/reservations"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent to-warm-gold text-hero-bg font-bold text-lg rounded-md shadow-warm hover:shadow-elegant hover:scale-105 transition-all duration-300"
            >
              הזמינו מקום עכשיו
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 py-3 bg-deep-brown text-cream border border-warm-gold/30 font-semibold rounded-md hover:bg-primary hover:border-warm-gold/60 shadow-md hover:shadow-lg transition-all duration-300"
            >
              צפייה בתפריט
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;