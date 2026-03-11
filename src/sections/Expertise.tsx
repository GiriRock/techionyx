import SectionHeading from '@/components/site/home/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { expertiseGroups } from '@/content/home';

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-corporate-200 to-transparent" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Technology Expertise"
          title="Deep technical capability across architecture, engineering, data, and operations."
          description="Our teams deliver across modern stacks while maintaining enterprise standards for governance, security, and long-term maintainability."
        />

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.15}>
          {expertiseGroups.map((group) => (
            <StaggerItem key={group.title} className="h-full">
              <article className="premium-card h-full flex flex-col group p-8">
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white shadow-sm mb-6 transition-colors duration-300">
                  <group.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-corporate-900">{group.title}</h3>

                <div className="mt-6 pt-6 border-t border-corporate-100 flex flex-wrap gap-2 flex-grow content-start">
                  {group.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-corporate-200 bg-corporate-50 px-3 py-1.5 text-xs font-semibold text-corporate-700 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Expertise;
