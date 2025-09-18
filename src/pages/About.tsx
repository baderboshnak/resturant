import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            הסיפור שלנו
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            מאחורי כל מנה מסתתר סיפור של תשוקה, מחויבות לאיכות והקפדה על פרטים קטנים
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary font-serif">
              מסעדת טעמים - מסורת של טעם
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                מסעדת טעמים נוסדה בשנת 2010 מתוך חלום פשוט - ליצור מקום בו משפחות 
                וחברים יכולים להתכנס סביב שולחן טוב, ליהנות מאוכל איכותי ולבלות 
                יחד רגעים יפים.
              </p>
              <p>
                במשך השנים, המסעדה שלנו הפכה להיות בית שני עבור מאות משפחות מהאזור. 
                אנחנו גאים בכך שהצלחנו לשמור על האווירה המשפחתית והחמה שלנו, 
                תוך כדי התפתחות והתחדשות מתמדת של התפריט והחוויה שלנו.
              </p>
              <p>
                הפילוסופיה שלנו פשוטה: רק חומרי גלם איכותיים, הכנה בקפידה רבה, 
                ושירות מכל הלב. כל מנה שיוצאת מהמטבח שלנו עוברת בדיקה קפדנית 
                ומוכנה בדיוק כמו שהיינו מכינים עבור המשפחה שלנו.
              </p>
            </div>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 font-serif">
              הערכים שלנו
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">אהבה לאוכל</h4>
                  <p className="text-muted-foreground text-sm">
                    כל מנה מוכנה באהבה ובתשומת לב אישית
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">איכות מעל הכל</h4>
                  <p className="text-muted-foreground text-sm">
                    רק חומרי גלם טריים ואיכותיים ביותר
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">אווירה משפחתית</h4>
                  <p className="text-muted-foreground text-sm">
                    מקום חם ונעים לכל המשפחה
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 font-serif">
            הצוות שלנו
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-warm-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-hero-bg">ד.ש</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">דני שמואל</h3>
                <p className="text-accent font-medium mb-3">השף הראשי</p>
                <p className="text-muted-foreground text-sm">
                  עם ניסיון של 15 שנה במטבחי היוקרה בארץ ובחו"ל, 
                  דני מוביל את הצוות הקולינרי שלנו ליצירת חוויות בלתי נשכחות
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-warm-gold to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-hero-bg">מ.כ</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">מירי כהן</h3>
                <p className="text-accent font-medium mb-3">מנהלת המסעדה</p>
                <p className="text-muted-foreground text-sm">
                  מירי דואגת שכל לקוח ירגיש בבית. עם חיוך תמידי ותשומת לב לפרטים,
                  היא מבטיחה שהחוויה שלכם תהיה מושלמת
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-warm-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-hero-bg">א.ל</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">אבי לוי</h3>
                <p className="text-accent font-medium mb-3">סומליה</p>
                <p className="text-muted-foreground text-sm">
                  אבי יעזור לכם לבחור את היין המושלם לארוחה שלכם, 
                  עם ידע רב וחוש עדין לשילובים מנצחים
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">14</div>
              <p className="text-muted-foreground">שנות ניסיון</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">50,000+</div>
              <p className="text-muted-foreground">לקוחות מרוצים</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">25</div>
              <p className="text-muted-foreground">איש צוות מקצועי</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">4.8</div>
              <p className="text-muted-foreground">דירוג ממוצע</p>
            </CardContent>
          </Card>
        </div>

        {/* Awards Section */}
        <div className="text-center bg-card rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-serif">
            הכרה והוקרה
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">מסעדת השנה 2022</h3>
              <p className="text-muted-foreground text-sm">מדריך המסעדות הישראלי</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">בחירת הלקוחות</h3>
              <p className="text-muted-foreground text-sm">TripAdvisor Travelers' Choice</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">שירות מעולה</h3>
              <p className="text-muted-foreground text-sm">פרס השירות הטוב ביותר</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;