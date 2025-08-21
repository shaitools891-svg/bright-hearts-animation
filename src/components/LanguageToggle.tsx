import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="gap-2 text-foreground hover:text-primary transition-colors"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">
          {i18n.language === 'en' ? 'বাংলা' : 'English'}
        </span>
      </Button>
    </motion.div>
  );
};