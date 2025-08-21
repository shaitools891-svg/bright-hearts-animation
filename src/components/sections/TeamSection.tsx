import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Mail, Twitter } from 'lucide-react';

export const TeamSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Sample team members - in real app, this would come from JSON data
  const teamMembers = [
    {
      name: 'Sarah Ahmed',
      role: 'Executive Director',
      bio: 'Passionate about youth development and community building with over 8 years of experience in nonprofit management.',
      image: null, // Will use initials
      social: {
        email: 'sarah@brighthearts.org',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Md. Rahman',
      role: 'Program Coordinator',
      bio: 'Dedicated to creating impactful educational programs that empower young minds to reach their potential.',
      image: null,
      social: {
        email: 'rahman@brighthearts.org',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Fatima Khan',
      role: 'Community Outreach',
      bio: 'Building bridges between communities and fostering inclusive environments for youth development.',
      image: null,
      social: {
        email: 'fatima@brighthearts.org',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ali Hassan',
      role: 'Youth Mentor',
      bio: 'Former program participant turned mentor, inspiring the next generation of community leaders.',
      image: null,
      social: {
        email: 'ali@brighthearts.org',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('team.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="card-gradient p-6 text-center border-0 group">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={member.image || undefined} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-xl font-bold">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.social.email && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail size={14} />
                    </motion.a>
                  )}
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin size={14} />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.twitter}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Twitter size={14} />
                    </motion.a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};