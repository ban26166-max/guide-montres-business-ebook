// Secure access code system for ebook downloads
// In production, these would be stored in a database with usage tracking

interface AccessCode {
  code: string;
  isUsed: boolean;
  purchaseDate: string;
  customerEmail?: string;
}

// Demo access codes - in production these would be generated after purchase
const ACCESS_CODES: AccessCode[] = [
  { code: "MONTRES2024", isUsed: false, purchaseDate: "2024-01-15" },
  { code: "BUSINESS789", isUsed: false, purchaseDate: "2024-01-15" },
  { code: "PREMIUM456", isUsed: false, purchaseDate: "2024-01-15" },
  { code: "HORLOGERIE", isUsed: false, purchaseDate: "2024-01-15" },
  { code: "PROFIT2024", isUsed: false, purchaseDate: "2024-01-15" },

];

export const validateAccessCode = (inputCode: string): { valid: boolean; message: string; codeData?: AccessCode } => {
  // Clean input code
  const cleanCode = inputCode.trim().toUpperCase();
  
  if (!cleanCode) {
    return { valid: false, message: "Veuillez entrer un code d'accès" };
  }
  
  // Find the code
  const codeIndex = ACCESS_CODES.findIndex(c => c.code === cleanCode);
  
  if (codeIndex === -1) {
    return { valid: false, message: "Code d'accès invalide. Vérifiez votre code reçu après achat." };
  }
  
  const codeData = ACCESS_CODES[codeIndex];
  
  // Only MONTRES2024 can be reused for testing
  if (codeData.isUsed && codeData.code !== "MONTRES2024") {
    return { valid: false, message: "Ce code a déjà été utilisé. Contactez le support si vous rencontrez un problème." };
  }

  // Mark code as used (except MONTRES2024)
  if (codeData.code !== "MONTRES2024") {
    ACCESS_CODES[codeIndex].isUsed = true;
  }
  
  return { 
    valid: true, 
    message: "Code valide ! Téléchargement en cours...",
    codeData 
  };
};

export const generateAccessCode = (): string => {
  // Generate a unique access code for new purchases
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const addAccessCode = (code: string, customerEmail: string): void => {
  // Add new access code after purchase
  ACCESS_CODES.push({
    code: code,
    isUsed: false,
    purchaseDate: new Date().toISOString(),
    customerEmail: customerEmail
  });
};

// Reset demo codes (for testing purposes)
export const resetDemoCodes = (): void => {
  ACCESS_CODES.forEach(code => {
    if (code.code === "MONTRES2024") {
      code.isUsed = false;
    }
  });
};
