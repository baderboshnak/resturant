// src/pages/Menu.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Leaf, Flame } from "lucide-react";

// ⬅️ ודא שיש לך את הקבצים ב: public/images/...
// לדוגמה: public/images/onion-soup.jpg, salmon-carpaccio.jpg, burrata-salad.jpg, וכו'.

const Menu = () => {
  // משתמשים ב-PATH מקומי (מתיקיית public/images), לא בקישורי URL
  const menuCategories = [
    {
      title: "מנות ראשונות",
      items: [
        {
          name: "מרק בצל צרפתי",
          price: "38",
          description: "מרק בצל עשיר עם גבינת גרויאר וקרוטונים",
          tags: ["vegetarian"],
          rating: 4.8,
          image: "/src/assets/food-4.jpg",
        },
        {
          name: "קרפצ'יו סלמון",
          price: "54",
          description: "פרוסות סלמון דקות עם קפרים, לימון ואבוקדו",
          tags: ["signature"],
          rating: 4.9,
          image: "/src/assets/food-5.jpg",
        },
        {
          name: "סלט בורטה",
          price: "42",
          description: "גבינת בורטה טרייה עם עגבניות שרי וריחן",
          tags: ["vegetarian"],
          rating: 4.7,
          image: "/src/assets/food-6.jpg",
        },
      ],
    },
    {
      title: "מנות עיקריות",
      items: [
        {
          name: "סטייק פילה מדורג",
          price: "89",
          description: "פילה בקר איכותי עם רוטב פטריות ותוספות לבחירה",
          tags: ["signature", "spicy"],
          rating: 4.9,
          image: "src/assets/food-1.jpg",
        },
        {
          name: "דג ברוטב לימון",
          price: "78",
          description: "פילה דג טרי של היום עם רוטב לימון וירקות עונתיים",
          tags: [],
          rating: 4.8,
          image: "src/assets/food-2.jpg",
        },
        {
          name: "ריזוטו פטריות",
          price: "68",
          description: "ריזוטו קרמי עם תערובת פטריות וגבינת פרמזן",
          tags: ["vegetarian"],
          rating: 4.6,
          image: "src/assets/food-8.jpg",
        },
        {
          name: "כבש מבושל",
          price: "85",
          description: "כתף כבש מבושלת במרק ירקות עם עשבי תיבול",
          tags: [],
          rating: 4.7,
          image: "src/assets/food-1.jpg",
        },
      ],
    },
    {
      title: "קינוחים",
      items: [
        {
          name: "טירמיסו ביתי",
          price: "32",
          description: "הטירמיסו המפורסם שלנו עם משקה קפה איטלקי",
          tags: ["signature"],
          rating: 4.9,
          image: "src/assets/food-3.jpg",
        },
        {
          name: "קרם ברולה",
          price: "28",
          description: "קרם וניל עשיר עם שכבת סוכר קרמלי",
          tags: [],
          rating: 4.8,
          image: "src/assets/food-9.jpg",
        },
        {
          name: "מוס שוקולד",
          price: "30",
          description: "מוס שוקולד בלגי עם פירות יער",
          tags: [],
          rating: 4.7,
          image: "src/assets/food-10.jpg",
        },
      ],
    },
    {
      title: "משקאות",
      items: [
        
        {
          name: "קוקטייל בית",
          price: "35",
          description: "קוקטייל מיוחד של הבית עם מרכיבים טריים",
          tags: ["signature"],
          rating: 4.8,
          image: "src/assets/food-11.jpg",
        },
      ],
    },
  ];

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "vegetarian":
        return <Leaf className="h-4 w-4" />;
      case "spicy":
        return <Flame className="h-4 w-4" />;
      case "signature":
        return <Star className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "vegetarian":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "spicy":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "signature":
        return "bg-warm-gold/20 text-accent hover:bg-warm-gold/30";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTagLabel = (tag: string) => {
    switch (tag) {
      case "vegetarian":
        return "צמחוני";
      case "spicy":
        return "חריף";
      case "signature":
        return "מנת הבית";
      default:
        return tag;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            התפריט שלנו
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מבחר מנות איכותיות המוכנות בקפידה מחומרי גלם טריים ומעולים
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif text-center">
                {category.title}
              </h2>
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {/* תמונה מקומית מ-public */}
                      {item.image && item.image.trim() !== "" && (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-80 object-cover"
                        />
                      )}

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold font-serif">{item.name}</h3>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(item.rating)
                                        ? "fill-accent text-accent"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                                <span className="text-sm text-muted-foreground mr-1">
                                  ({item.rating})
                                </span>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-3 leading-relaxed">
                              {item.description}
                            </p>

                            {item.tags && item.tags.length > 0 && (
                              <div className="flex gap-2 flex-wrap">
                                {item.tags.map((tag: string) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className={`${getTagColor(tag)} flex items-center gap-1`}
                                  >
                                    {getTagIcon(tag)}
                                    {getTagLabel(tag)}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="text-left mr-6">
                            <span className="text-2xl font-bold text-accent">₪{item.price}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {categoryIndex < menuCategories.length - 1 && <Separator className="mt-12" />}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 p-8 bg-card rounded-lg">
          <h3 className="text-xl font-bold mb-4 font-serif">הערות חשובות</h3>
          <div className="text-muted-foreground space-y-2">
            <p>• כל המנות מוגשות עם לחם ביתי חם</p>
            <p>• ניתן להזמין תוספות נוספות תמורת תשלום</p>
            <p>• אנו מתמחים בהתאמת התפריט לדיאטות מיוחדות</p>
            <p>• המחירים כוללים מע״מ ואינם כוללים שירות</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
