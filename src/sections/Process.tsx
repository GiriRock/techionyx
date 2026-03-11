import SectionHeading from '@/components/site/home/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { processSteps } from '@/content/home';

const Process = () => {
  return (
    <section id="process" className="section-padding bg-corporate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Delivery Process"
          title="A structured lifecycle for enterprise transformation programs."
          description="Each engagement follows a transparent process designed to align stakeholders, reduce risk, and deliver measurable progress at every phase."
          align="center"
        />

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.15}>
          {processSteps.map((step) => (
            <StaggerItem key={step.phase} className="h-full">
              <li className="premium-card h-full flex flex-col group p-8">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600 mb-6">
                  <span className="h-px w-6 bg-brand-600/50" />
                  Phase {step.phase}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-corporate-900 group-hover:text-brand-600 transition-colors">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-corporate-600 flex-grow">{step.description}</p>
              </li>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Process;
