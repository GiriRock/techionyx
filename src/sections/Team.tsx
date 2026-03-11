import { Linkedin, Twitter, Mail } from 'lucide-react';
import SectionHeading from '@/components/site/home/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Visionary leader with 15+ years of industry experience.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Tech innovator passionate about cutting-edge solutions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Creative director bringing ideas to life.',
    },
    {
      name: 'David Kim',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Expert in streamlining processes and driving efficiency.',
    },
  ];

  return (
    <section id="team" className="section-padding bg-corporate-50 relative border-t border-corporate-200/50">
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet the Experts Behind Our Success"
          description="Our diverse leadership team brings together expertise from various fields to deliver exceptional operational execution."
          align="center"
        />

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {teamMembers.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <div className="premium-card h-full overflow-hidden p-0 group flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <a href="#" className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-brand-600">
                      <Linkedin className="size-4" />
                    </a>
                    <a href="#" className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-brand-600">
                      <Twitter className="size-4" />
                    </a>
                    <a href="#" className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-brand-600">
                      <Mail className="size-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-corporate-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600 uppercase tracking-wider">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-corporate-600 line-clamp-3">{member.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Team;
