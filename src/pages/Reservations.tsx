import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    notes: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "שגיאה",
        description: "נא למלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "ההזמנה נשלחה בהצלחה!",
      description: "נחזור אליכם תוך 24 שעות לאישור ההזמנה",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      notes: ""
    });
  };

  const timeSlots = [
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", 
    "21:00", "21:30", "22:00", "22:30", "23:00"
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            הזמנת מקום
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מזמינים אתכם לחוויה קולינרית בלתי נשכחת במסעדת טעמים
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">פרטי ההזמנה</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4" />
                      שם מלא *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="השם שלכם"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4" />
                      טלפון *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="05X-XXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4" />
                    אימייל (אופציונלי)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      תאריך *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      שעה *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="בחרו שעה" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests" className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4" />
                    מספר סועדים *
                  </Label>
                  <Select value={formData.guests} onValueChange={(value) => setFormData(prev => ({ ...prev, guests: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="בחרו מספר סועדים" />
                    </SelectTrigger>
                    <SelectContent>
                      {guestOptions.map((num) => (
                        <SelectItem key={num} value={num}>{num} סועדים</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4" />
                    הערות מיוחדות (אופציונלי)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="אלרגיות, חגיגה מיוחדת, העדפות ישיבה..."
                    rows={3}
                  />
                </div>

                <Button type="submit" variant="reserve" className="w-full">
                  שלחו את ההזמנה
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Panel */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">מידע חשוב</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">שעות פתיחה</h4>
                    <p className="text-muted-foreground text-sm">
                      ראשון - חמישי: 18:00 - 23:00<br />
                      שישי - שבת: 19:00 - 24:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">קבוצות גדולות</h4>
                    <p className="text-muted-foreground text-sm">
                      לקבוצות מעל 12 איש נא להתקשר ישירות
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">צרו קשר</h4>
                    <p className="text-muted-foreground text-sm">
                      03-5184689<br />
                      info@restaurant-teamim.co.il
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            

            <Card className="bg-gradient-subtle">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 font-serif">💡 טיפ</h3>
                <p className="text-muted-foreground text-sm">
                  ההזמנה מראש מומלצת בחום, במיוחד בסופי השבוע 
                  ובחגים. כך תוכלו להבטיח את המקום המושלם לערב שלכם!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;