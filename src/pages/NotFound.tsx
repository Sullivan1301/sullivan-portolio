
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-8">
          Oops! Cette page n'existe pas
        </p>
        <Button asChild>
          <a href="/" className="inline-flex items-center">
            Retour à l'accueil <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
