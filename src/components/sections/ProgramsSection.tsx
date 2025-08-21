import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Trophy, Palette, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProgramsSectionProps {
  onNavigate: (section: string) => void;
}

export const ProgramsSection = ({ onNavigate }: ProgramsSectionProps) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const programs = [
    {
      icon: BookOpen,
      title: t('programs.education'),
      description: 'Comprehensive educational support including tutoring, scholarship programs, and skill development workshops.',
      color: 'from-blue-500 to-blue-600',
      features: ['Academic Support', 'Scholarship Programs', 'Digital Literacy', 'Vocational Training']
    },
    {
      icon: Users,
      title: t('programs.community'),
      description: 'Community service initiatives that create positive impact and foster civic engagement among youth.',
      color: 'from-green-500 to-green-600',
      features: ['Environmental Projects', 'Elder Care', 'Food Distribution', 'Public Health Campaigns']
    },
    {
      icon: Trophy,
      title: t('programs.leadership'),
      description: 'Leadership training programs designed to develop the next generation of community leaders.',
      color: 'from-purple-500 to-purple-600',
      features: ['Leadership Workshops', 'Mentorship Programs', 'Public Speaking', 'Project Management']
    },
    {
      icon: Palette,
      title: t('programs.cultural'),
      description: 'Cultural preservation and creative expression programs celebrating our rich heritage.',
      color: 'from-pink-500 to-pink-600',
      features: ['Cultural Events', 'Art Workshops', 'Music Programs', 'Traditional Crafts']
    }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="card-gradient p-8 border-0 h-full group cursor-pointer">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {program.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="group-hover:text-primary transition-colors p-0 h-auto"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our programs and become part of a community dedicated to positive change. 
              Together, we can build a brighter future for our society.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="btn-gradient text-white px-8 py-4 text-lg font-semibold group"
            >
              Get Involved Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};