import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  DollarSign,
  Wrench,
  Package,
  ShoppingBag,
  Camera,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  Download,
  FileText,
  Star,
  BookOpen,
  Zap,
  Lock,
  Key,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Index() {
  const [accessCode, setAccessCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.classList.add("ring-2", "ring-primary", "ring-opacity-50");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-primary", "ring-opacity-50");
      }, 2000);
    }
  };

    const validateAndDownload = async () => {
    if (!accessCode.trim()) {
      setValidationMessage("Veuillez entrer votre code d'accès");
      setIsValid(false);
      return;
    }

    setIsValidating(true);
    setValidationMessage("");
    setIsValid(null);

    try {
      const response = await fetch('/api/validate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: accessCode.trim() }),
      });

      const data = await response.json();

      if (data.valid) {
        setIsValid(true);
        setValidationMessage(data.message);
        // Start download
        window.open(data.downloadUrl, '_blank');
      } else {
        setIsValid(false);
        setValidationMessage(data.message);
      }
    } catch (error) {
      setIsValid(false);
      setValidationMessage("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsValidating(false);
    }
  };



    const chapters = [
    {
      id: "basics",
      title: "Les Bases de l'Assemblage de Montres",
      icon: <Wrench className="h-5 w-5" />,
      description: "Types de pièces, fournisseurs et outils nécessaires",
    },
    {
      id: "sourcing",
      title: "Sourcing des Pièces Détachées",
      icon: <ShoppingBag className="h-5 w-5" />,
      description: "Fournisseurs fiables pour maximiser vos marges",
    },
    {
      id: "assembly",
      title: "Techniques d'Assemblage",
      icon: <Clock className="h-5 w-5" />,
      description: "Méthodes DIY et prestataires professionnels",
    },
    {
      id: "branding",
      title: "Création de Marque",
      icon: <Package className="h-5 w-5" />,
      description: "Logo, packaging et storytelling vendeur",
    },
    {
      id: "sales-channels",
      title: "Canaux de Vente",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Plateformes et stratégies de distribution",
    },
    {
      id: "pricing",
      title: "Strat��gies de Prix",
      icon: <DollarSign className="h-5 w-5" />,
      description: "Analyse de marge et tarification optimale",
    },
    {
      id: "presentation",
      title: "Présentation Produit",
      icon: <Camera className="h-5 w-5" />,
      description: "Photos, descriptions et techniques de vente",
    },
    {
      id: "marketing",
      title: "Marketing Digital",
      icon: <Users className="h-5 w-5" />,
      description: "Stratégies pour générer les premières ventes",
    },
    {
      id: "scaling",
      title: "Développement Business",
      icon: <Zap className="h-5 w-5" />,
      description: "Sourcing en gros, automatisation et croissance",
    },
    {
      id: "success-mistakes",
      title: "Cas d'Études et Erreurs",
      icon: <CheckCircle className="h-5 w-5" />,
      description: "Réussites et pièges à éviter",
    },
  ];

  const testimonials = [
    {
      name: "Marc L.",
      age: "24 ans",
      result: "3000€/mois dès le 6ème mois",
      comment:
        "Ce guide m'a permis de lancer mon business de montres. Les techniques de sourcing sont excellentes !",
      rating: 5,
    },
    {
      name: "Sarah M.",
      age: "28 ans",
      result: "5000€ CA mensuel",
      comment:
        "Très complet, surtout la partie marketing Instagram. J'ai suivi étape par étape.",
      rating: 5,
    },
    {
      name: "Alex D.",
      age: "31 ans",
      result: "2500€/mois en 4 mois",
      comment:
        "Les conseils sur les marges m'ont évité de nombreuses erreurs. ROI rapide !",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">
      {/* Hero Section - Ebook Sales */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product Info */}
          <div>
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              📚 Ebook Business
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-6">
              Guide Complet : Assembler et Revendre des Montres
            </h1>
                                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Stratégies éprouvées pour générer{" "}
              <strong>3000-5000€/mois</strong>{" "}
              en assemblant et revendant des montres.
            </p>
            
            <div className="flex items-center gap-4 mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <Download className="h-6 w-6 text-green-600" />
              <div>
                <div className="font-semibold text-green-800 dark:text-green-200">📚 Ebook PDF Téléchargeable</div>
                <div className="text-sm text-green-600 dark:text-green-400">Accès immédiat après achat • Compatible tous appareils</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>📖 10 chapitres détaillés avec cas pratiques</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>📋 Liste complète des fournisseurs fiables</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>💰 Calculs de marge et stratégies de prix</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>📸 Templates marketing et photos produits</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>⚡ Téléchargement instantané (PDF)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>📱 Compatible mobile, tablette, ordinateur</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 border-2 border-primary/20 rounded-lg bg-accent/10">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Accès Ebook Complet
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Entrez votre code d'accès reçu après achat
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Code d'accès (ex: MONTRES2024)"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                    className="flex-1"
                    disabled={isValidating}
                  />
                  <Button
                    onClick={validateAndDownload}
                    disabled={isValidating || !accessCode.trim()}
                    className="font-semibold"
                  >
                    {isValidating ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Accéder
                      </>
                    )}
                  </Button>
                </div>
                {validationMessage && (
                  <p className={`text-xs mt-2 ${isValid === true ? 'text-green-600' : 'text-red-600'}`}>
                    {validationMessage}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Ebook Cover Mockup */}
          <div className="flex justify-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-orange-500/10 max-w-sm">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary to-orange-600 rounded-lg shadow-2xl flex flex-col items-center justify-center text-white p-6">
                <Clock className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold text-center mb-2">
                  GUIDE MONTRES BUSINESS
                </h3>
                                <p className="text-sm text-center opacity-90">
                  Assembler & Revendre pour de Gros Bénéfices
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Price and Package Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">
                📚 Ebook Business Montres
              </CardTitle>
              <CardDescription className="text-lg">
                Guide numérique complet • Téléchargement immédiat • Prix accessible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-4">
                  Ebook Premium Disponible
                </div>
                <p className="text-sm text-muted-foreground">
                  Guide complet pour réussir dans le business des montres
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Ce que vous recevez
                  </h4>
                                    <ul className="space-y-2 text-sm">
                    <li>📚 Ebook PDF complet (haute qualité)</li>
                    <li>📋 Liste fournisseurs mise à jour 2024</li>
                    <li>📝 Templates descriptions produits</li>
                    <li>💹 Calculateur de marge Excel</li>
                    <li>📸 Guide photos produits professionnel</li>
                    <li>🎁 Bonus: stratégies Instagram + TikTok</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    Livraison
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>⚡ Téléchargement immédiat (en 2 minutes)</li>
                    <li>💾 Format PDF optimisé (compatible tous appareils)</li>
                    <li>🔄 Mises à jour gratuites à vie</li>
                    <li>📱 Lecture optimisée mobile/tablette/PC</li>
                    <li>🖨️ Version imprimable incluse</li>
                    <li>💬 Support email gratuit 30 jours</li>
                  </ul>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents Preview */}
      <section id="preview" className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">📖 Aperçu du Contenu</h2>
                    <p className="text-lg text-muted-foreground">
            Guide complet pour maîtriser le business de montres
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {chapters.map((chapter, index) => (
            <Card
              key={chapter.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {chapter.icon}
                  </div>
                  <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        Chapitre {index + 1}
                      </Badge>
                    </div>
                    <h3 className="font-semibold">{chapter.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">⭐ Témoignages Clients</h2>
          <p className="text-lg text-muted-foreground">
            Ils ont réussi grâce à ce guide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonial.age}
                </p>
                <Badge variant="secondary" className="mb-3">
                  {testimonial.result}
                </Badge>
                <p className="text-sm italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Direct Purchase Section */}
      <section id="purchase" className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary/10 via-orange-500/10 to-yellow-500/10 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">🔐 Accès Sécurisé</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Achetez sur Beacons • Recevez votre code • Téléchargement immédiat
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 border-2 border-primary/20">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    Guide Business Montres
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Édition Premium
                  </Badge>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    Code d'accès fourni après achat
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-left">
                    <h4 className="font-semibold mb-3 text-primary">✅ Inclus dans votre achat:</h4>
                                        <ul className="space-y-2 text-sm">
                      <li>📚 Ebook PDF complet</li>
                      <li>📋 Liste fournisseurs 2024</li>
                      <li>💹 Calculateur de marge Excel</li>
                      <li>📸 Guide photos professionnelles</li>
                      <li>🎁 Bonus stratégies sociales</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-3 text-primary">⚡ Livraison instantanée:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>📧 Email automatique en 2 min</li>
                      <li>💾 Téléchargement direct</li>
                      <li>📱 Compatible tous appareils</li>
                      <li>🔄 Mises à jour gratuites</li>

                    </ul>
                  </div>
                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-center mb-2">🔐 Système Sécuris��</h4>
                  <div className="text-sm text-center space-y-1">
                    <div>✅ 1. Achetez sur votre plateforme préférée</div>
                    <div>✅ 2. Recevez votre code d'accès unique</div>
                    <div>✅ 3. Entrez le code ci-dessus pour télécharger</div>
                  </div>
                </div>


              </div>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Lock className="h-4 w-4 text-green-500" />
                  <span>Accès sécurisé par code</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Téléchargement illimité</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Support inclus</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-semibold">Ebook Montres Business</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Guide professionnel pour entrepreneurs • Livraison immédiate • SAV
              inclus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
