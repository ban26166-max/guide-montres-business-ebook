import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8">
          <div className="mb-6">
            <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page non trouvée</h2>
            <p className="text-muted-foreground">
              Cette page n'existe pas dans notre guide de business horloger.
            </p>
          </div>
          <Link to="/">
            <Button size="lg" className="font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au Guide
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
