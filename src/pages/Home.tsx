import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Star, Utensils, Heart, Award } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            מסעדת טעמים
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            חוויה קולינרית יוצאת דופן במרכז העיר
          </p>
          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
            מטבח מסורתי עם נגיעה מודרנית, אווירה חמה ושירות מעולה
            שיגרמו לכם לחזור שוב ושוב
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations">
              <Button variant="reserve" size="lg" className="text-lg px-8 py-3">
                הזמינו מקום עכשיו
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="elegant" size="lg" className="text-lg px-8 py-3">
                צפייה בתפריט
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              למה דווקא אצלנו?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              אנחנו מאמינים שארוחה טובה זה הרבה יותר מסתם אוכל
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">מטבח מעולה</h3>
                <p className="text-muted-foreground leading-relaxed">
                  המנות שלנו מוכנות מחומרי גלם טריים ואיכותיים, 
                  עם תשומת לב לכל פרט קטן
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">אווירה חמה</h3>
                <p className="text-muted-foreground leading-relaxed">
                  עיצוב מקסים ואווירה נעימה שיגרמו לכם להרגיש בבית
                  בכל ביקור אצלנו
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">שירות מעולה</h3>
                <p className="text-muted-foreground leading-relaxed">
                  הצוות שלנו מחויב לספק לכם חוויה בלתי נשכחת 
                  עם שירות אדיב ומקצועי
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              המנות המובילות שלנו
            </h2>
            <p className="text-xl text-muted-foreground">
              כמה מהמנות הפופולריות ביותר במסעדה
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${food1})` }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-serif">סטייק פילה מדורג</h3>
                <p className="text-muted-foreground mb-4">
                  סטייק פילה עשיר עם רוטב פטריות ותוספות מגוונות
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">₪89</span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${food2})` }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-serif">דג ברוטב לימון</h3>
                <p className="text-muted-foreground mb-4">
                  פילה דג טרי עם רוטב לימון וירקות עונתיים
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">₪78</span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${food3})` }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-serif">טירמיסו ביתי</h3>
                <p className="text-muted-foreground mb-4">
                  קינוח טירמיסו עשיר ומפנק לסיום מושלם
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">₪32</span>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="hero" size="lg">
                צפייה בתפריט המלא
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">שעות פתיחה</h3>
              <p className="text-muted-foreground">
                ראשון - חמישי: 18:00 - 23:00<br />
                שישי - שבת: 19:00 - 24:00
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">מיקום</h3>
              <p className="text-muted-foreground">
                רחוב הרצל 123<br />
                תל אביב, ישראל
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">הזמנות</h3>
              <p className="text-muted-foreground">
                03-5184689<br />
                info@restaurant-teamim.co.il
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/reservations">
              <Button variant="reserve" size="lg">
                הזמינו מקום עכשיו
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;