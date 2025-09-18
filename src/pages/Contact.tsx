import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "שגיאה",
        description: "נא למלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "ההודעה נשלחה בהצלחה!",
      description: "נחזור אליכם בהקדם האפשרי",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            צרו קשר
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            יש לכם שאלה? רוצים לארגן אירוע מיוחד? אנחנו כאן בשבילכם
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  שלחו לנו הודעה
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">שם מלא *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="השם שלכם"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">טלפון</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="05X-XXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">אימייל *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">נושא</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="על מה תרצו לדבר?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">הודעה *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="כתבו כאן את ההודעה שלכם..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="h-4 w-4 ml-2" />
                    שלחו הודעה
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">פרטי התקשרות</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">כתובת</h3>
                    <p className="text-muted-foreground">
                      רחוב הרצל 123<br />
                      תל אביב 6100501<br />
                      ישראל
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">טלפון</h3>
                    <p className="text-muted-foreground">
                      03-5184689<br />
                      054-1658357 (נייד)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">אימייל</h3>
                    <p className="text-muted-foreground">
                      info@restaurant-teamim.co.il<br />
                      reservations@restaurant-teamim.co.il
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">שעות פתיחה</h3>
                    <p className="text-muted-foreground">
                      ראשון - חמישי: 18:00 - 23:00<br />
                      שישי - שבת: 19:00 - 24:00<br />
                      יום ראשון: סגור
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">עקבו אחרינו</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">מיקום</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold mb-2">רחוב הרצל 123, תל אביב</h3>
                    <p className="text-muted-foreground text-sm">
                      כאן יהיה המפה האינטראקטיבית<br />
                      (נדרש חיבור ל-Google Maps)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12 font-serif">
            שאלות נפוצות
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">האם יש חניה?</h3>
                <p className="text-muted-foreground text-sm">
                  כן, יש לנו חניה פרטית בחלק האחורי של המסעדה ובנוסף 
                  יש חניה ציבורית ברחוב ובאזור.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">האם המקום נגיש?</h3>
                <p className="text-muted-foreground text-sm">
                  כן, המסעדה נגישה לכיסאות גלגלים עם כניסה נפרדת 
                  ושירותים מותאמים.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">האם יש תפריט צמחוני?</h3>
                <p className="text-muted-foreground text-sm">
                  בהחלט! יש לנו מבחר רחב של מנות צמחוניות וטבעוניות, 
                  כולל אפשרויות ללא גלוטן.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">האם ניתן לארגן אירועים?</h3>
                <p className="text-muted-foreground text-sm">
                  כן, אנחנו מתמחים באירועים פרטיים ועסקיים. 
                  צרו קשר לפרטים נוספים והצעת מחיר.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;