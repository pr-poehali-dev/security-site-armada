import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const services = [
    {
      icon: 'Shield',
      title: 'Физическая охрана',
      description: 'Профессиональная охрана объектов квалифицированными сотрудниками',
      features: ['24/7 дежурство', 'Контроль доступа', 'Патрулирование']
    },
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Современные системы видеонаблюдения с удаленным мониторингом',
      features: ['HD камеры', 'Облачное хранение', 'Мобильное приложение']
    },
    {
      icon: 'Zap',
      title: 'Сигнализация',
      description: 'Установка и обслуживание охранно-пожарных сигнализаций',
      features: ['Беспроводные датчики', 'GSM оповещение', 'Интеграция с ПЦН']
    },
    {
      icon: 'Users',
      title: 'Мероприятия',
      description: 'Обеспечение безопасности корпоративных и массовых мероприятий',
      features: ['Контроль толпы', 'VIP охрана', 'Координация служб']
    }
  ];

  const licenses = [
    { number: 'ЛО-77-01-001234', type: 'Охранная деятельность', date: '15.03.2024' },
    { number: 'ЛО-77-01-005678', type: 'Детективная деятельность', date: '22.06.2024' },
    { number: 'МЧС-77-012345', type: 'Пожарная безопасность', date: '10.01.2024' }
  ];

  const vacancies = [
    { title: 'Охранник 4 разряда', salary: 'от 3 000 ₽', schedule: 'сутки через двое' },
    { title: 'Старший охранник', salary: 'от 55 000 ₽', schedule: 'график 2/2' },
    { title: 'Инженер систем безопасности', salary: 'от 80 000 ₽', schedule: 'пн-пт 9:00-18:00' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Icon name="Shield" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">ООО ЧОО Армада</h1>
                <p className="text-sm text-muted-foreground">Надежная защита вашего бизнеса</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#licenses" className="text-foreground hover:text-primary transition-colors">Лицензии</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <a href="#careers" className="text-foreground hover:text-primary transition-colors">Вакансии</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Лицензированная охранная организация
              </Badge>
              <h2 className="text-5xl font-bold text-foreground leading-tight">
                Профессиональная
                <span className="text-primary block">безопасность</span>
                для вашего бизнеса
              </h2>
              <p className="text-xl text-muted-foreground">
                Современные технологии охраны и многолетний опыт работы. 
                Обеспечиваем полную безопасность объектов любой сложности.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="font-medium">24/7 поддержка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span className="font-medium">опытные сотрудники</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="font-medium"></span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
            
            {/* Application Form */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Оставить заявку</CardTitle>
                <CardDescription className="text-center">
                  Получите персональное предложение в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Интересующая услуга"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  />
                  <Textarea
                    placeholder="Дополнительная информация"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">О компании</h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  ООО ЧОО «Армада» — ведущая охранная организация с многолетним опытом работы 
                  в сфере комплексной безопасности. Мы обеспечиваем надежную защиту объектов 
                  любой сложности, используя современные технологии и профессиональный подход.
                </p>
                <p>
                  Наша команда состоит из квалифицированных специалистов с опытом работы 
                  в силовых структурах. Мы постоянно повышаем квалификацию сотрудников 
                  и внедряем инновационные решения в области безопасности.
                </p>
              </div>

            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl"></div>
                </div>
                <div className="flex items-center space-x-4"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Наши ценности</h4>
                    <p className="text-sm text-muted-foreground">Надежность, профессионализм, инновации</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Лицензии и сертификаты</h3>
            <p className="text-xl text-muted-foreground">
              Все виды деятельности лицензированы и сертифицированы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {licenses.map((license, index) => (
              <Card key={index} className="text-center border-0 bg-white/80">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="FileCheck" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{license.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm text-muted-foreground mb-2">
                    № {license.number}
                  </p>
                  <Badge variant="outline">Действует до {license.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 bg-white/80">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">+7 (800) 555-01-23</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/80">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">info@armada-security.ru</p>
                <p className="text-muted-foreground">sales@armada-security.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/80">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Адрес</h4>
                <p className="text-muted-foreground text-sm">г.Красноярск, ул. Боткина, 63.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/80">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Режим работы</h4>
                <p className="text-muted-foreground text-sm">
                  Пн-Пт: 9:00 - 18:00<br/>
                  Сб-Вс: 10:00 - 16:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Вакансии</h3>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к команде профессионалов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="border-0 bg-white/80">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{vacancy.title}</span>
                    <Badge className="bg-primary/10 text-primary">Открыта</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={16} className="text-primary" />
                      <span className="font-medium">{vacancy.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-muted-foreground">{vacancy.schedule}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Shield" size={24} />
                <h4 className="text-xl font-bold">ООО ЧОО Армада</h4>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональные охранные услуги с 2009 года. 
                Ваша безопасность — наш приоритет.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Физическая охрана</li>
                <li>Видеонаблюдение</li>
                <li>Сигнализация</li>
                <li>Охрана мероприятий</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@armada-security.ru</li>
                <li>г. Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-sm text-primary-foreground/60">
            © 2024 ООО ЧОО Армада. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}