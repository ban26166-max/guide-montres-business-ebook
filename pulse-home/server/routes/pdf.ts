import { RequestHandler } from "express";
import { generatePremiumPDF, generatePreviewPDF } from "../utils/pdfGenerator";
import { validateAccessCode } from "../utils/accessCodes";

export const downloadPreviewPDF: RequestHandler = async (req, res) => {
  try {
    console.log('📥 Preview PDF download requested');
    
    const pdfContent = generatePreviewPDF();
    
    // Set headers for PDF download
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="Apercu-Gratuit-Guide-Montres-Business.txt"');
    
    // In production, you would convert this to actual PDF using a library like PDFKit or Puppeteer
    // For now, we serve as text file that can be easily converted to PDF
    res.send(pdfContent);
    
    console.log('✅ Preview PDF served successfully');
  } catch (error) {
    console.error('Preview PDF error:', error);
    res.status(500).json({ error: 'Preview download failed' });
  }
};

export const downloadFullPDF: RequestHandler = async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({
        error: 'Code d\'accès requis',
        message: 'Veuillez fournir votre code d\'accès reçu après achat'
      });
    }

    // Validate access code
    const validation = validateAccessCode(code as string);

    if (!validation.valid) {
      return res.status(403).json({
        error: 'Accès refusé',
        message: validation.message
      });
    }

    console.log('📥 Full PDF download authorized with code:', code);

    const pdfContent = generatePremiumPDF();

    // Set headers for PDF download
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="Guide-Complet-Montres-Business-Premium.txt"');

    res.send(pdfContent);

    console.log('✅ Full PDF served successfully to authorized user');
  } catch (error) {
    console.error('Full PDF error:', error);
    res.status(500).json({ error: 'Download failed' });
  }
};

export const validateCode: RequestHandler = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        valid: false,
        message: 'Code d\'accès requis'
      });
    }

    const validation = validateAccessCode(code);

    if (validation.valid) {
      res.json({
        valid: true,
        message: validation.message,
        downloadUrl: `/api/download-full?code=${code}`
      });
    } else {
      res.status(403).json({
        valid: false,
        message: validation.message
      });
    }
  } catch (error) {
    console.error('Code validation error:', error);
    res.status(500).json({
      valid: false,
      message: 'Erreur de validation du code'
    });
  }
};

export const getPDFInfo: RequestHandler = async (req, res) => {
  res.json({
    preview: {
      filename: 'Apercu-Gratuit-Guide-Montres-Business.pdf',
      size: '0.5 MB',
      pages: 3,
      description: 'Introduction + Chapitre 1 (extrait)',
      downloadUrl: '/api/download-preview'
    },
    full: {
      filename: 'Guide-Complet-Montres-Business-Premium.pdf',
      size: '2.8 MB',
      pages: 95,
      description: 'Guide complet + Tous les bonus',
      accessRequired: true
    }
  });
};
